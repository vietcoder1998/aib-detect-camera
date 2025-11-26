# ABM Landing Page

A modern, responsive landing page built with React, TypeScript, Tailwind CSS, and Atomic Design principles.

## Features

- ⚛️ **React 18** with TypeScript
- 🎨 **Tailwind CSS** for styling
- 🌐 **React Router** for navigation
- 🌍 **i18next** for multi-language support (EN/VI)
- 🏗️ **Atomic Design** architecture
- 📱 **Responsive** design
- ⚡ **Vite** for fast development

## Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic building blocks (Button, Text, Container)
│   ├── molecules/      # Simple component groups (NavLink, ProductCard, LanguageSwitcher)
│   ├── organisms/      # Complex components (Header, WelcomeSection, ProductsSection)
│   └── templates/      # Page layouts (MainLayout)
├── pages/              # Page components (LandingPage)
├── locales/            # Translation files (en.json, vi.json)
├── i18n.ts             # i18next configuration
├── App.tsx             # Main app component with routing
└── main.tsx            # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
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

## Features Breakdown

### Header
- Responsive navigation
- Language switcher (English/Vietnamese)
- Sticky positioning

### Welcome Section
- Hero banner with gradient background
- Multi-language content
- Call-to-action button

### Products Section
- Grid layout (responsive: 1/2/4 columns)
- Product cards with images and descriptions
- Multi-language support

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **i18next** - Internationalization
- **Atomic Design** - Component architecture pattern

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

MIT
