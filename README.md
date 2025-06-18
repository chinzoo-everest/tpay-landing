# TPay Landing Page

[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38bdf8.svg)](https://tailwindcss.com/)

A modern, responsive landing page for TPay payment solutions built with React, TypeScript, and Vite. This project provides a comprehensive showcase of TPay's services with multiple page variants, interactive components, and a beautiful user interface.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Available Pages](#-available-pages)
- [Scripts](#-scripts)
- [Environment Setup](#-environment-setup)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- **Modern Design**: Clean, responsive UI built with Tailwind CSS
- **Multi-language Support**: Internationalization with i18next (English & Mongolian)
- **Multiple Landing Variants**: Agency, App, Crypto, Marketing, Portfolio, and more
- **Interactive Components**: Modals, dropdowns, collapsible menus
- **Kiosk Map Integration**: Interactive map for device locations
- **Authentication Pages**: Complete auth flow with login, signup, and account confirmation
- **Dashboard Pages**: Admin dashboard with statistics and project management
- **Blog System**: Full blog functionality with posts and comments
- **Portfolio Showcase**: Grid and masonry layouts for portfolio items
- **Mobile Responsive**: Fully responsive design for all devices
- **Performance Optimized**: Fast loading with Vite build system
- **Type Safe**: Full TypeScript implementation
- **Accessibility**: WCAG compliant components

## 🛠 Tech Stack

### Core Technologies

- **React 18** - UI library with latest features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **Font Awesome** - Icon library
- **SCSS** - Enhanced CSS with variables and mixins

### State Management & Utils

- **React i18next** - Internationalization
- **Context API** - State management for themes and settings

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 16.x or higher)
- **Yarn** (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd tpay-landing
   ```

2. **Install dependencies**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start the development server**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 📁 Project Structure

```
src/
├── assets/              # Static assets (images, fonts, styles)
├── components/          # Reusable UI components
│   ├── Common/         # Shared components across pages
│   ├── Form/           # Form-related components
│   ├── FrostUI/        # Custom UI library components
│   └── HeadlessUI/     # Headless UI implementations
├── constants/          # Application constants
├── context/           # React context providers
├── helpers/           # Utility functions
├── hooks/             # Custom React hooks
├── i18n/              # Internationalization setup
├── layouts/           # Layout components
├── pages/             # Page components
│   ├── auth/          # Authentication pages
│   ├── homePage/      # Home page sections
│   ├── KioskMap/      # Kiosk map functionality
│   ├── landing/       # Various landing page variants
│   ├── other/         # Additional pages (blog, contact, etc.)
│   └── portfolio/     # Portfolio showcase pages
├── routes/            # Routing configuration
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## 📄 Available Pages

### Landing Page Variants

- **Agency** - Creative agency showcase
- **App** - Mobile app promotion
- **CoWorking** - Coworking space presentation
- **Crypto** - Cryptocurrency platform
- **Marketing** - Digital marketing services
- **Portfolio** - Creative portfolio
- **SaaS Classic/Modern** - Software as a Service
- **Software** - Software product showcase
- **Startup** - Startup company presentation

### Functional Pages

- **Authentication** - Login, signup, password reset
- **Dashboard** - Admin dashboard with analytics
- **Kiosk Map** - Interactive device location map
- **Blog** - Blog posts and article management
- **Contact** - Contact forms and information
- **Pricing** - Service pricing tables
- **Help** - FAQ and support pages

## 📜 Scripts

```bash
# Development
yarn dev          # Start development server
yarn build        # Build for production
yarn preview      # Preview production build
yarn lint         # Run ESLint
yarn lint:fix     # Fix ESLint issues
```

## 🔧 Environment Setup

### Development Environment

The project uses Vite for development with hot module replacement (HMR) enabled.

### Production Build

```bash
yarn build
```

This creates an optimized build in the `dist` folder.

### Preview Production Build

```bash
yarn preview
```

Serves the production build locally for testing.

## 🤝 Contributing

1. **Fork the repository**
2. **Create your feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Code Style Guidelines

- Follow the existing code style
- Use TypeScript for all new components
- Add proper type definitions
- Include comments for complex logic
- Ensure responsive design for all components

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ by the TPay Team**

For questions or support, please contact [support@tpay.com](mailto:support@tpay.com)
