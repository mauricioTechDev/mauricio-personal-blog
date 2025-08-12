# Technology Stack

## Core Technologies
- **Next.js 15.3+** - React framework with App Router
- **React 19+** - UI library
- **TypeScript 5.8+** - Type safety and development experience
- **Tailwind CSS 4.1+** - Utility-first CSS framework
- **MDX** - Markdown with JSX for blog content

## Build System & Tooling
- **Turborepo** - Monorepo build system and task runner
- **pnpm** - Package manager (required version 9.0.0+)
- **ESLint** - Code linting with shared configurations
- **Prettier** - Code formatting
- **TypeScript** - Type checking

## Key Libraries
- **@next/mdx** - MDX integration for Next.js
- **next-themes** - Theme switching functionality
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **class-variance-authority** - Component variant management
- **Vercel Analytics & Speed Insights** - Performance monitoring

## Common Commands

### Development
```bash
# Install dependencies
pnpm install

# Start development server (with Turbopack)
pnpm dev

# Start specific app
pnpm --filter web dev
```

### Building & Testing
```bash
# Build all packages
pnpm build

# Lint all packages
pnpm lint

# Type checking
pnpm check-types

# Format code
pnpm format
```

### Package Management
```bash
# Add dependency to specific workspace
pnpm --filter web add <package>

# Add dev dependency
pnpm --filter web add -D <package>
```

## Environment Requirements
- **Node.js**: >=18
- **Package Manager**: pnpm 9.0.0+
- **TypeScript**: 5.8.2