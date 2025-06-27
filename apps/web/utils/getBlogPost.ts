import path from "path"
import fs from 'fs'
import { BlogTag } from '@/lib/blog-tags'

export interface BlogPost {
    slug: string
    title: string
    metadata?: {
        title: string
        description: string
        date: string
        tags: BlogTag[]
        authors?: string[]
        abstract?: string
    }
}

const getBlogPosts = (): BlogPost[] => {
    const postsDirectory = path.join(process.cwd(), 'blogs')

    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames
        .filter(fileName => fileName.endsWith('.mdx'))
        .map(fileName => ({
            slug: fileName.replace(/\.mdx$/, ''),
            title: fileName.replace(/\.mdx$/, '').split('-').join(' '),
        }))
}

const getBlogPostsWithMetadata = async (): Promise<BlogPost[]> => {
    const posts = getBlogPosts()
    
    const postsWithMetadata = await Promise.all(
        posts.map(async (post) => {
            try {
                const { metadata } = await import(`@/blogs/${post.slug}.mdx`)
                return { ...post, metadata }
            } catch (error) {
                console.error(`Error loading metadata for ${post.slug}:`, error)
                return post
            }
        })
    )

    return postsWithMetadata
}

const getFilteredBlogPosts = async (selectedTags?: BlogTag[]): Promise<BlogPost[]> => {
    const posts = await getBlogPostsWithMetadata()
    
    if (!selectedTags || selectedTags.length === 0) {
        return posts
    }

    return posts.filter(post => {
        if (!post.metadata?.tags) return false
        return selectedTags.some(tag => post.metadata?.tags?.includes(tag))
    })
}

const getAllUsedTags = async (): Promise<BlogTag[]> => {
    const posts = await getBlogPostsWithMetadata()
    const allTags = new Set<BlogTag>()
    
    posts.forEach(post => {
        if (post.metadata?.tags) {
            post.metadata.tags.forEach(tag => allTags.add(tag))
        }
    })
    
    return Array.from(allTags).sort()
}

export { getBlogPosts, getBlogPostsWithMetadata, getFilteredBlogPosts, getAllUsedTags }