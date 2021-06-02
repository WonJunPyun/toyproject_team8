const qnaList = [
  {
    q: '1. 친구가 말했다."너 입사 선물로 뭐 갖고 싶어?',
    a: [
      { answer: "a. 최신 핸드폰", type: 1 },
      { answer: "b. 침대", type: 2 },
      { answer: "c. 블루투스 이어폰", type: 3 },
      { answer: "d. 너(you)", type: 4 },
    ],
  },
  {
    q: "2. 첫 IT회사에 입사해서 빈 책상에 가장 먼저 놓고 싶은 물건은?",
    a: [
      { answer: "a. 컴퓨터", type: 1 },
      { answer: "b. 노트북 거치대", type: 2 },
      { answer: "c. 무선 충전기", type: 3 },
      { answer: "d. 부장님 사진", type: 4 },
    ],
  },
  {
    q: "3. 부장님 사무실에 들어갔다. 가장 먼저 눈에 들어오는 것은?",
    a: [
      { answer: "a. 트리플 모니터", type: 1 },
      { answer: "b. 고급 소파", type: 2 },
      { answer: "c. 명패", type: 3 },
      { answer: "d. 부장님의 까진 머리", type: 4 },
    ],
  },
  {
    q: "4. 처음 발령이 났다. 발령지는?",
    a: [
      { answer: "a. 서울", type: 1 },
      { answer: "b. 해외", type: 2 },
      { answer: "c. 제주", type: 3 },
      { answer: "d. 북한", type: 4 },
    ],
  },
  {
    q: "5. 컴퓨터가 고장났는데 어떤 오류일까?",
    a: [
      { answer: "a. 하드웨어 결함", type: 1 },
      { answer: "b. 모니터가 망가졌다", type: 2 },
      { answer: "c. USB포트 고장", type: 3 },
      { answer: "d. 고양가 전선을 건드렸다", type: 4 },
    ],
  },
  {
    q: "6. 회사 휴게실에 가장 눈에 띄는 물품은?",
    a: [
      { answer: "a. 정수기", type: 1 },
      { answer: "b. 안마기", type: 2 },
      { answer: "c. 수면안대", type: 3 },
      { answer: "d. 탈출용 해머", type: 4 },
    ],
  },
  {
    q: "7. 아침에 차고 갈 시계 종류?",
    a: [
      { answer: "a. 핸드폰으로 충분하다", type: 1 },
      { answer: "b. 롤렉스", type: 2 },
      { answer: "c. 카시오 전자시계", type: 3 },
      { answer: "d. 캐릭터 시계", type: 4 },
    ],
  },
  {
    q: "8. 출퇴근 시 이용하는 교통수단은?",
    a: [
      { answer: "a. 자가용", type: 1 },
      { answer: "b. 대중교통", type: 2 },
      { answer: "c. 전기 킥보드", type: 3 },
      { answer: "d. 날아간다", type: 4 },
    ],
  },
  {
    q: "9. 오늘 저녁 회식 메뉴는?",
    a: [
      { answer: "a. 소고기", type: 1 },
      { answer: "b. 돈까스", type: 2 },
      { answer: "c. 김치찌개", type: 3 },
      { answer: "d. 인절미 빙수", type: 4 },
    ],
  },
  {
    q: "10. 사직서에 쓰고 싶은 말은?",
    a: [
      { answer: "a. 이직", type: 1 },
      { answer: "b. 잘 배우고 갑니다", type: 2 },
      { answer: "c. 개인사유", type: 3 },
      { answer: "d. 로또 1등 당첨됐어요", type: 4 },
    ],
  },
];

const resultInfo = [
  {
    name: "캥거루형",
    subName: "안마의자 마니아 캥거루형",
    descTitle: "안락함이야 말로 집중력 유지의 중요한 요소",
    desc: "당신은 일도 건강도 두마리의 토끼를 한번에 잡으려 노력하는 사람이군요! 두마리 모두 놓치지 않기 위해서는 자투리 시간을 잘 활용할 줄 알아야합니다! 몸을 쉴때는 머리로, 머리를 쉴때는 몸으로. 철두철미한 건강관리와 함께 멀티태스킹에도 능력이 있는 당신의 사무실에는 건강관리를 위한 아이템들이 원기를 북돋아줍니다.",
    items: ["인체공학의자", "손마사지기", "등받이 쿠션"],
  },
  {
    name: "꿀벌형",
    subName: "근면성실 꿀벌형",
    descTitle: "부지런하게 쉬지않고 동료와 함께 전진!",
    desc: "당신은 동료들과 절차탁마하며 한걸음 한걸음 함께 걸어나가는 사람이군요! 근면성실한 당신의 모습은 의지할 수 있기에, 늘 누군가의 구원이 되어주곤 하는 당신. 어디선가 누군가에게 무슨일이 생기면 슈퍼맨처럼 문제를 해결해주죠. 모범적인 당신의 사무실에 함께할 아이템들은 찾아보아요.",
    items: ["모니터암", "높이조절가능책상", "손목패드"],
  },
  {
    name: "부엉이형",
    subName: "야근요정 부엉이형",
    descTitle: "",
    desc: "가구, 기기, 4차원",
    items: ["높이조절가능책상", "가습기", "모니터암"],
  },
  {
    name: "돼지형",
    subName: "금강산도 식후경 돼지형",
    descTitle: "한국인은 자고로 밥심!",
    desc: "당신은 긍정적인 사고방식으로 어디에서든 돌파구를 찾아내는 사람이군요! 낙천적이라고도 할 수 있는 성격으로 스트레스 해소법을 몸소 실천하며, 업무에 집중하는 당신. 언제나 행복한 기운이 넘실거려, 사교성이 밝은 당신의 곁에는 언제나 사람들이 자리하고 있습니다. 당신의 즐거운 사회생활을 도와줄 사무실을 만들어보아요.",
    items: ["간식박스", "커피자판기", "스테인리스 텀블러&빨대"],
  },
  {
    name: "코알라형",
    subName: "사무실 마이홈 코알라형",
    descTitle: "여유를 가지는 것이야말로 실력",
    desc: "당신은 안락한 공간에서 평정을 지키며 당신의 실력을 오롯히 발휘하는 사람이군요! 과도한 조급함은 독이 될 수 있습니다. 성급해하기만 하기보다 시간적 여유가 허락하지 않더라도, 마음과 몸의 여유가 허락해준다면 보다 좋은 결과를 도출해낼 수 있기 마련이죠. 당신의 마음의 평화를 지켜줄 소품으로 사무실을 꾸며볼까요.",
    items: ["팔받침대", "등받이 쿠션", "인체공학의자"],
  },
  {
    name: "고양이형",
    subName: "유아독존 고양이형",
    descTitle: "위풍당당 유아독존, 당신의 행보를 막을자는 없다.",
    desc: "당신은 어디에도 굴하지 않고 자신의 길을 나아가는 사람이군요! 안정된 자신만의 영역에서 자신의 능력을 가장 잘 발휘할 수 있는 사람. 당신에게는 무엇보다도 당신만의 공간을 꾸리는 것이 최우선. 자신만의 색으로 꾸밀 수 있는 사무실 아이템을 찾아보아요.",
    items: ["헤드셋", "파티션", "이어플러그"],
  },
  {
    name: "다람쥐형",
    subName: "탕비실 지박령 다람쥐형",
    descTitle: "일상을 지켜주는 소소한 행복의 수호자",
    desc: "당신은 일상에서 찾아내는 즐거움을 모두와 함께 공유하길 즐기는 사람이군요! 끊임없이 달려가다보면 지치기 마련, 오랜기간 집중하기 위해서는 휴식도 필요한 일일 것입니다. 적절한 휴식의 중요성을 아는 당신. 거기에 더불어 행복을 나눌줄 아는 당신에게 걸맞는 행복으로 가득한 공간을 만들어봅시다.",
    items: ["간식박스", "스테인리스 텀블러&빨대", "슬리퍼"],
  },
  {
    name: "카멜레온형",
    subName: "충혈된 카멜레온형",
    descTitle: "",
    desc: "가구, 4차원",
    items: ["블루라이트차단경", "손목패드", "팔받침대"],
  },
  {
    name: "고슴도치형",
    subName: "빡! 집중 고슴도치형",
    descTitle: "",
    desc: "기기, 4차원",
    items: ["키패드", "인공눈물", "기계식 키보드"],
  },
  {
    name: "미어캣형",
    subName: "호기심 많은 미어캣형",
    descTitle: "여기도 기웃 저기도 기웃, 끊이지 않는 궁금증을 채워라.",
    desc: "당신은 끝없는 호기심으로 질문거리도 많지만, 지칠줄 모르고 탐구해나아가는 사람이군요! 지금 주어진 것에 안주하지 않으며, '왜?'라는 질문으로 오늘도 새로운 가능성을 찾아가는 당신. 그런 당신을 서포트 하기 위해서는 끊임없는 당신의 여정을 함께 해줄 동반자가 필요합니다. 탐구여정을 함께할 사무실 동료를 찾아볼까요.",
    items: ["마이크", "카메라", "마우스"],
  },
  {
    name: "펭귄형",
    subName: "반들반들 청결 펭귄형",
    descTitle: "계속해서 전진하는 꼼꼼한 노력파",
    desc: "당신은 섬세한 시선으로 무엇이든 구색부터 갖추는 사람이군요! 무슨 일이든 시작하기 위해서는 기본부터 탄탄해야 보다 멀리 나아갈 수 있습니다. 당신의 노력이 빛날 수 있는 공간. 노력이 빛바래지 않도록 쉽게 피로해지지 않을 당신만의 작업공간을 구성해보세요.",
    items: ["인체공학의자", "높이조절가능책상", "모니터암"],
  },
  {
    name: "원숭이형",
    subName: "영타 500타 원숭이형",
    descTitle: "일초의 시간도, 효율적으로",
    desc: "기기당신은 모든일에 효율을 추구하며, 성능을 최우선으로 하는 사람이군요! 같은 시간을 투자하면서, 낮은 가치를 창출해내는 것은 참을 수 없습니다. 당신의 효율을 가장 높이 끌어올릴 수 있는 기기가 최우선. 당신의 실력을 1000% 발휘시켜줄 아이템을 찾아보세요.",
    items: ["기계식 키보드", "마우스", "피벗모니터"],
  },
  {
    name: "판다형",
    subName: "워라밸 판다형",
    descTitle: "일과 삶의 균형지킴이",
    desc: "당신은 일하는데 있어 직장생활의 질을 중요하게 생각하는 사람이군요! 일의 작업능률과 생산성을 지키기 위해서는 보다 먼저, 생활의 질이 유지되어야 하는 법입니다. 집에서도, 직장에서도 자신을 잃지 않으며 따사로운 분위기를 전파해주는 사람. 당신의 사무실에는 삶의 질이 유지하기 위한 물품들을 채워넣어볼까요.",
    items: ["헤드셋", "간식박스", "블루라이트차단경"],
  },
  {
    name: "앵무새형",
    subName: "수다쟁이 앵무새형",
    descTitle: "내가 말하면 이루어지리라 아브라케다브라",
    desc: "당신은 넘치는 상상력과 활기로 사무실의 분위기메이커가 되어주는 사람이군요! 당신의 기발한 아이디어는 벽에 가로막힌 프로젝트의 전환점이 되어주겠지요.  당신의 톡톡튀는 아이디어는 그 자체로도 보물이나 마찬가지! 당신만의 기발한 매력이 살아숨쉬는 사무실을 가꿔보아요.",
    items: ["손마사지기", "가습기", "인공눈물"],
  },
];
