# Agent Guidelines for terminal-portfoloio

## Build/Test Commands
- `bun run dev` - Start development server
- `bun run build` - Build for production  
- `bun run preview` - Preview production build
- `bunx playwright test` - Run Playwright tests (when configured)
- `bunx playwright test --ui` - Run tests with UI mode
- No linting configured - use built-in TypeScript checking with `astro check`

## Project Structure
- Astro v5 project with TypeScript (strict mode)
- Single-page portfolio with interactive terminal interface
- Components in `src/components/` (BootSequence, Terminal, SEO, Performance)
- Pages in `src/pages/` (index.astro, sitemap.xml.ts)
- Utils in `src/utils/` (commands.ts for terminal functionality)
- Styles in `src/styles/` (modular CSS files)

## Code Style & Formatting
- Use tabs for indentation (consistent with existing code)
- HTML attributes use double quotes
- CSS uses kebab-case for class names (e.g., `terminal-screen`, `boot-content`)
- JavaScript uses camelCase for variables/functions (e.g., `bootContent`, `showHelp`)
- Astro frontmatter sections use `---` delimiters
- Keep inline styles and scripts organized within single file structure

## TypeScript & Imports
- Uses strict TypeScript config (`astro/tsconfigs/strict`)
- ES module syntax for imports (import/export)
- Define interfaces in `src/types/` (e.g., terminal.ts)
- Type annotations for props and complex functions
- Playwright available for e2e testing

## Terminal Portfolio Specifics
- Maintain retro terminal aesthetic with green-on-black theme
- Use JetBrains Mono font for monospace consistency
- Preserve boot sequence and interactive command system
- Keep ASCII art and terminal animations intact