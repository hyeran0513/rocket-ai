## 프로젝트 개요

Rocket AI 코딩 테스트에 제출할 프로젝트 코드입니다.

### 기술 스택
- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: SWR
- **Build Tool**: Vite
- **Package Manager**: Yarn 4.4.1
- **Code Quality**: ESLint, Prettier

## 폴더 구조

```
rocket-ai/
├── app/
│   ├── _components/            
│   │   ├── FirstPanel.tsx      # 첫 번째 패널
│   │   ├── SecondPanel.tsx     # 두 번째 패널
│   │   ├── ThirdPanel.tsx      # 세 번째 패널
│   │   └── SajuTable.tsx       # 사주 테이블 컴포넌트
│   ├── api/                    
│   │   ├── dto/                
│   │   │   ├── dialogs.ts      # 다이얼로그 응답 타입
│   │   │   ├── profile.ts      # 프로필 타입
│   │   │   └── saju.ts         # 사주 데이터 타입
│   │   ├── dialogs.ts          # 다이얼로그 API
│   │   ├── profile.ts          # 프로필 API
│   │   └── saju.ts             # 사주 API
│   ├── globals.css             # 전역 스타일
│   ├── layout.tsx              # 루트 레이아웃
│   └── page.tsx                # 메인 페이지
├── components/                   
│   ├── MultilineText.tsx       # 다중 라인 텍스트 컴포넌트
│   ├── SajuBox.tsx             # 사주 박스 컴포넌트
│   ├── SajuColumn.tsx          # 사주 컬럼 컴포넌트
│   ├── SajuCoreCell.tsx        # 사주 핵심 셀 컴포넌트
│   ├── SajuCoreTable.tsx       # 사주 핵심 테이블 컴포넌트
│   ├── SajuRow.tsx             # 사주 행 컴포넌트
│   └── SajuTextPair.tsx        # 사주 텍스트 쌍 컴포넌트
├── constants/                  
│   ├── dialogs.ts              # 다이얼로그 상수
│   ├── profile.ts              # 프로필 상수
│   └── saju.ts                 # 사주 데이터 상수
├── hooks/                       
│   ├── use-get-dialogs.ts      # 다이얼로그 데이터 훅
│   ├── use-get-profile.ts      # 프로필 데이터 훅
│   └── use-get-saju.ts         # 사주 데이터 훅
├── public/                     
│   ├── fonts/                  # 웹 폰트
│   └── images/                 # 이미지
├── utils/
│   ├── cn.ts                   # 클래스명 병합 유틸리티
│   ├── saju.ts                 # 사주 관련 유틸리티
│   └── text.ts                 # 텍스트 처리 유틸리티
├── package.json                # 프로젝트 의존성 및 스크립트
├── tailwind.config.ts          # Tailwind CSS 설정
├── tsconfig.json               # TypeScript 설정
└── README.md                   # 프로젝트 문서
```
