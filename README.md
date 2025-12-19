# Svetoslav Rankov Portfolio

My personal website showcasing experience as a General Manager and Tech Lead. Built with modern web technologies for optimal performance and developer experience.

## Development

**Prerequisites:** Node.js 18+ and npm

```bash
npm install      # Install dependencies
npm run dev      # Start dev server at localhost:5173
npm run build    # Production build to /dist
npm run preview  # Preview production build
```

## Architecture

The site is a single-page application with smooth scrolling between sections:

- **[src/components/](src/components/)** - UI components (Navigation, Hero, About, Experience, Skills, Contact, Footer)
- **[src/pages/](src/pages/)** - Route pages (Index, 404)
- **[src/config/](src/config/)** - Configuration files
- **[src/lib/](src/lib/)** - Utility functions
- **[public/api/](public/api/)** - Contact form backend (PHP with rate limiting & honeypot protection)

## Stack

React 18, TypeScript, Vite, Tailwind CSS, Radix UI primitives

## License

MIT
