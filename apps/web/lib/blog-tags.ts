// Centralized blog tag system - Consolidated for better filtering experience
export const BLOG_TAGS = {
  // Core Development Categories
  AI_DEVELOPMENT: 'ai-development',
  TYPESCRIPT: 'typescript',
  NEXTJS_REACT: 'nextjs-react',
  STATE_MANAGEMENT: 'state-management',
  
  // Cross-cutting Concerns
  BEST_PRACTICES: 'best-practices',
  AI_SAFETY: 'ai-safety',
  DEBUGGING: 'debugging',
} as const;

// Type for valid tag values
export type BlogTag = typeof BLOG_TAGS[keyof typeof BLOG_TAGS];

// Array of all available tags for filtering
export const ALL_TAGS: BlogTag[] = Object.values(BLOG_TAGS);

// Tag metadata for display purposes - Consolidated system
export const TAG_METADATA: Record<BlogTag, { label: string; description: string; color: string }> = {
  [BLOG_TAGS.AI_DEVELOPMENT]: {
    label: 'AI Development',
    description: 'AI tools, LLMs, and AI-assisted development workflows',
    color: 'bg-pink-100 text-pink-800',
  },
  [BLOG_TAGS.TYPESCRIPT]: {
    label: 'TypeScript',
    description: 'TypeScript language, type safety, and advanced patterns',
    color: 'bg-blue-100 text-blue-800',
  },
  [BLOG_TAGS.NEXTJS_REACT]: {
    label: 'Next.js & React',
    description: 'Next.js framework, React patterns, and web development',
    color: 'bg-gray-100 text-gray-800',
  },
  [BLOG_TAGS.STATE_MANAGEMENT]: {
    label: 'State Management',
    description: 'State management libraries, patterns, and CMS integration',
    color: 'bg-purple-100 text-purple-800',
  },
  [BLOG_TAGS.BEST_PRACTICES]: {
    label: 'Best Practices',
    description: 'Development best practices, patterns, and developer experience',
    color: 'bg-emerald-100 text-emerald-800',
  },
  [BLOG_TAGS.AI_SAFETY]: {
    label: 'AI Safety',
    description: 'AI safety, security considerations, and prompt injection prevention',
    color: 'bg-amber-100 text-amber-800',
  },
  [BLOG_TAGS.DEBUGGING]: {
    label: 'Debugging',
    description: 'Debugging techniques, tools, and troubleshooting',
    color: 'bg-slate-100 text-slate-800',
  },
};

