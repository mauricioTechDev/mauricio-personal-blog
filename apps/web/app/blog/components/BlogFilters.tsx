'use client'

import { useState, useMemo } from 'react'
import { BlogTag, TAG_METADATA } from '@/lib/blog-tags'
import { BlogPost } from '@/utils/getBlogPost'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface BlogFiltersProps {
    availableTags: BlogTag[]
    posts: BlogPost[]
}

export default function BlogFilters({ availableTags, posts }: BlogFiltersProps) {
    const [selectedTags, setSelectedTags] = useState<BlogTag[]>([])

    const filteredPosts = useMemo(() => {
        if (selectedTags.length === 0) {
            return posts
        }

        return posts.filter(post => {
            if (!post.metadata?.tags) return false
            return selectedTags.some(tag => post.metadata!.tags.includes(tag))
        })
    }, [posts, selectedTags])

    // Calculate which tags should be available based on current selection
    const availableFilterTags = useMemo(() => {
        if (selectedTags.length === 0) {
            // Show all tags when nothing is selected
            return availableTags
        }

        // Find all tags that appear on posts with any of the selected tags
        const overlappingTags = new Set<BlogTag>()
        
        posts.forEach(post => {
            if (!post.metadata?.tags) return
            
            // Check if this post has any of the selected tags
            const hasSelectedTag = selectedTags.some(tag => post.metadata!.tags.includes(tag))
            
            if (hasSelectedTag) {
                // Add all tags from this post to available options
                post.metadata.tags.forEach(tag => overlappingTags.add(tag))
            }
        })

        // Always include selected tags + any tags that overlap with them
        return availableTags.filter(tag => 
            selectedTags.includes(tag) || overlappingTags.has(tag)
        )
    }, [availableTags, selectedTags, posts])

    const toggleTag = (tag: BlogTag) => {
        setSelectedTags(prev => 
            prev.includes(tag) 
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        )
    }

    const clearFilters = () => {
        setSelectedTags([])
    }

    return (
        <div className="space-y-6">
            {/* Tag Filters */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Filter by Tags</h2>
                    {selectedTags.length > 0 && (
                        <Button
                            onClick={clearFilters}
                            variant="secondary"
                            className="text-sm"
                        >
                            Clear filters
                        </Button>
                    )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                    {availableFilterTags.map(tag => {
                        const tagMeta = TAG_METADATA[tag]
                        const isSelected = selectedTags.includes(tag)
                        
                        return (
                            <Button
                                key={tag}
                                onClick={() => toggleTag(tag)}
                                variant={isSelected ? 'default' : 'outline'}
                                size="sm"
                                className={`rounded-full ${isSelected ? 'bg-blue-500 text-white hover:bg-blue-600' : `hover:opacity-80 ${tagMeta.color}`}`}
                                title={tagMeta.description}
                            >
                                {tagMeta.label}
                            </Button>
                        )
                    })}
                </div>

                {selectedTags.length > 0 && (
                    <div className="text-sm text-gray-600">
                        Showing {filteredPosts.length} of {posts.length} posts
                    </div>
                )}
            </div>

            {/* Blog Posts */}
            <div className="space-y-6">
                {filteredPosts.length === 0 ? (
                    <div className="text-center py-8">
                        <p className="text-gray-600 mb-4">No posts found with the selected tags.</p>
                        <Button
                            onClick={clearFilters}
                            variant="outline"
                        >
                            Clear filters to see all posts
                        </Button>
                    </div>
                ) : (
                    filteredPosts.map(post => (
                        <article key={post.slug} className="border-b border-gray-200 pb-6">
                            <Link href={`/blog/${post.slug}`} className="group">
                                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                                    {post.metadata?.title || post.title}
                                </h2>
                            </Link>
                            
                            {post.metadata?.description && (
                                <p className="text-gray-600 mb-3">
                                    {post.metadata.description}
                                </p>
                            )}
                            
                            <div className="flex items-center justify-between">
                                <div className="flex flex-wrap gap-1">
                                    {post.metadata?.tags?.map(tag => {
                                        const tagMeta = TAG_METADATA[tag]
                                        return (
                                            <span
                                                key={tag}
                                                className={`px-2 py-2 rounded-full text-xs font-medium ${tagMeta.color}`}
                                            >
                                                {tagMeta.label}
                                            </span>
                                        )
                                    })}
                                </div>
                                
                                {post.metadata?.date && (
                                    <time className="text-sm text-gray-500">
                                        {new Date(post.metadata.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </time>
                                )}
                            </div>
                        </article>
                    ))
                )}
            </div>
        </div>
    )
}