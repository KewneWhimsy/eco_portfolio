# Josselin HANEL - Eco-Friendly Portfolio

A multilingual, eco-friendly portfolio website built with Astro and Tailwind CSS, showcasing my work as a full-stack web developer with a focus on sustainable web development.

![Portfolio Preview](screenshot.png)

## Features

- **Eco-Mode Toggle**: Switch between standard and eco-friendly versions of the site to reduce carbon footprint
- **Multilingual Support**: Available in French, English, and German
- **Responsive Design**: Fully responsive layout that works on all devices
- **Performance Optimized**: Fast loading times and minimal resource usage
- **Accessibility**: Designed with accessibility in mind

## Tech Stack

- [Astro](https://astro.build/) - The main framework for building the site
- [Tailwind CSS](https://tailwindcss.com/) - For styling

## Project Structure

```
├── src/
│   ├── assets/           # Images and static files
│   ├── components/       # Reusable UI components
│   │   ├── eco_mode_toggle.astro
│   │   ├── language_switcher.astro
│   │   └── cta_dispo.astro
│   ├── layouts/          # Layout components
│   │   ├── layout.astro   # Main layout wrapper
│   │   ├── header.astro
│   │   └── footer.astro
│   ├── pages/            # All routes and pages
│   │   ├── index.astro           # Root redirect
│   │   └── [lang]/              # Language-specific routes
│   │       ├── index.astro       # Homepage
│   │       ├── about.astro       # About page
│   │       ├── contact.astro     # Contact page
│   │       ├── projects.astro    # Projects page
│   │       └── eco/              # Eco-friendly versions
│   └── styles/           # Global styles
│       └── global.css
├── public/              # Public assets served at root
├── astro.config.mjs     # Astro configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## Eco-Friendly Features

This website is built with environmental sustainability in mind:

1. **Eco Mode**: A dedicated eco-friendly version of the site with:
   - Reduced JavaScript usage
   - Simplified layouts
   - Minimal network requests
   - Optimized assets loading

2. **Performance Optimization**:
   - Optimized image loading with responsive sizes
   - Minimal dependencies
   - Efficient CSS with Tailwind

3. **Sustainable Coding Practices**:
   - Server-side rendering where possible
   - Efficient asset caching
   - Minimal third-party scripts

## Getting Started

### Prerequisites

- Node.js (v18.17.1 or newer)
- npm (v9.6.5 or newer) or pnpm (v7.1.0 or newer)

### Installation

1. Clone the repository

```bash
git clone https://github.com/KewneWhimsy/eco-portfolio.git
cd eco-portfolio
```

2. Install dependencies

```bash
npm install
# or
pnpm install
```

3. Start the development server

```bash
npm run dev
# or
pnpm dev
```

4. Open your browser and visit `http://localhost:4321`

### Building for Production

```bash
npm run build
# or
pnpm build
```

### Preview Production Build

```bash
npm run preview
# or
pnpm preview
```

## Deployment

This site is designed to be deployed on platforms like Netlify, Vercel, or Cloudflare Pages. The site includes redirects to handle language selection based on user preferences.

### Environment Variables

No specific environment variables are required for basic operation.

## Customization

### Adding a New Language

1. Add the language code to the `getStaticPaths` function in each page file
2. Add translations for the new language in the content objects
3. Update the language switcher component to include the new language

### Modifying the Eco Mode

The eco mode works by having separate routes with `/eco` in the path. To modify or enhance the eco mode:

1. Edit the eco-specific page versions in `src/pages/[lang]/*/eco.astro`
2. Update the toggle behavior in `src/components/eco_mode_toggle.astro`

## License

[MIT License](LICENSE)

## Contact

Josselin HANEL - [contact@josselinkw.com](mailto:josshanel@gmail.com)

---

This project is committed to sustainable web development practices and aims to demonstrate how we can create beautiful, functional websites while minimizing environmental impact.