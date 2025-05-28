import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Use the default components by default
        ...components,
        // Override specific components if needed
        // h1: ({ children }) => <h1 style={{ color: 'purple' }}>{children}</h1>,
    }
}
