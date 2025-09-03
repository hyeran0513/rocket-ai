## 프로젝트 개요

Rocket AI 코딩 테스트에 제출할 프로젝트 코드입니다.

### 기술 스택
- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: SWR
- **Build Tool**: Vite
- **Package Manager**: Yarn 4.4.1
- **Code Quality**: ESLint, Prettier

### 폴더 구조

```
rocket-ai/
├── app/
│   ├── _components/            # 페이지 전용 컴포넌트
│   │   ├── FirstPanel.tsx      # 첫 번째 패널
│   │   ├── SecondPanel.tsx     # 두 번째 패널
│   │   ├── ThirdPanel.tsx      # 세 번째 패널
│   │   ├── SajuTable.tsx       # 사주 테이블 컴포넌트
│   │   └── skeletons/          # 스켈레톤 컴포넌트들
│   │       ├── FirstPanelSkeleton.tsx
│   │       ├── SecondPanelSkeleton.tsx
│   │       ├── ThirdPanelSkeleton.tsx
│   │       ├── SajuTableSkeleton.tsx
│   │       └── index.ts
│   ├── api/                    
│   │   ├── dto/                
│   │   │   ├── dialogs.ts      # 다이얼로그 응답 타입
│   │   │   ├── profile.ts      # 프로필 타입
│   │   │   └── saju.ts         # 사주 데이터 타입
│   │   ├── dialogs.ts          # 다이얼로그 API
│   │   ├── profile.ts          # 프로필 API
│   │   └── saju.ts             # 사주 API
│   ├── favicon.ico             # 파비콘
│   ├── globals.css             # 전역 스타일
│   ├── layout.tsx              # 루트 레이아웃
│   └── page.tsx                # 메인 페이지
├── components/                 # 공통 컴포넌트  
│   ├── saju/                   # 사주 관련 컴포넌트
│   │   ├── SajuBox.tsx         # 사주 박스 컴포넌트
│   │   ├── SajuColumn.tsx      # 사주 컬럼 컴포넌트
│   │   ├── SajuCoreCell.tsx    # 사주 핵심 셀 컴포넌트
│   │   ├── SajuCoreTable.tsx   # 사주 핵심 테이블 컴포넌트
│   │   ├── SajuRow.tsx         # 사주 행 컴포넌트
│   │   └── SajuTextPair.tsx    # 사주 텍스트 쌍 컴포넌트
│   ├── shared/                 # 공통 컴포넌트
│   │   └── MultilineText.tsx   # 다중 라인 텍스트 컴포넌트
│   └── ui/                     # UI 컴포넌트
│       ├── NoData.tsx          # 데이터 없음 컴포넌트
│       └── skeleton.tsx        # 스켈레톤 유틸리티
├── constants/                  
│   ├── dialogs.ts              # 다이얼로그 상수
│   ├── profile.ts              # 프로필 상수
│   └── saju.ts                 # 사주 데이터 상수
├── hooks/                       
│   ├── use-get-dialogs.ts      # 다이얼로그 데이터 훅
│   ├── use-get-profile.ts      # 프로필 데이터 훅
│   └── use-get-saju.ts         # 사주 데이터 훅
├── lib/
│   ├── saju/                   # 사주 관련 유틸리티
│   │   └── utils.ts            # 사주 유틸리티
│   ├── text.ts                 # 텍스트 처리 유틸리티
│   └── utils.ts                # 공통 유틸리티
├── public/                     
│   ├── fonts/                  # 웹 폰트
│   └── images/                 # 이미지
├── components.json             # 컴포넌트 설정
├── eslint.config.mjs           # ESLint 설정
├── next-env.d.ts               # Next.js 타입 정의
├── next.config.mjs             # Next.js 설정
├── package.json                # 프로젝트 의존성 및 스크립트
├── package-lock.json           # npm 의존성 잠금 파일
├── postcss.config.mjs          # PostCSS 설정
├── tailwind.config.ts          # Tailwind CSS 설정
├── tsconfig.json               # TypeScript 설정
├── yarn.lock                   # Yarn 의존성 잠금 파일
└── README.md                   # 프로젝트 문서
```

### 배포
**배포 URL**: https://rocket-ai-six.vercel.app/

<img width="450" height="450" alt="image" src="https://github.com/user-attachments/assets/43a5c86f-762c-4ff9-a377-14c256963ca5" />

### 미리보기

| 전체 화면 | 노데이터 처리 | 스켈레톤 처리 |
|:---:|:---:|:---:|
| <img width="140" height="700" alt="전체 화면" src="https://github.com/user-attachments/assets/3afe94d8-80ce-453e-a209-f9e459e85dfe" /> | <img width="360" height="670" alt="노데이터 처리 화면" src="https://github.com/user-attachments/assets/ce997f52-2457-4ff4-b232-54f5d3a3c05e" /> | <img width="360" height="670" alt="스켈레톤 처리" src="https://github.com/user-attachments/assets/de821828-9923-494f-88f8-1874e4183d30" /> |
