// Centralized blog tag system
export const BLOG_TAGS = {
  // Programming Languages & Frameworks
  TYPESCRIPT: 'typescript',
  JAVASCRIPT: 'javascript',
  NEXTJS: 'nextjs',

  // Web Development
  WEB_DEVELOPMENT: 'web-development',
  ROUTING: 'routing',
  MIDDLEWARE: 'middleware',

  // AI & Tools
  AI_TOOLS: 'ai-tools',
  COPILOT: 'copilot',
  CLAUDE: 'claude',
  MCP: 'mcp',
  LLM: 'llm',

  // Security & Safety
  SECURITY: 'security',
  AI_SAFETY: 'ai-safety',
  PROMPT_INJECTION: 'prompt-injection',

  // Development Practices
  BEST_PRACTICES: 'best-practices',
  TYPE_SAFETY: 'type-safety',
  TYPE_NARROWING: 'type-narrowing',
  DEBUGGING: 'debugging',
  DEVELOPER_EXPERIENCE: 'developer-experience',
} as const;

// Type for valid tag values
export type BlogTag = typeof BLOG_TAGS[keyof typeof BLOG_TAGS];

// Array of all available tags for filtering
export const ALL_TAGS: BlogTag[] = Object.values(BLOG_TAGS);

// Tag metadata for display purposes
export const TAG_METADATA: Record<BlogTag, { label: string; description: string; color: string }> = {
  [BLOG_TAGS.TYPESCRIPT]: {
    label: 'TypeScript',
    description: 'TypeScript language and type system',
    color: 'bg-blue-100 text-blue-800',
  },
  [BLOG_TAGS.JAVASCRIPT]: {
    label: 'JavaScript',
    description: 'JavaScript language fundamentals',
    color: 'bg-yellow-100 text-yellow-800',
  },
  [BLOG_TAGS.NEXTJS]: {
    label: 'Next.js',
    description: 'Next.js framework and features',
    color: 'bg-gray-100 text-gray-800',
  },
  [BLOG_TAGS.WEB_DEVELOPMENT]: {
    label: 'Web Development',
    description: 'General web development topics',
    color: 'bg-green-100 text-green-800',
  },
  [BLOG_TAGS.ROUTING]: {
    label: 'Routing',
    description: 'Application routing and navigation',
    color: 'bg-purple-100 text-purple-800',
  },
  [BLOG_TAGS.MIDDLEWARE]: {
    label: 'Middleware',
    description: 'Middleware patterns and implementation',
    color: 'bg-indigo-100 text-indigo-800',
  },
  [BLOG_TAGS.AI_TOOLS]: {
    label: 'AI Tools',
    description: 'AI-powered development tools',
    color: 'bg-pink-100 text-pink-800',
  },
  [BLOG_TAGS.COPILOT]: {
    label: 'Copilot',
    description: 'GitHub Copilot and AI coding assistants',
    color: 'bg-rose-100 text-rose-800',
  },
  [BLOG_TAGS.CLAUDE]: {
    label: 'Claude',
    description: 'Claude AI and related tools',
    color: 'bg-orange-100 text-orange-800',
  },
  [BLOG_TAGS.MCP]: {
    label: 'MCP',
    description: 'Model Context Protocol',
    color: 'bg-teal-100 text-teal-800',
  },
  [BLOG_TAGS.LLM]: {
    label: 'LLM',
    description: 'Large Language Models and behavior',
    color: 'bg-cyan-100 text-cyan-800',
  },
  [BLOG_TAGS.SECURITY]: {
    label: 'Security',
    description: 'Security considerations and practices',
    color: 'bg-red-100 text-red-800',
  },
  [BLOG_TAGS.AI_SAFETY]: {
    label: 'AI Safety',
    description: 'AI safety and alignment topics',
    color: 'bg-amber-100 text-amber-800',
  },
  [BLOG_TAGS.PROMPT_INJECTION]: {
    label: 'Prompt Injection',
    description: 'Prompt injection techniques and prevention',
    color: 'bg-violet-100 text-violet-800',
  },
  [BLOG_TAGS.BEST_PRACTICES]: {
    label: 'Best Practices',
    description: 'Development best practices and patterns',
    color: 'bg-emerald-100 text-emerald-800',
  },
  [BLOG_TAGS.TYPE_SAFETY]: {
    label: 'Type Safety',
    description: 'Type safety in programming',
    color: 'bg-sky-100 text-sky-800',
  },
  [BLOG_TAGS.TYPE_NARROWING]: {
    label: 'Type Narrowing',
    description: 'TypeScript type narrowing techniques',
    color: 'bg-lime-100 text-lime-800',
  },
  [BLOG_TAGS.DEBUGGING]: {
    label: 'Debugging',
    description: 'Debugging techniques and tools',
    color: 'bg-slate-100 text-slate-800',
  },
  [BLOG_TAGS.DEVELOPER_EXPERIENCE]: {
    label: 'Developer Experience',
    description: 'Improving developer productivity and experience',
    color: 'bg-fuchsia-100 text-fuchsia-800',
  },
};