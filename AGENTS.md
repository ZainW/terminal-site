# Agent Guidelines for terminal-portfoloio

## Build/Test Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run preview` - Preview production build
- No test framework configured - add tests if needed
- No linting configured - use built-in TypeScript checking

## Project Structure
- Astro v5 project with TypeScript (strict mode)
- Single-page portfolio with terminal interface
- Pages in `src/pages/` (currently only index.astro)
- Static assets in `public/` (favicon.png)
- All code in single index.astro file (HTML, CSS, JS)

## Code Style & Formatting
- Use tabs for indentation (consistent with existing code)
- HTML attributes use double quotes
- CSS uses kebab-case for class names (e.g., `terminal-screen`, `boot-content`)
- JavaScript uses camelCase for variables/functions (e.g., `bootContent`, `showHelp`)
- Astro frontmatter sections use `---` delimiters
- Keep inline styles and scripts organized within single file structure

## TypeScript & Imports
- Uses strict TypeScript config (`astro/tsconfigs/strict`)
- ES module syntax for imports
- Type annotations where beneficial
- No external dependencies beyond Astro core

## Terminal Portfolio Specifics
- Maintain retro terminal aesthetic with green-on-black theme
- Use JetBrains Mono font for monospace consistency
- Preserve boot sequence and interactive command system
- Keep ASCII art and terminal animations intact