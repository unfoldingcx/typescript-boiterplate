<h1 align="center"><img src="https://www.unfolding.cx/images/branding/main-rounded.png" width="150" height="150"></h1>

<div align="center">
  <p>
    <strong>TypeScript Boiterplate</strong><br/>
    <sub><a href="https://www.unfolding.cx/" target="_blank">広げる THE FUTURE</a></sub>
  </p>
</div>

<div align="center">

[![npm version](https://img.shields.io/npm/v/@unfoldingcx/appstoreconnect-api.svg)](https://www.npmjs.com/package/appstoreconnect-api)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)

</div>

A production-ready TypeScript boilerplate optimized for building **scripts, CLIs, automation tools, and backend services**. Built on [Bun](https://bun.sh) for blazing-fast performance and modern developer experience.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-1.3+-black.svg)](https://bun.sh)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ✨ Features

- **⚡ Bun Runtime** - Ultra-fast TypeScript execution without transpilation
- **🏗️ Bootstrap Pattern** - Centralized initialization with environment config, logging, and event system
- **📝 Smart Logging** - Beautiful Winston logger with color-coded output and environment-aware log levels
- **🎯 Path Aliases** - Clean imports with `@/`, `@utils/`, `@types` configured out of the box
- **🔧 ESLint + Prettier** - Enforced code style with sensible defaults (no semicolons, tabs, organized imports)
- **🧪 Testing Ready** - Jest configured with TypeScript support
- **🌍 Environment Management** - Type-safe environment variables with validation
- **📦 Production Builds** - Minified bundles with source maps for deployment
- **🔄 Hot Reload** - Nodemon integration for instant development feedback
- **🎨 Structured Architecture** - Opinionated file organization that scales

---

## 📋 Prerequisites

- [Bun](https://bun.sh) v1.3 or higher
- Node.js v24+ (for compatibility)

Install Bun:
```bash
curl -fsSL https://bun.sh/install | bash
```

---

## 🚀 Quick Start

### 1. Clone or Use as Template

```bash
# Clone the repository
git clone https://github.com/unfoldingcx/typescript-boiterplate.git my-project
cd my-project

# Or use as GitHub template
# Click "Use this template" on GitHub
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Configure Environment

```bash
cp .env.example .env
# Edit .env with your configuration
```

### 4. Start Development

```bash
bun run dev
```

Your application will start with hot reload enabled!

---

## 📁 Project Structure

```
.
├── src/
│   ├── bootstrap.ts           # Application initialization
│   ├── types/
│   │   ├── index.ts          # Type exports
│   │   ├── env.d.ts          # Environment variable types
│   │   └── globals.d.ts      # Global type definitions
│   ├── utils/
│   │   ├── logger.utils.ts   # Winston logger setup
│   │   └── string-builder.utils.ts
│   └── labs/
│       └── example.labs.ts   # Experimental features
├── tests/                     # Test files (*.test.ts)
├── index.ts                  # Application entry point
├── package.json
├── tsconfig.json
├── eslint.config.mjs
└── .prettierrc
```

### File Naming Conventions

- **Utilities**: `*.utils.ts` in `src/utils/`
- **Lab/Experimental**: `*.labs.ts` in `src/labs/`
- **Type Definitions**: `*.d.ts` in `src/types/`
- **Tests**: `*.test.ts` in `tests/`

---

## 🔧 Configuration

### Environment Variables

Define your environment variables in `.env` and type them in `src/types/env.d.ts`:

```typescript
// src/types/env.d.ts
type AppEnvType = {
  NODE_ENV: 'development' | 'production' | 'test'
  PORT: number
  HOST: string
  // Add your custom variables here
}
```

The bootstrap automatically loads and validates these variables, making them available globally via `config`.

### TypeScript Path Aliases

Pre-configured aliases for clean imports:

```typescript
import bootstrap from '@/bootstrap'              // src/bootstrap.ts
import { AppEnvType } from '@types'              // src/types/index.ts
import logger from '@utils/logger'               // src/utils/logger.utils.ts
import example from '@labs/example'              // src/labs/example.labs.ts
```

---

## 🛠️ Development Workflow

### Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server with hot reload |
| `bun run build` | Create production build (clean + minified) |
| `bun run build:development` | Create development build (unminified) |
| `bun run start` | Run production build from `dist/` |
| `bun run restart` | Build development and start |
| `bun run test` | Run tests with Jest |
| `bun run lint` | Lint code with ESLint |
| `bun run format` | Format code with Prettier |

### Development Cycle

```bash
# 1. Start development mode
bun run dev

# 2. Make changes (auto-reload on save)
# Edit files in src/

# 3. Run tests
bun run test

# 4. Lint and format
bun run lint
bun run format

# 5. Build for production
bun run build

# 6. Test production build
bun run start
```

---

## 🏗️ Architecture

### Bootstrap Pattern

The boilerplate uses a centralized bootstrap system that initializes:

1. **Environment Configuration** - Loads `.env` into type-safe `global.config`
2. **Environment Flags** - Sets `__DEV__`, `__PROD__`, `__TEST__` globals
3. **Logger** - Initializes Winston logger as `global.logger`
4. **Event Emitter** - Creates frozen `global.events` for app-wide events
5. **Graceful Shutdown** - Provides `global.shutdown()` function

**Example:**

```typescript
// index.ts
import bootstrap from '@/bootstrap'

const main = async (): Promise<void> => {
  await bootstrap()

  // Your application logic here
  logger.info('Application started')

  // Listen to app events
  events.on('app:ready', () => {
    logger.info('App is ready!')
  })
}

export default main()
```

### Global Variables

After bootstrap, these are available everywhere:

```typescript
logger.info('Hello')           // Winston logger
config.NODE_ENV                // Typed environment config
events.emit('custom:event')    // Event emitter
shutdown()                     // Graceful shutdown function
__DEV__                        // Development flag
__PROD__                       // Production flag
__TEST__                       // Test flag
```

### Logger

The custom Winston logger includes:

- **Color-coded levels**: 🚨 error, ⚠️ warn, ℹ️ info, 🐛 debug, 💬 log
- **Environment indicators**: Shows `[development]`, `[production]`, `[test]`
- **Timestamps**: Formatted as `DD/MM @ HH:mm`
- **Smart filtering**: Production only shows errors and warnings

```typescript
logger.info('Server started on port %d', config.PORT)
logger.error('Failed to connect: %s', error.message)
logger.debug('Debug info: %o', debugData)
```

---

## 📝 Code Style

### ESLint Rules

- ✅ No semicolons
- ✅ Tabs (width: 4)
- ✅ Single quotes
- ✅ Prefer `const` over `let`
- ✅ No `var`, `eval`, or `console` (except warn/error)
- ✅ Import ordering enforced (builtin → external → internal)
- ✅ No relative parent imports (use path aliases)

### Prettier Configuration

- Single quotes, no semicolons
- Tabs with width 4
- Max line width: 100 characters
- Trailing commas everywhere
- LF line endings

---

## 🧪 Testing

Write tests using Jest with Bun:

```typescript
// tests/example.test.ts
import { describe, it, expect } from '@jest/globals'

describe('Example Test Suite', () => {
  it('should pass', () => {
    expect(1 + 1).toBe(2)
  })
})
```

Run tests:
```bash
bun run test
```

---

## 📦 Building for Production

```bash
# Clean build with minification and source maps
bun run build

# Output will be in dist/
# Run with:
bun run start
# or
bun dist/index.js
```

The production build:
- Minifies code
- Generates source maps
- Targets Node.js runtime
- Outputs to `dist/` directory

---

## 🎯 Best Practices

### 1. Use Type-Safe Environment Variables

Always define environment variables in `src/types/env.d.ts` for type safety:

```typescript
type AppEnvType = {
  DATABASE_URL: string
  API_KEY: string
}
```

### 2. Leverage Path Aliases

Avoid relative imports:

```typescript
// ❌ Bad
import logger from '../../../utils/logger.utils'

// ✅ Good
import logger from '@utils/logger'
```

### 3. Use the Global Logger

Don't use `console.log`:

```typescript
// ❌ Bad
console.log('Starting process...')

// ✅ Good
logger.info('Starting process...')
```

### 4. Follow Naming Conventions

- Utilities: `feature.utils.ts`
- Labs/Experimental: `feature.labs.ts`
- Tests: `feature.test.ts`

### 5. Use Events for Decoupling

```typescript
// Emit events
events.emit('user:created', userData)

// Listen to events
events.on('user:created', (data) => {
  logger.info('User created: %s', data.email)
})
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style (ESLint + Prettier)
- Add tests for new features
- Update documentation as needed
- Keep commits atomic and well-described

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [Bun](https://bun.sh) - The fast all-in-one JavaScript runtime
- Inspired by modern TypeScript best practices
- Maintained by [Unfolding CX](https://www.unfolding.cx)

---

## 📞 Support

- 🐛 [Report Issues](https://github.com/unfoldingcx/typescript-boiterplate/issues)
- 💬 [Discussions](https://github.com/unfoldingcx/typescript-boiterplate/discussions)
- 📧 Email: admin@unfolding.cx

---

<div align="center">

**[⬆ Back to Top](#typescript-boilerplate-with-bun-)**

Made with ❤️ by the Unfolding CX team

</div>
