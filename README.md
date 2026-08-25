# COURTFOLIO

테니스 콘텐츠 큐레이션 웹사이트  
코트 · 여행 · 굿즈 · 대회

## 기술 스택
- 순수 HTML / CSS / Vanilla JS (정적 사이트)
- 폰트: Pretendard (한글) + 시스템 산세리프 (영문)
- 이미지: Unsplash 플레이스홀더 (나중에 실제 사진으로 교체)

## 로컬에서 테스트하는 방법

1. 이 폴더를 로컬에 다운로드하거나 복사
2. VS Code + Live Server 확장 사용하거나
3. 터미널에서:
   ```
   npx serve .
   ```
   또는 Python:
   ```
   python3 -m http.server 8000
   ```
4. 브라우저에서 http://localhost:8000 접속

## 배포 (도메인 구매 전 테스트)

추천 무료 호스팅:
- **Vercel** 또는 **Netlify** (드래그 앤 드롭 또는 Git 연동)
- GitHub Pages

배포 후 커스텀 도메인만 연결하면 됩니다.

## 다음 단계
- [ ] 실제 고퀄리티 사진 교체
- [ ] 상세 페이지 (개별 코트/여행 등)
- [ ] 영문 버전 콘텐츠 완성
- [ ] JOURNAL 섹션
- [ ] 모바일 메뉴 개선
- [ ] 도메인 구매 후 DNS 연결

## 폴더 구조
```
courtfolio/
├── index.html
├── courts.html
├── travel.html
├── goods.html
├── tournaments.html
├── css/style.css
├── js/main.js
└── README.md
```
