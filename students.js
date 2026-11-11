// 수강생 별칭과 제출 링크 목록. TA가 관리합니다.
// 이 파일은 공개됩니다. 실명·학번은 적지 않습니다(별칭 ↔ 실명·학번은 비공개 저장소의 명단에 둡니다).
// 아래 [ ... ] 안은 JSON 형식을 지켜 주세요(큰따옴표, 마지막 쉼표 없음). 점검 스크립트가 이 부분을 읽습니다.
// task: "w10" = 10주차 과제(1~46 공유 링크), "final" = 기말과제 배포 주소
// numbered: 한 주소 뒤에 /01 처럼 번호를 붙여 여는 경우에만 씁니다. true 면 1~46 전부, [1,2,23] 처럼 쓰면 그 번호만.
// pattern: 번호별 주소 모양이 /01 이 아닐 때만 씁니다. 예: "#/{nn}" → 주소#/01, "?n={n}" → 주소?n=1
window.STUDENTS = [
  {
    "id": "R01",
    "links": [
      { "task": "w10", "label": "실습 모음 (Make 게시 · 번호별 화면)", "url": "https://cleave-sling-32474665.figma.site", "numbered": [1, 2, 23, 37, 41] },
      { "task": "final", "label": "기말 사이트 (리허설용 자리 표시)", "url": "https://kiki0715.github.io/si-archive-test/" }
    ]
  },
  {
    "id": "R02",
    "links": [
      { "task": "w10", "label": "34 스텝퍼 (Make 게시)", "url": "https://track-root-72769243.figma.site" },
      { "task": "w10", "label": "Make 파일 링크 (게시 주소 아님)", "url": "https://www.figma.com/make/zuHvQIFs7Vogdx1JfnFunq/Add-Interactions-to-Frame" }
    ]
  }
];
