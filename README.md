# 賽馬會童亮計劃 KeySteps QR Code Portal

A responsive web portal for the Jockey Club KeySteps Program Phase 2 (2025/26 Academic Year) QR codes and resources.

## Project Overview

This website serves as a centralized portal for teachers, school administrators, and program coordinators to access intervention-related QR codes for surveys and training modules.

## Features

- **Fixed Header**: Always-visible header with KeySteps logo
- **Hero Section**: Welcome screen with program title and start button
- **Training Module Hub**: Consolidated intervention resources in a single expandable section
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation
- **Modern UI**: Clean, minimalist design with brand colors

## Structure

```
QR Code Site/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── assets/             # Images and resources (see Assets Overview)
└── README.md           # Project documentation
```

## QR Code Sections

### 課程問卷概覽（折疊區塊）

#### 24/25 課程問卷
- **家校協作發展策略**
  - 前測：`assets/PretestHomeschool.png` → https://qr.link/vA8Rh5
  - 後測：`assets/PosttestHomeschool.png` → https://qr.link/KgD5Oh
- **教師幸福學堂**
  - 前測：`assets/WellBeingPreTest.png` → https://qr.link/8ozuM1
  - 後測：`assets/WellBeingPostTest.png` → https://qr.link/4krx9u
- **幼兒自我調節**
  - 前測：`assets/PretestSelfReg.png` → https://qr.codes/vuJtAS
  - 後測：`assets/PosttestSelfReg.png` → https://qr.link/C423QW

#### 25/26 課程問卷
- **自由遊戲課程**
  - 前測：`assets/PreTestFreePlay.png` → https://qr.link/NPdxIo
  - 後測：尚未提供

> 所有課程問卷均顯示提醒：「參與證書只提供給完成課程問卷，並填寫中文全名的老師」。首頁已移除 24/25 學年度問卷與 25/26 學年度入校安排的獨立區塊。

## Color Scheme

- **Primary Blue**: #2b3990 (Headers, navigation)
- **Secondary Orange**: #f99d33 (Buttons, CTAs)
- **Accent Pink**: #f04e69 (Notices, alerts)
- **Supporting Green**: #8dbe50 (Success states)
- **Supporting Yellow**: #f4d036 (Warnings)

## Technical Requirements

- Modern web browsers (Chrome, Safari, Firefox, Edge)
- Mobile-first responsive design
- No server-side processing required
- Static hosting compatible

## Setup Instructions

1. Copy the required QR code images into `assets/`
2. Confirm the KeySteps logo exists as `assets/keysteps-logo.png`
3. Ensure new resources such as `assets/PreTestFreePlay.png` are added when introduced
4. Open `index.html` in a web browser and test all QR codes/links

## Browser Support

- Chrome 70+
- Safari 12+
- Firefox 65+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Page load time: < 3 seconds
- Optimized images for web
- Smooth animations and transitions
- Touch-friendly interface

## Accessibility Features

- ARIA labels and roles
- Keyboard navigation support
- High contrast color ratios
- Screen reader compatibility
- Alt text for all images

## Development

Built with vanilla HTML5, CSS3, and JavaScript ES6+. No external dependencies or frameworks required.

## Assets Overview

- `keysteps-logo.png` — Header logo (transparent background)
- `PretestHomeschool.png` / `PosttestHomeschool.png` — 家校協作發展策略 QR codes
- `WellBeingPreTest.png` / `WellBeingPostTest.png` — 教師幸福學堂 QR codes
- `PretestSelfReg.png` / `PosttestSelfReg.png` — 幼兒自我調節 QR codes
- `PreTestFreePlay.png` — 自由遊戲課程 前測 QR code（新增，25/26 課程問卷）
- `24-25 Teacher Survey.png`, `2526AssessmentBooking.png`, `2526Intervention.png` — 歷史資源，保留以備未來需要

## License

© 2025 賽馬會童亮計劃 (Jockey Club KeySteps Program). All rights reserved.
