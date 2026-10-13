# SOS School Website

A modern, responsive school website built with Vite, React, and React Router. The site showcases the school's identity, learning programs, campus life, enrolment information, community initiatives, news, careers, and contact details.

## Overview

This project is a multi-page marketing and information website for SOS School, designed to feel warm, welcoming, and future-focused. It includes:

- A landing page with hero sections and highlights
- Program and learning overview pages
- School life and community content
- Enrolment and contact pathways
- News and careers information
- Mobile-friendly navigation and responsive layouts

## Tech Stack

- React
- Vite
- TypeScript
- React Router DOM

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

This will launch the app in development mode, usually at:

```text
http://localhost:5173
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

## Project Structure

```text
SOS_web/
├── public/               # Static assets (if added later)
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page components for each route
│   ├── App.tsx           # App routing and layout
│   ├── main.tsx          # App entry point
│   ├── styles.css        # Global styles and design system
│   └── vite-env.d.ts     # Vite type declarations
├── index.html            # Root entry HTML
├── package.json          # Scripts and dependencies
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite config
├── package-lock.json     # Dependency lock file
└── README.md             # Project documentation
```

## Available Pages

- Home
- About
- Learning
- School Life
- Enrol
- Community
- News
- Careers
- Contact

## Scripts

```bash
npm run dev      # Start local development server
npm run build    # Create a production build
npm run preview  # Preview the built website locally
```

## Notes

This project is designed as a front-end website and does not currently include a backend or database. If you plan to add forms, live enrolment submissions, or content management, you can extend the site with an API layer or CMS integration.

## License

This project is for educational/demo use unless otherwise specified by the project owner.
