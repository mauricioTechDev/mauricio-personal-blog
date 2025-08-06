# CLAUDE.md - Blog Post Guidelines

This file provides guidance to Claude Code when working with blog posts in this directory.

## Blog Post Structure

### Title Guidelines - CRITICAL

**DO NOT** include H1 titles (`# Title`) in the MDX content. The blog post page template automatically renders the title from the metadata object.

**Correct Structure:**
```mdx
import { BLOG_TAGS } from '@/lib/blog-tags'

export const metadata = {
  title: 'Your Blog Post Title',
  description: 'Description of your post',
  date: '2025-01-01T12:00:00Z',
  tags: [BLOG_TAGS.EXAMPLE_TAG],
}

Your content starts here directly without a duplicate H1 title.

## Your First Section Header

Content goes here...
```

**Incorrect Structure (DO NOT DO THIS):**
```mdx
import { BLOG_TAGS } from '@/lib/blog-tags'

export const metadata = {
  title: 'Your Blog Post Title',
  description: 'Description of your post',
  date: '2025-01-01T12:00:00Z',
  tags: [BLOG_TAGS.EXAMPLE_TAG],
}

# Your Blog Post Title  <!-- DO NOT DO THIS - Creates duplicate title -->

Your content starts here...
```

### Required Elements

1. **Import statement** for BLOG_TAGS
2. **Metadata export** with:
   - `title`: The blog post title (will be rendered by page template)
   - `description`: SEO description
   - `date`: ISO date string
   - `tags`: Array using BLOG_TAGS constants only

### Content Guidelines

- Start content directly after metadata export
- Use H2 (`##`) for main section headers
- Use H3 (`###`) for subsections
- All tags must be defined in `@/lib/blog-tags.ts`
- Follow existing blog post patterns for consistency

### Why No H1 Titles?

The blog post page template (`app/blog/[slug]/page.tsx`) automatically renders:
- The title from metadata as an H1
- The formatted date
- The tags with proper styling
- Navigation breadcrumbs

Adding an H1 in the MDX content creates a duplicate title display.