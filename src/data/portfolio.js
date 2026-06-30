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
    id: 1,
    title: "부산 문화/예술행사 모바일 반응형 웹페이지",
    purpose:
      "교내 RISE FAIR 캡스톤디자인 경진대회 출품을 위해 제작한 프로젝트",
    description:
      "부산 지역 문화 및 예술 행사 정보를 제공하는 모바일 반응형 웹페이지 제작",
    development: [
      "Cursor AI 활용 개발",
      "AI 도구를 활용한 웹 서비스 구현 및 프로토타이핑",
    ],
    responsibilities: ["서비스 기획", "웹페이지 구현", "기능 구성"],
    keywords: ["Responsive Web", "Web Development", "AI Tool 활용"],
    url: "https://leejeonghun1216.github.io/Busan/",
    image: "/images/project-1.png",
    imageAlt: "부산 문화/예술행사 모바일 반응형 웹페이지 캡처",
  },
  {
    id: 2,
    title: "전국 공용자전거 통합 정보 웹 서비스",
    purpose: "전국 통합데이터 공모전 제출을 위해 제작한 프로젝트",
    description:
      "전국 공용자전거 관련 데이터를 활용하여 정보를 제공하는 웹 서비스 제작",
    development: [
      "Cursor AI 활용 개발",
      "AI 도구를 활용한 웹 서비스 구현 및 프로토타이핑",
    ],
    responsibilities: ["서비스 기획", "데이터 활용", "웹 서비스 구현"],
    keywords: ["Public Data", "Data Utilization", "Web Service"],
    url: "https://public-bike-web.vercel.app/",
    image: "/images/project-2.png",
    imageAlt: "전국 공용자전거 통합 정보 웹 서비스 캡처",
  },
  {
    id: 3,
    title: "SafeMetro 부산",
    purpose: "공공데이터 AI 활용 창업경진대회 출품을 위해 제작한 프로젝트",
    description:
      "부산 지하철 이용자의 접근성을 고려한 정보 제공 및 경로 안내 서비스",
    utilization: ["공공데이터 활용", "AI 기반 서비스 아이디어 구현"],
    development: [
      "Cursor AI 활용 개발",
      "AI 도구를 활용한 웹 서비스 구현 및 프로토타이핑",
    ],
    responsibilities: ["서비스 기획", "기능 설계", "웹 서비스 구현"],
    keywords: ["Public Data", "AI Service", "Accessibility"],
    url: "https://safemetro-busan.vercel.app/",
    image: "/images/project-3.png",
    imageAlt: "SafeMetro 부산 프로젝트 캡처",
  },
];

export const careerGoal =
  "서버와 네트워크 운영 역량을 발전시키고 안정적인 IT 인프라 환경을 구축 및 운영하는 엔지니어로 성장하고자 합니다.";
