# Agent Guidelines for terminal-portfoloio

## Build/Test Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- No test framework configured - add tests if needed

## Project Structure
- Astro v5 project with TypeScript
- Uses strict TypeScript config (`astro/tsconfigs/strict`)
- Pages in `src/pages/` (currently only index.astro)
- Static assets in `public/`

## Code Style
- Use TypeScript with strict mode enabled
- Follow Astro component conventions with frontmatter (`---`) sections
- Use tabs for indentation (as seen in existing files)
- HTML attributes use double quotes
- Import statements should follow ES module syntax
- Use semantic HTML elements
- Keep components simple and focused

## Naming Conventions
- Use kebab-case for file names
- Use PascalCase for component names in imports
- Use camelCase for JavaScript variables and functions