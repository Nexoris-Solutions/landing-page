# Agent Configuration

## Commands
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run lint` - Run ESLint on all files
- `npm run preview` - Preview production build locally

## Architecture
- React + Vite frontend landing page for Nexoris Solutions
- Single page application with React Router
- Component-based architecture: `src/components/` for reusable UI components
- Pages in `src/pages/` (Landing page, API routes)
- TailwindCSS for styling alongside component-specific CSS files
- No backend - static frontend only

## Code Style
- JSX components use PascalCase (e.g., `Footer.jsx`)
- CSS modules pattern: component folders contain both `.jsx` and `styles.css`
- ES6+ imports/exports, ES modules (`type: "module"`)
- ESLint with React hooks and refresh plugins
- Unused vars allowed if they start with uppercase/underscore
- Tab indentation, className over class
- React functional components with hooks
- Import React explicitly in JSX files
- Nested vanilla CSS
- Use white and black theme unless and until mentioned
