# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Runtime & Package Manager

**Use Bun instead of Node.js for all operations.**

- Run TypeScript: `bun <file>` (not `node` or `ts-node`)
- Install dependencies: `bun install` (not `npm install`)
- Run scripts: `bun run <script>` (not `npm run`)
- Testing: `bun test` (not `jest` directly)

## Common Commands

### Development
```bash
bun run dev          # Start development server with hot reload (uses nodemon)
bun run restart      # Build in development mode and start
bun run start        # Run the production build from dist/
```

### Building
```bash
bun run build        # Clean dist/ and create production build (minified, sourcemaps)
bun run build:development  # Build without minification
bun run build:clear  # Remove dist/ directory
```

### Code Quality
```bash
bun run lint         # Lint src/ with ESLint
bun run format       # Format src/**/*.ts with Prettier
bun run test         # Run tests with Jest
```

## Architecture

### Bootstrap Pattern
The application uses a centralized bootstrap system (`src/bootstrap.ts`) that:
- Loads environment configuration from `.env` into `global.config`
- Sets environment flags (`__DEV__`, `__PROD__`, __TEST__`)
- Initializes the Winston logger as `global.logger`
- Creates a frozen global EventEmitter (`global.events`)
- Provides a `global.shutdown()` function for graceful shutdown
- Emits `app:ready` event when bootstrap completes

Entry point: `index.ts` imports and executes the bootstrap, then your application logic runs.

### Global Variables
The following are available globally after bootstrap (defined in `src/types/globals.d.ts`):
- `logger` - Winston logger instance
- `config` - Typed environment configuration (AppEnvType)
- `events` - Frozen EventEmitter for application-wide events
- `shutdown` - Function to gracefully shut down the application
- `__DEV__`, `__PROD__`, `__TEST__` - Environment flags

### TypeScript Path Aliases
Configured in `tsconfig.json`:
- `@/*` → `./src/*`
- `@types` → `./src/types/index.ts`
- `@utils/*` → `./src/utils/*.utils.ts`
- `@labs/*` → `./src/labs/*.labs.ts`
- `@tests/*` → `./tests/*.test.ts`

### File Naming Conventions
- Utilities: `*.utils.ts` in `src/utils/`
- Lab/experimental code: `*.labs.ts` in `src/labs/`
- Type definitions: `*.d.ts` in `src/types/`
- Tests: `*.test.ts` in `tests/`

## Code Style

### ESLint Rules (eslint.config.mjs)
- **No semicolons** (`semi: never`)
- **No relative parent imports** (prefer path aliases like `@/`)
- Import ordering enforced: builtin → external → internal (@/*) → parent/sibling
- Prefer `const` over `let`
- Prefer arrow functions in callbacks
- No `var`, no `eval`, no `console` (warnings for console)
- TypeScript: unused vars prefixed with `_` are allowed

### Prettier Configuration (.prettierrc)
- Single quotes, no semicolons
- Tabs (width: 4)
- Max line width: 100 characters
- Trailing commas everywhere
- LF line endings

## Environment Configuration

Environment variables are defined in `.env` and typed in `src/types/env.d.ts`:
- `NODE_ENV`: 'development' | 'production' | 'test'
- `PORT`: number
- `HOST`: string

The bootstrap automatically sets `global.__DEV__`, `global.__PROD__`, and `global.__TEST__` based on `NODE_ENV`.

## Logger

Custom Winston logger (`src/utils/logger.utils.ts`) with:
- Environment-aware log levels (production suppresses debug/info)
- Colored output with emojis (🚨 error, ⚠️ warn, ℹ️ info, 🐛 debug, 💬 log)
- Timestamp format: `DD/MM @ HH:mm`
- Uses StringBuilder utility for efficient string concatenation

## Notes

- The codebase uses `dotenv` explicitly in bootstrap despite Bun auto-loading `.env`. This ensures compatibility and explicit configuration.
- Test framework is Jest (with ts-jest), but when running tests use `bun test`.
- The project uses CommonJS (`type: "commonjs"` in package.json) with ES6 imports.
