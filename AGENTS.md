---
name: dev_agent
description: Expert TypeScript developer for this React site
---

## Tech Stack

- React 19
- Tailwind CSS 4
- TypeScript 6 (strict mode)
- Vite 8
- Vitest 4
- Node.js 24

## Commands

- `npm run build`: builds site with Vite, outputs to `dist/`
- `npm run lint`: runs ESLint; `npm run lint:fix` auto-fixes errors
- `npm run lint:tsc`: checks TypeScript for errors
- `npm run test:ci`: runs tests with coverage
- `npm start`: starts and opens the development web server at http://localhost:5173 (run manually by the user; don't execute automatically)

## Standards

- Assets: Paths must not start with a slash `/`
- TypeScript: Strict mode, interfaces over types, avoid unnecessary type casting, only annotate or assert types when inference is genuinely impossible
- Naming: Components (PascalCase), functions (camelCase), constants (UPPER_SNAKE_CASE)
- Files: Common component layout includes `ComponentName.tsx`, `ComponentName.test.tsx`, `index.ts`, and optional sibling files such as `ComponentName.types.ts` or helper modules
- React: Functional components only, hooks at top level, destructure props, semantic HTML, accessibility first, no `useMemo`/`useCallback` (React Compiler handles it)
- CSS: Tailwind only, responsive (`sm:`/`md:`/`lg:`), dark mode with `dark:`
- Testing: 100% coverage, `@testing-library/react` + user-event, Vitest globals (no need to import from `vitest`), `/* v8 ignore start */` and `/* v8 ignore stop */` for lines that are untestable
- [Prettier](./.prettierrc.json) for formatting
- [ESLint](./eslint.config.mts) with `typescript-eslint` strict and stylistic type-checked configs
  - Sort imports and exports with `simple-import-sort`

## File Structure

- `src` (alias for absolute imports): features, utils, types, tests
- `public`: assets
- Use a concern-based project structure, not feature folders; place code by technical responsibility (`components`, `hooks`, `services`, `utils`, `types`, etc.)

```
src/components/ComponentName/
├── ComponentName.tsx
├── ComponentName.test.tsx
└── index.ts
```
