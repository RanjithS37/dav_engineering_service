# DAV Engineering Services - Professional Website

A professional, responsive website for DAV Engineering Services - a Multi-disciplinary Engineering & Manpower Consulting Company based in Chennai, India.

## Features

- **5 Professional Pages:**
  - Home - Company introduction and key highlights
  - About Us - Company profile, mission, and partnership benefits
  - Services - Comprehensive engineering services (Piping, Structural, Plant Design, CAD/CAM/CAE, Manpower)
  - Infrastructure & Team - Facilities, equipment, and team structure
  - Contact - Contact information and inquiry form

- **Fully Responsive Design:**
  - Desktop (1200px+)
  - Tablet (768px - 968px)
  - Mobile (480px - 768px)
  - Small Mobile (< 480px)
  - Media queries for all screen sizes

- **Modern UI/UX:**
  - Professional gradient themes
  - Smooth animations and transitions
  - Interactive navigation menu
  - Mobile-friendly hamburger menu
  - Clean, modern design

## Technology Stack

- **React 18** - UI library
- **React Router DOM 6** - Client-side routing
- **Vite** - Build tool and development server
- **CSS3** - Styling with responsive media queries

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
professional_website/
├── public/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Navigation.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   ├── Infrastructure.jsx
│   │   ├── Infrastructure.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Deployment

This website is ready to be hosted on any static hosting service:

1. **Netlify:**
   - Connect your repository
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Vercel:**
   - Connect your repository
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

3. **GitHub Pages:**
   - Build the project: `npm run build`
   - Deploy the `dist` folder to GitHub Pages

4. **Your Own Domain:**
   - Build the project: `npm run build`
   - Upload the `dist` folder contents to your web server
   - Configure your domain to point to the web server

## Customization

To update company information, edit the respective page components in `src/pages/`. All content is easily customizable.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is proprietary and belongs to DAV Engineering Services.

## Contact

**DAV ENGINEERING SERVICES**
- Address: H.O. No. 38/39, 1st Floor, Corammendal Towns SIDCO Industrial Estate, Ambattur-Chennai-53
- Phone: +91-6385222170, +91-9789048001
- Email: davengg123@gmail.com
- CEO: D. KARTHIKEYAN

