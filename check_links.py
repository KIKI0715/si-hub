#!/usr/bin/env python3
"""students.js 의 링크를 로그인 없이 하나씩 열어 보고 link-status.js 를 다시 씁니다.

판정은 세 가지입니다.
  embed  = 다른 사이트 화면 안에 넣는 것을 막지 않음 → 허브 안에 화면으로 표시
  link   = 열리기는 하지만 화면 안에 넣는 것을 막음 → 새 탭 링크로 표시
  closed = 로그인 없이 열리지 않음 → 학생에게 다시 받아야 함

실행:  python3 check_links.py
한계:  로그인 화면을 200 응답으로 보여 주는 서비스(예: 비공개 노션)는 embed/link 로 잘못 나올 수 있습니다.
       결과가 의심스러우면 허브에서 직접 열어 확인하세요.
"""
import json
import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

HERE = Path(__file__).resolve().parent
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"
HUB_HOSTS = ("github.io",)  # 허브가 올라갈 곳. frame-ancestors 허용 목록과 비교합니다.
LOGIN_HINT = re.compile(r"(login|signin|sign_in|sign-in|/auth|accounts\.google\.com|/sso)", re.I)


def read_students():
    text = (HERE / "students.js").read_text(encoding="utf-8")
    text = "\n".join(line for line in text.splitlines() if not line.lstrip().startswith("//"))
    start, end = text.index("["), text.rindex("]")
    return json.loads(text[start:end + 1])


def frame_ancestors(csp_values):
    for value in csp_values:
        for part in value.split(";"):
            tokens = part.strip().split()
            if tokens and tokens[0].lower() == "frame-ancestors":
                return [t.strip("'\"").lower() for t in tokens[1:]]
    return None


def allows_hub(tokens):
    for t in tokens:
        if t in ("*", "https:", "http:"):
            return True
        if any(h in t for h in HUB_HOSTS):
            return True
    return False


def check(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "text/html,*/*"})
    try:
        with urllib.request.urlopen(req, timeout=25) as resp:
            code, final, headers = resp.status, resp.geturl(), resp.headers
    except urllib.error.HTTPError as e:
        return {"status": "closed", "http": e.code, "why": f"로그인 없이 열면 HTTP {e.code}"}
    except Exception as e:  # DNS, 시간 초과 등
        return {"status": "closed", "http": None, "why": f"열지 못함 ({type(e).__name__})"}

    if final != url and LOGIN_HINT.search(final):
        return {"status": "closed", "http": code, "why": "로그인 화면으로 넘어감"}

    xfo = (headers.get("X-Frame-Options") or "").strip().lower()
    fa = frame_ancestors(headers.get_all("Content-Security-Policy") or [])
    if xfo in ("deny", "sameorigin"):
        return {"status": "link", "http": code, "why": f"화면 안에 넣기 차단 (X-Frame-Options: {xfo})"}
    if fa is not None and not allows_hub(fa):
        return {"status": "link", "http": code, "why": "화면 안에 넣기 차단 (frame-ancestors)"}
    return {"status": "embed", "http": code, "why": "화면 안에 표시 가능"}


def main():
    students = read_students()
    urls = []
    for s in students:
        for link in s.get("links", []):
            if link.get("url") and link["url"] not in urls:
                urls.append(link["url"])
    results = {}
    for u in urls:
        results[u] = check(u)
        print(f'{results[u]["status"]:6}  {u}  — {results[u]["why"]}')
    out = {"checkedAt": time.strftime("%Y-%m-%d %H:%M"), "links": results}
    body = "// 링크 점검 결과. `python3 check_links.py` 가 다시 씁니다. 손으로 고치지 마세요.\n"
    body += "window.LINK_STATUS = " + json.dumps(out, ensure_ascii=False, indent=2) + ";\n"
    (HERE / "link-status.js").write_text(body, encoding="utf-8")
    counts = {k: sum(1 for r in results.values() if r["status"] == k) for k in ("embed", "link", "closed")}
    print(f'\n링크 {len(urls)}개 — 화면 표시 {counts["embed"]} · 새 탭 링크 {counts["link"]} · 열리지 않음 {counts["closed"]}')
    return 0


if __name__ == "__main__":
    sys.exit(main())
