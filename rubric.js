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
  }
};
