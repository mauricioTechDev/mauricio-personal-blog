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

## Blog Content Guidelines

### Blog Posts
- All blog posts are MDX files in `apps/web/blogs/`
- Must include metadata export with title, description, date, and tags
- Tags must use `BLOG_TAGS` constants from `@/lib/blog-tags` for type safety
- Import required: `import { BLOG_TAGS } from '@/lib/blog-tags'`

### Tag System
- Centralized tag definitions in `apps/web/lib/blog-tags.ts`
- All tags have metadata (label, description, color) for filtering UI
- Type-safe: Only defined tags can be used in blog posts
- To add new tags: Update `BLOG_TAGS` constant and `TAG_METADATA` object

### Content Structure
- Blog posts support images via Next.js Image component
- MDX components configured in `apps/web/mdx-components.tsx`
- GitHub Flavored Markdown enabled via remark-gfm
- Dynamic routing handles `/blog/[slug]` automatically

## Development Guidelines

### Code Style
- TypeScript strict mode enabled
- Follow Tailwind CSS utility patterns
- Prefer functional components with hooks

### File Organization
- Use `@/` alias for imports within apps/web
- Keep blog utilities in `apps/web/utils/`
- Shared components go in `packages/ui/`
- Configuration files in respective package roots

### Testing & Quality
- Always run `pnpm check-types` before committing
- ESLint must pass with zero warnings
- Format code with Prettier before submitting

## Troubleshooting

### Common Issues
- Node.js version must be >= 18 for pnpm compatibility
- Build errors often indicate missing dependencies in workspace packages
- MDX import errors usually mean missing frontmatter metadata
- Tag errors indicate undefined tags not in `blog-tags.ts`

### Environment Setup
- Use pnpm for package management (not npm/yarn)
- Development server runs on port 3000 with Turbopack
- Hot reloading enabled for both code and MDX content