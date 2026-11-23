// 채점 기준. 기말은 교수님 「○○을 소개합니다」 기말과제 안내(4·7·9·12·13번)에서 옮겼습니다.
// 수준(우수~미흡)별 점수는 안내문에 없어서 정하지 않았습니다. 채점자가 수준을 고르고 점수를 직접 적습니다.
window.RUBRIC = {
  final: {
    title: "기말과제 「○○을 소개합니다」",
    source: "교수님 기말과제 안내 13. 평가 기준",
    total: 40,
    bonusMax: 3,
    levels: [
      { id: "우수", text: "요구 사항을 모두 충족하고, 예외 상황(손이 사라짐, 카메라 거부, 좁은 화면)까지 처리한다. 설계 판단의 근거를 대상과 사용자에 연결해 설명한다." },
      { id: "양호", text: "요구 사항을 모두 충족한다. 근거를 설명하지만 일부가 '도구가 그렇게 만들어 줘서'에 머문다." },
      { id: "보통", text: "요구 사항 일부가 작동하지 않거나 예외 상황에서 멈춘다. 근거가 단편적이다." },
      { id: "미흡", text: "요구 사항의 절반 이상이 작동하지 않는다. 근거를 제시하지 못한다." }
    ],
    items: [
      { id: "structure", name: "소개 서사와 사이트 구성", max: 10, look: "섹션 6개 이상, 섹션 흐름이 대상을 이해시키는가",
        checks: [
          { id: "sections", type: "count", min: 6, label: "섹션 수" }
        ] },
      { id: "interaction", name: "인터랙션 구현", max: 10, look: "12개 이상이 명세대로 작동하는가, 범주 조건, 손 인식 2종",
        checks: [
          { id: "p1", type: "count", min: 5, label: "1부(#1–46) 인터랙션 수 · 명세대로 작동하는 것만", sum: true },
          { id: "p1cd", type: "yes", label: "그중 C 드래그·입력 또는 D 값→상태가 1개 이상" },
          { id: "p2", type: "count", min: 5, label: "2부(#52–97) 인터랙션 수 · 명세대로 작동하는 것만", sum: true },
          { id: "p2cats", type: "count", min: 4, label: "2부에서 서로 다른 범주(K~S) 수" },
          { id: "p2hard", type: "count", min: 2, label: "2부에서 난이도 ●● 카드 수" },
          { id: "hand", type: "count", min: 2, label: "손 인식 인터랙션 수", sum: true },
          { id: "handDirect", type: "yes", label: "손 인식 · 직접 조작형 1개 이상" },
          { id: "handGesture", type: "yes", label: "손 인식 · 제스처 판정형 1개 이상" }
        ],
        sumMin: 12, sumLabel: "합계 (1부 + 2부 + 손 인식)" },
      { id: "harness", name: "harnessing 증거", max: 10, look: "5칸 명세서, 다른 트리거, 튜닝 로그, 나만의 ⚠",
        checks: [
          { id: "specAll", type: "yes", label: "사이트의 모든 인터랙션이 5칸 명세로 적혀 있음" },
          { id: "altTrigger", type: "count", min: 3, label: "다른 트리거 (카드의 원래 트리거를 바꾼 것)" },
          { id: "tuning", type: "count", min: 3, label: "튜닝 로그 세트 (변수 하나만 바꾼 3컷)" },
          { id: "warn", type: "count", min: 3, label: "나만의 ⚠" }
        ] },
      { id: "aesthetic", name: "심미", max: 7, look: "DESIGN.md와 실제 사이트의 일치, 타이포, 모션의 톤",
        checks: [
          { id: "designMatch", type: "yes", label: "DESIGN.md의 색·글꼴·간격·모션 규칙이 실제 사이트와 일치" }
        ] },
      { id: "responsive", name: "반응형·대체 입력·발표", max: 3, look: "세 폭, 카메라 없이도 작동, 손으로 라이브 시연",
        checks: [
          { id: "w1440", type: "yes", label: "1440px에서 제대로 보이고 작동 (손 인식 포함)" },
          { id: "w768", type: "yes", label: "768px에서 제대로 보이고 작동" },
          { id: "w390", type: "yes", label: "390px에서 제대로 보이고 작동 (가로 스크롤 없음)" },
          { id: "noCamera", type: "yes", label: "카메라를 차단해도 멈추지 않고 대체 입력으로 작동" },
          { id: "liveDemo", type: "yes", label: "발표에서 손으로 라이브 시연" }
        ] }
    ],
    submission: [
      { id: "url", label: "1. 배포 URL (https 주소 1개)" },
      { id: "noteA", label: "2. 제작 노트 A. 대상과 섹션 스토리보드" },
      { id: "noteB", label: "2. 제작 노트 B. 레퍼런스 3곳 분석과 섞는 규칙" },
      { id: "noteC", label: "2. 제작 노트 C. 5칸 명세서 (어느 칸으로 세는지 표시)" },
      { id: "noteD", label: "2. 제작 노트 D. 다른 트리거 3 · 튜닝 로그 3 · 나만의 ⚠ 3" },
      { id: "noteE", label: "2. 제작 노트 E. AI 사용 기록" },
      { id: "noteF", label: "2. 제작 노트 F. 출처와 라이선스 목록" },
      { id: "designmd", label: "3. DESIGN.md 파일" },
      { id: "video", label: "4. 시연 영상 (mp4, 2~3분 · 손 인식 2개 이상 + 휴대폰 터치 장면)" }
    ],
    bonusModules: ["3D", "사운드", "모션그래픽 인트로", "제품 시뮬레이터"]
  },
  w10: {
    title: "10주차 과제 (1~46 공유 링크)",
    source: "교수님 10주차 과제 슬라이드",
    note: "슬라이드에 배점과 채점 기준이 없습니다. 여기서는 확인한 내용만 기록하고, 점수 칸은 비워 두었습니다.",
    numbers: 46,
    checks: [
      { id: "open", type: "yes", label: "공유 링크가 로그인 없이 열림" },
      { id: "lms", type: "yes", label: "LMS에 올림" },
      { id: "advVar", type: "yes", label: "Advanced · 변수를 화면에서 바로 바꿀 수 있음" },
      { id: "advSlider", type: "yes", label: "Advanced · 범위가 넓은 값은 슬라이더로 조절" },
      { id: "team", type: "yes", label: "팀 모임 1회 이상" }
    ]
  },
  w11: {
    title: "11주차 과제 (47~97 공유 링크)",
    source: "과제 원문을 받지 못했습니다. 번호 범위는 학생 제출물의 표기(47~97)를 따랐습니다",
    note: "배점과 채점 기준을 받지 못했습니다. 여기서는 링크가 열리는지와 번호별 확인만 기록하고, 점수 칸은 비워 두었습니다.",
    from: 47,
    to: 97,
    checks: [
      { id: "open", type: "yes", label: "공유 링크가 로그인 없이 열림" }
    ]
  },
  // 기말 기획서. 교수님 기말과제 안내 11번(일정)의 12주 할 일 다섯 가지를, 2·3·4·13번의 문장대로 확인하는 칸입니다.
  // 안내문에 기획서 배점이 없어서 점수는 정하지 않았습니다. basis 는 안내문에서 옮긴 문장입니다.
  plan: {
    title: "기말 기획서 (12주 체크포인트)",
    source: "교수님 기말과제 안내 11. 일정 · 12주",
    note: "안내문에 기획서의 배점과 제출 형식이 없습니다. 12주 할 일 다섯 가지를 안내문 문장대로 확인하고, 점수 칸은 비워 두었습니다.",
    checkpoint: "스토리보드와 DESIGN.md를 수업에서 보여 줄 수 있다",
    groups: [
      { id: "target", name: "대상 확정", src: "2. 소개 대상 고르기", look: "제품 · 사람 · 분해도 가운데 하나, 고를 때 물어볼 것 세 가지",
        pick: { id: "type", label: "유형", options: ["제품", "사람", "분해도"] },
        checks: [
          { id: "tHand", type: "yes", label: "손 인식 인터랙션 2개가 들어갈 자리가 있음" },
          { id: "tStory", type: "yes", label: "섹션 6개를 채울 이야기가 있음" },
          { id: "tSource", type: "yes", label: "사진과 자료를 직접 찍거나 구할 수 있음" },
          { id: "tRule", type: "yes", label: "꼭 지킬 것에 어긋나지 않음 (실존 인물은 공개된 정보만 · 수치에는 출처나 '근사')" }
        ],
        basis: [
          "제품, 사람, 분해도 가운데 하나를 고른다.",
          "손으로 만져 보고 싶어지는 대상인가. 손 인식 인터랙션 2개가 자연스럽게 들어갈 자리가 있어야 한다.",
          "섹션 6개를 채울 이야기가 있는가.",
          "사진과 자료를 직접 찍거나 구할 수 있는가.",
          "실존 인물은 공개된 정보와 직접 찍거나 만든 소재만 쓴다. 본인 동의 없이 사적인 정보를 넣지 않는다.",
          "분해도에 넣는 수치(크기, 무게, 성능)에는 출처를 붙인다. 출처를 찾지 못한 숫자는 빼거나 '근사'라고 적는다."
        ] },
      { id: "refs", name: "레퍼런스 3곳 분석", src: "3. 사이트 뼈대", look: "레퍼런스 3곳, 사이트마다 모션 언어",
        checks: [
          { id: "rCount", type: "count", min: 3, label: "레퍼런스 수" },
          { id: "rGallery", type: "yes", label: "안내한 갤러리에서 고름 (awwwards · godly · GDWEB · Webzibition · Supahero)" },
          { id: "rMotion", type: "count", min: 3, label: "모션 언어를 적은 사이트 수 (속도 · 이징 · 화면이 바뀌는 방식 · 글자를 다루는 방식)" }
        ],
        basis: [
          "awwwards, godly, GDWEB, Webzibition, Supahero에서 고른다.",
          "사이트마다 모션 언어를 적는다. 움직임의 속도, 이징(빨라지고 느려지는 방식), 화면이 바뀌는 방식, 글자를 다루는 방식."
        ] },
      { id: "mix", name: "섞는 규칙", src: "3. 사이트 뼈대", look: "섞는 규칙을 직접 썼는가",
        checks: [
          { id: "mWritten", type: "yes", label: "섞는 규칙을 문장으로 직접 씀" },
          { id: "mMapped", type: "yes", label: "무엇을 어느 레퍼런스에서 가져오는지 나뉘어 있음 (구조는 A, 글자는 B, 색은 C)" }
        ],
        basis: [
          "예: \"구조는 A처럼 한 화면씩 고정되며 넘어가고, 글자는 B처럼 줄 단위로 걷히고, 색은 C처럼 흑백에 한 색만 쓴다.\"",
          "AI에게 '세 사이트를 섞어 달라'고 맡기지 않는다. 섞는 규칙 자체가 평가 대상이다."
        ] },
      { id: "board", name: "섹션 스토리보드", src: "3. 사이트 뼈대 · 13. 평가 기준", look: "섹션 6개 이상, 섹션 흐름이 대상을 이해시키는가",
        checks: [
          { id: "bCount", type: "count", min: 6, label: "섹션 수" },
          { id: "bFlow", type: "yes", label: "섹션 흐름이 대상을 이해시키는 순서임" },
          { id: "bCore", type: "yes", label: "유형의 중심 섹션이 있음 (제품: 직접 조작 · 사람: 연대기와 작업 갤러리 · 분해도: 분해)" }
        ],
        basis: [
          "섹션을 6개 이상 쌓는다. 아래 흐름을 출발점으로 삼고, 대상에 맞게 바꾼다. (첫인상 · 맥락 · 핵심 · 세부 · 데이터 · 마무리)",
          "중심이 되는 섹션 — 제품: 직접 조작해 보는 섹션 / 사람: 연대기와 작업 갤러리 / 분해도: 전체에서 부품으로 들어가는 분해 섹션",
          "섹션 6개 이상, 섹션 흐름이 대상을 이해시키는가"
        ] },
      { id: "design", name: "DESIGN.md 초안", src: "3. 사이트 뼈대", look: "색, 글꼴, 간격, 모션 규칙을 숫자로",
        checks: [
          { id: "dColor", type: "yes", label: "색 규칙이 적혀 있음" },
          { id: "dFont", type: "yes", label: "글꼴 규칙이 적혀 있음" },
          { id: "dSpace", type: "yes", label: "간격 규칙이 적혀 있음" },
          { id: "dMotion", type: "yes", label: "모션 규칙이 숫자로 적혀 있음 (전환 시간 · 이징 · 차례 간격)" },
          { id: "dLicense", type: "yes", label: "글꼴 라이선스를 확인함" }
        ],
        basis: [
          "DESIGN.md는 사이트의 디자인 규칙을 적은 텍스트 파일이다. 색, 글꼴, 간격, 그리고 모션 규칙을 숫자로 적는다. 예: 기본 전환 0.4초, ease-out, 차례로 나타날 때 간격 0.08초.",
          "글꼴 조합의 근거는 Fonts In Use와 TypePair에서, 한글 글꼴은 산돌구름과 Freefaces에서 찾고 라이선스를 확인한다."
        ] },
      { id: "inter", name: "인터랙션 계획", optional: true, src: "4. 필수 인터랙션 12개", look: "12주 할 일에는 없는 항목. 기획서에 적어 온 경우에만 확인",
        checks: [
          { id: "iP1", type: "count", min: 5, label: "1부(#1–46)에서 고른 수", sum: true },
          { id: "iP1cd", type: "yes", label: "그중 C 드래그·입력 또는 D 값→상태가 1개 이상" },
          { id: "iP2", type: "count", min: 5, label: "2부(#52–97)에서 고른 수", sum: true },
          { id: "iP2cats", type: "count", min: 4, label: "2부에서 서로 다른 범주(K~S) 수" },
          { id: "iP2hard", type: "count", min: 2, label: "2부에서 난이도 ●● 카드 수" },
          { id: "iHand", type: "count", min: 2, label: "손 인식 인터랙션 수", sum: true },
          { id: "iHandDirect", type: "yes", label: "손 인식 · 직접 조작형 1개 이상" },
          { id: "iHandGesture", type: "yes", label: "손 인식 · 제스처 판정형 1개 이상" }
        ],
        sumMin: 12, sumLabel: "합계 (1부 + 2부 + 손 인식)",
        basis: [
          "카탈로그 1부에서 5개, 2부에서 5개, 손 인식 2개. 모두 합쳐 12개 이상이다.",
          "1부: C 드래그·입력 또는 D 값→상태에서 1개 이상 / 2부: 서로 다른 범주(K~S) 4개 이상, 난이도 ●● 카드 2개 이상 / 손 인식: 직접 조작형 1개 + 제스처 판정형 1개"
        ] }
    ]
  }
};
