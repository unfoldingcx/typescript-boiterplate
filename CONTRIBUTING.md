# Contributing to TypeScript Boilerplate

First off, thank you for considering contributing to this project! 🎉

It's people like you that make this TypeScript boilerplate a great tool for the community. We welcome contributions from everyone, whether you're fixing a typo, reporting a bug, or proposing a major feature.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Your First Code Contribution](#your-first-code-contribution)
  - [Pull Requests](#pull-requests)
- [Style Guidelines](#style-guidelines)
  - [Git Commit Messages](#git-commit-messages)
  - [Code Style](#code-style)
  - [TypeScript Guidelines](#typescript-guidelines)
- [Testing](#testing)
- [Documentation](#documentation)
- [Community](#community)

---

## Code of Conduct

This project and everyone participating in it is governed by our commitment to fostering an open and welcoming environment. By participating, you are expected to:

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

Before you begin:

- Make sure you have [Bun](https://bun.sh) v1.3+ installed
- Have a [GitHub account](https://github.com/signup)
- Read the [README.md](README.md) to understand the project
- Check existing [issues](https://github.com/unfoldingcx/typescript-boiterplate/issues) and [pull requests](https://github.com/unfoldingcx/typescript-boiterplate/pulls) to avoid duplicates

## Development Setup

1. **Fork the repository** on GitHub
   - Click the "Fork" button in the top right corner

2. **Clone your fork** locally
   ```bash
   git clone https://github.com/YOUR_USERNAME/typescript-boiterplate.git
   cd typescript-boiterplate
   ```

3. **Add upstream remote** to keep your fork synced
   ```bash
   git remote add upstream https://github.com/unfoldingcx/typescript-boiterplate.git
   ```

4. **Install dependencies**
   ```bash
   bun install
   ```

5. **Create a branch** for your changes
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

6. **Configure environment**
   ```bash
   cp .env.example .env
   ```

7. **Start development**
   ```bash
   bun run dev
   ```

You're now ready to make changes! 🚀

## How to Contribute

### Reporting Bugs

Bugs are tracked as [GitHub issues](https://github.com/unfoldingcx/typescript-boiterplate/issues). Before creating a bug report:

- **Check the existing issues** to avoid duplicates
- **Use the latest version** to ensure the bug hasn't been fixed

When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the behavior
- **Expected behavior** vs actual behavior
- **Environment details** (OS, Bun version, Node version)
- **Code samples** or error messages if applicable
- **Screenshots** if relevant

**Example:**

```markdown
**Description**
The logger fails to output colored text in production mode.

**To Reproduce**
1. Set NODE_ENV=production
2. Run `bun run start`
3. Call `logger.info('test')`
4. Observe no color output

**Expected Behavior**
Colors should appear even in production (or documented as expected behavior).

**Environment**
- OS: macOS 14.0
- Bun: 1.3.2
- Node: 24.0.0
```

### Suggesting Enhancements

Enhancement suggestions are also tracked as GitHub issues. Before suggesting:

- **Check if it already exists** in issues or discussions
- **Consider if it fits the project scope** (scripts/CLIs/backend, not frontend)

When suggesting an enhancement, include:

- **Clear title and description** of the feature
- **Use cases** - why would this be useful?
- **Possible implementation** (if you have ideas)
- **Alternatives considered**

### Your First Code Contribution

Unsure where to begin? Look for issues labeled:

- `good first issue` - Simple issues perfect for beginners
- `help wanted` - Issues where we need community help
- `documentation` - Improvements to docs

### Pull Requests

The process for submitting a pull request:

1. **Ensure your fork is up to date**
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create a new branch** from `main`
   ```bash
   git checkout -b feature/your-feature
   ```

3. **Make your changes**
   - Follow the [style guidelines](#style-guidelines)
   - Add tests for new functionality
   - Update documentation as needed

4. **Test your changes**
   ```bash
   bun run test
   bun run lint
   bun run format
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature
   ```

7. **Open a Pull Request** on GitHub
   - Fill out the PR template
   - Link any related issues
   - Request review from maintainers

**Pull Request Guidelines:**

- ✅ One feature/fix per PR
- ✅ Clear description of changes
- ✅ All tests passing
- ✅ Code formatted with Prettier
- ✅ No linting errors
- ✅ Documentation updated
- ✅ Commit messages follow conventions
- ❌ Don't include unrelated changes
- ❌ Don't mix refactoring with features
- ❌ Don't submit work in progress (use draft PRs instead)

## Style Guidelines

### Git Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/) for clear and semantic commit history:

**Format:**
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring (no feature/fix)
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks (dependencies, config)
- `ci`: CI/CD changes

**Examples:**

```bash
# Simple commit
git commit -m "feat: add retry logic to logger"

# With scope
git commit -m "fix(bootstrap): handle missing .env file gracefully"

# With body and footer
git commit -m "feat(utils): add retry utility

Implements exponential backoff retry logic for async operations.
Configurable max attempts and delay.

Closes #42"
```

**Rules:**
- Use imperative mood ("add" not "added" or "adds")
- Don't capitalize first letter of subject
- No period at the end of subject
- Keep subject line under 72 characters
- Reference issues in footer

### Code Style

We use **ESLint** and **Prettier** to enforce consistent code style.

**Key rules:**
- ✅ **No semicolons**
- ✅ **Single quotes**
- ✅ **Tabs (width: 4)**
- ✅ **Max line width: 100 characters**
- ✅ **Trailing commas**

Before committing, always run:
```bash
bun run format
bun run lint
```

### TypeScript Guidelines

**General:**
- Prefer `const` over `let`, never use `var`
- Use type inference when possible
- Explicitly type function parameters and return values
- Use interfaces for object shapes, types for unions/intersections

**Good examples:**

```typescript
// ✅ Function with explicit types
function processData(input: string): Promise<number> {
  return Promise.resolve(input.length)
}

// ✅ Const with inference
const items = [1, 2, 3]

// ✅ Interface for objects
interface UserData {
  id: string
  email: string
}

// ✅ Use path aliases
import logger from '@utils/logger'

// ✅ Arrow functions for callbacks
items.map((item) => item * 2)
```

**Bad examples:**

```typescript
// ❌ Using var
var count = 0

// ❌ Using any without good reason
function process(data: any): any {
  return data
}

// ❌ Relative parent imports
import logger from '../../../utils/logger.utils'

// ❌ console.log instead of logger
console.log('Debug info')
```

**Naming conventions:**
- **Files**:
  - Utilities: `feature.utils.ts`
  - Types: `feature.d.ts`
  - Tests: `feature.test.ts`
  - Labs: `feature.labs.ts`
- **Variables/Functions**: camelCase
- **Classes/Interfaces/Types**: PascalCase
- **Constants**: UPPER_SNAKE_CASE (for true constants)
- **Private members**: prefix with underscore `_privateMethod`

## Testing

All new features should include tests.

**Writing tests:**

```typescript
// tests/my-feature.test.ts
import { describe, it, expect, beforeEach } from '@jest/globals'
import myFeature from '@/my-feature'

describe('MyFeature', () => {
  beforeEach(() => {
    // Setup
  })

  it('should do something specific', () => {
    const result = myFeature('input')
    expect(result).toBe('expected')
  })

  it('should handle edge cases', () => {
    expect(() => myFeature(null)).toThrow()
  })
})
```

**Testing guidelines:**
- Write descriptive test names
- Test happy path and edge cases
- Mock external dependencies
- Aim for high coverage on new code
- Tests should be independent and deterministic

**Run tests:**
```bash
bun run test           # Run all tests
bun run test:watch     # Watch mode (if configured)
```

## Documentation

Good documentation is as important as good code!

**What to document:**

1. **Code comments** - For complex logic
   ```typescript
   // Calculate exponential backoff delay with jitter
   // to prevent thundering herd problem
   const delay = baseDelay * Math.pow(2, attempt) * (0.5 + Math.random() * 0.5)
   ```

2. **JSDoc** - For public APIs
   ```typescript
   /**
    * Retries an async operation with exponential backoff.
    *
    * @param fn - The async function to retry
    * @param maxAttempts - Maximum number of retry attempts (default: 3)
    * @returns Promise resolving to the function result
    * @throws Last error if all attempts fail
    */
   export async function retry<T>(fn: () => Promise<T>, maxAttempts = 3): Promise<T>
   ```

3. **README updates** - For new features visible to users

4. **CLAUDE.md updates** - For architectural changes

**Documentation guidelines:**
- Write clear, concise explanations
- Include code examples where helpful
- Keep docs in sync with code changes
- Use proper markdown formatting

## Community

### Discussion Channels

- **GitHub Issues** - Bug reports and feature requests
- **GitHub Discussions** - General questions and ideas
- **Pull Requests** - Code review and collaboration

### Getting Help

If you need help:

1. Check the [README.md](README.md) and [CLAUDE.md](CLAUDE.md)
2. Search existing [issues](https://github.com/unfoldingcx/typescript-boiterplate/issues)
3. Ask in [Discussions](https://github.com/unfoldingcx/typescript-boiterplate/discussions)
4. Email us at admin@unfolding.cx

### Recognition

Contributors will be:
- Listed in release notes
- Mentioned in the project README (for significant contributions)
- Given credit in commit messages

---

## Thank You! 🙏

Your contributions, no matter how small, make a difference. Whether you're fixing a typo, reporting a bug, or implementing a feature, we appreciate your effort and time.

Happy coding! 🚀

---

<div align="center">

**Questions?** Open an issue or discussion, we're here to help!

Made with ❤️ by the Unfolding CX community

</div>
