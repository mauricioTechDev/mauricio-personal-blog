# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `pnpm dev` - Start development server (runs on port 3000 with turbopack)
- `pnpm build` - Build all packages for production
- `pnpm lint` - Run ESLint with max warnings set to 0
- `pnpm check-types` - Run TypeScript type checking across all packages
- `pnpm format` - Format code using Prettier

### Package Management
- Uses `pnpm` with workspaces
- Node.js >= 18 required
- Run commands from root for all packages, or in specific package directories

## Architecture

This is a Turborepo monorepo containing a personal blog/website with the following structure:

### Main Application (`apps/web`)
- **Framework**: Next.js 15 with App Router and TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: MDX-based blog posts stored in `/blogs` directory
- **Analytics**: Vercel Analytics and Speed Insights integrated
- **Fonts**: Geist Sans and Geist Mono loaded locally

### Blog System
- Blog posts are MDX files in `apps/web/blogs/`
- Dynamic routing via `app/blog/[slug]/page.tsx`
- Blog post utility functions in `apps/web/utils/getBlogPost.ts`
- Custom MDX components configured in `mdx-components.tsx`
- Remark GFM plugin enabled for GitHub Flavored Markdown

### Shared Packages (`packages/`)
- `@repo/ui` - Shared React components (Button, Card, Code)
- `@repo/eslint-config` - ESLint configurations (base, Next.js, React)
- `@repo/typescript-config` - TypeScript configurations (base, Next.js, React library)

### Build System
- **Turborepo** manages the monorepo with dependency graph optimization
- **Tasks**: build, dev, lint, check-types configured in `turbo.json`
- Dev task runs persistently with cache disabled
- Build outputs cached in `.next/**` (excluding cache directory)

### Key Configuration
- Next.js configured for MDX with `pageExtensions` including `.mdx`
- Webpack alias `@` points to current directory
- MDX RS experimental feature enabled
- OpenGraph and Twitter meta tags configured in root layout