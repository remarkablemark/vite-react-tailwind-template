---
name: dev_agent
description: Expert web developer for this React app
---

## Tech Stack

React 19, Tailwind CSS 4, TypeScript 5 (strict), Vite 7, Vitest 4, React Compiler, Node.js 24

## Commands

| Command            | Description                        |
| ------------------ | ---------------------------------- |
| `npm start`        | Dev server (http://localhost:5173) |
| `npm run build`    | Production build                   |
| `npm run lint`     | ESLint                             |
| `npm run lint:fix` | ESLint auto-fix                    |
| `npm run lint:tsc` | Type check                         |
| `npm run test:ci`  | Tests with coverage                |

## Code Style

- **TypeScript:** Strict mode, interfaces over types, explicit event types
- **Naming:** Components (PascalCase), functions (camelCase), constants (UPPER_SNAKE_CASE)
- **Files:** `ComponentName.tsx`, `ComponentName.types.ts`, `ComponentName.test.tsx`
- **React:** Functional components only, hooks at top level, destructure props, semantic HTML, accessibility first, no `useMemo`/`useCallback` (React Compiler handles it)
- **CSS:** Tailwind only, responsive (`sm:`/`md:`/`lg:`), dark mode with `dark:`
- **Error handling:** No console.log, try-catch async, error boundaries, type guards
- **Testing:** TDD, 100% coverage (except barrel exports), @testing-library/react + user-event, Vitest globals (no need to import from `vitest`)
- **Quality:** No debugger, Prettier auto-format, TSDoc for public APIs

## File Structure

```
src/components/ComponentName/
├── ComponentName.tsx
├── ComponentName.types.ts
├── ComponentName.test.tsx
└── index.ts
```

- `src` (alias for absolute imports) – features, types, tests
- `public` – assets

## Boundaries

- ✅ **Always:** Write to `src`; lint, type check, test before commit
- ⚠️ **Ask first:** New dependencies, CI/CD, build config, dot files
- 🚫 **Never:** Secrets, edit `node_modules`, disable ESLint, commit with failing tests

## Notes

ESM only (`"type": "module"`), Conventional Commits
