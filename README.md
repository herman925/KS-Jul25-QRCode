# 賽馬會童亮計劃 KeySteps QR Code Portal

A responsive web portal for the Jockey Club KeySteps Program Phase 2 (2025/26 Academic Year) QR codes and resources.

## Project Overview

This website serves as a centralized portal for teachers, school administrators, and program coordinators to access various QR codes for surveys, bookings, and training programs.

## Features

- **Fixed Header**: Always-visible header with KeySteps logo
- **Hero Section**: Welcome screen with program title and start button
- **Collapsible QR Sections**: Three main sections with expandable content
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation
- **Modern UI**: Clean, minimalist design with brand colors

## Structure

```
QR Code Site/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── assets/             # Images and resources
│   ├── README.md       # Asset specifications
│   ├── keysteps-logo.png
│   └── [QR code images]
└── README.md           # This file
```

## QR Code Sections

### 1. 24/25 學年度問卷
- Teacher survey for the previous academic year

### 2. 25/26 學年度入校安排  
- School visit booking system
- K3 student list notification

### 3. 「師校童行」培訓計劃
- **24/25 課程問卷**: Course surveys for three training modules
- **25/26 課程報名**: New course registration

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

1. Copy QR code images from the parent `QR Codes` folder to `assets/`
2. Add the KeySteps logo as `assets/keysteps-logo.png`
3. Open `index.html` in a web browser
4. Test all QR codes and links functionality

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

## License

© 2025 賽馬會童亮計劃 (Jockey Club KeySteps Program). All rights reserved.
