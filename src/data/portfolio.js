export const personal = {
  name: "이정훈",
  title: "IT Infrastructure Portfolio",
  keywords: ["Server", "Network", "System Operation"],
  intro:
    "컴퓨터공학을 전공하며 IT 인프라 분야를 목표로 성장하고 있습니다.",
  email: "as01090618260@gmail.com",
  phone: "010-9061-8260",
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "profile", label: "Profile" },
  { id: "certifications", label: "Certifications" },
  { id: "military", label: "Military" },
  { id: "awards", label: "Awards" },
  { id: "projects", label: "Projects" },
  { id: "career-goal", label: "Career Goal" },
  { id: "contact", label: "Contact" },
];

export const profile = {
  education: [
    "경남공업고등학교 전기전자과 졸업",
    "동서대학교 컴퓨터공학과 재학",
  ],
  interests: [
    "IT 인프라",
    "서버 운영",
    "네트워크 관리",
    "전산 시스템 운영",
  ],
};

export const certifications = [
  {
    category: "IT / Network",
    items: [
      "사무자동화산업기사",
      "정보처리기능사",
      "정보기기운용기능사",
      "네트워크관리사 2급",
      "PC정비사 2급",
      "컴퓨터활용능력 2급",
      "워드프로세서",
    ],
  },
  {
    category: "Hardware / Technical",
    items: ["전기기능사", "승강기기능사"],
  },
  {
    category: "기타",
    items: ["1종 보통 운전면허", "지게차운전기능사"],
  },
];

export const military = {
  unit: "공군 병 845기",
  specialty: "정보체계관리 특기로 복무",
  experiences: [
    "공군본부 C4I 체계 운영 및 지원",
    "서버 및 네트워크 관제",
    "전산장비 유지보수",
    "시스템 운영 지원",
  ],
  keywords: ["Server", "Network", "System Operation"],
};

export const awards = [
  {
    id: 1,
    contest: "2025 동서대학교 RISE FAIR 캡스톤디자인 경진대회",
    prize: "장려상",
    description:
      "부산 문화/예술행사 모바일 반응형 웹페이지 프로젝트로 참가하여 수상",
    projectId: 1,
  },
  {
    id: 2,
    contest: "창의적생활코딩 AI 우수 개발 공모전",
    prize: "장려상",
    description: "AI 활용 개발 프로젝트를 통해 참가 및 수상",
    projectId: null,
  },
];

export const projects = [
  {
    id: 5,
    title: "MyCloud",
    subtitle: "Raspberry Pi 기반 개인 클라우드 서버 구축 및 운영",
    version: "V1.1",
    type: "개인 프로젝트",
    purpose: "서비스 개발부터 물리 서버 환경 구성, 배포, 운영 및 유지보수까지 직접 경험하기 위해 진행한 개인 프로젝트",
    description: "Raspberry Pi 5를 기반으로 개인 클라우드 서버를 구축하고, 웹 환경에서 파일을 관리하고 공유할 수 있도록 개발하였습니다. AI 기반 바이브코딩을 활용해 기능을 개발하고 개선하며 실제 물리 서버에서 서비스를 배포하고 테스트하였습니다.",
    utilization: ["Raspberry Pi 5 기반 개인 클라우드 서버 구축", "Linux 기반 서버 환경 구성 및 관리", "웹 기반 파일 관리 및 파일 공유 링크 기능", "서버 장애 및 접속 불가 시 안내 페이지", "네온 오로라(Neon Aurora) 기반 UI 및 공유 링크 페이지 네온사인 디자인"],
    development: ["AI 기반 바이브코딩을 활용한 기능 개발 및 개선", "React · TypeScript · Vite 기반 프런트엔드", "FastAPI 기반 API 및 SQLite 기반 메타데이터 관리"],
    responsibilities: ["물리 서버 환경 구성 및 서비스 배포·테스트", "Linux 서버 관리 및 서비스 운영", "서비스 버전 관리 및 유지보수"],
    keywords: ["Raspberry Pi 5", "Linux", "React", "TypeScript", "FastAPI", "SQLite", "Server Operation"],
  },
];

export const careerGoal =
  "서버와 네트워크 운영 역량을 발전시키고 안정적인 IT 인프라 환경을 구축 및 운영하는 엔지니어로 성장하고자 합니다.";
