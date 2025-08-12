# Project Structure

## Monorepo Organization
This is a Turborepo monorepo with the following workspace structure:

```
├── apps/
│   └── web/                 # Main Next.js application
└── packages/
    ├── eslint-config/       # Shared ESLint configurations
    ├── typescript-config/   # Shared TypeScript configurations
    └── ui/                  # Shared React components library
```

## Main Application (`apps/web/`)

### App Router Structure
```
apps/web/app/
├── layout.tsx              # Root layout with theme provider
├── page.tsx                # Homepage
├── globals.css             # Global styles
├── fonts/                  # Local font files (Geist Sans/Mono)
└── blog/
    ├── layout.tsx          # Blog-specific layout
    ├── page.tsx            # Blog index with filtering
    ├── [slug]/
    │   └── page.tsx        # Dynamic blog post pages
    └── components/
        └── BlogFilters.tsx # Tag filtering component
```

### Key Directories
- **`blogs/`** - MDX blog post files with frontmatter metadata
- **`components/`** - Reusable React components
  - `ui/` - shadcn/ui style components
- **`lib/`** - Utility functions and configurations
- **`utils/`** - Helper functions (blog post processing)
- **`public/`** - Static assets (images, icons, videos)

## Shared Packages

### `@repo/ui`
- Shared component library
- Uses Turborepo generators for scaffolding
- Components: Card, Code, Switch

### `@repo/eslint-config`
- Base ESLint configuration
- Next.js specific rules
- React internal rules

### `@repo/typescript-config`
- Base TypeScript configuration
- Next.js specific config
- React library config

## File Naming Conventions
- **Components**: PascalCase (e.g., `BlogFilters.tsx`)
- **Pages**: lowercase (e.g., `page.tsx`)
- **Utilities**: camelCase (e.g., `getBlogPost.ts`)
- **Blog posts**: kebab-case (e.g., `my-blog-post.mdx`)
- **CSS modules**: kebab-case (e.g., `blog.module.css`)

## Import Patterns
- Use `@/` alias for app-relative imports
- Workspace packages via `@repo/package-name`
- External dependencies from node_modules

## Content Management
- Blog posts are MDX files in `apps/web/blogs/`
- Metadata defined in frontmatter (title, description, date, tags)
- Dynamic routing handles `/blog/[slug]` pages
- Tag-based filtering system for content discovery