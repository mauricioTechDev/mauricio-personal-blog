import { getBlogPostsWithMetadata, getAllUsedTags } from '@/utils/getBlogPost'
import Link from 'next/link'
import BlogFilters from './components/BlogFilters'
import { Header } from '@/components/header'

export default async function BlogIndex() {
    const posts = await getBlogPostsWithMetadata()
    const availableTags = await getAllUsedTags()

    // Sort posts by date in descending order (newest first)
    const sortedPosts = posts
        .filter(post => post.metadata?.date)
        .sort((a, b) => {
            return new Date(b.metadata!.date).getTime() - new Date(a.metadata!.date).getTime()
        })

    return (
        <div>
            <Header />
            <div className="max-w-4xl mx-auto py-8 px-4">
                <div className='flex flex-row items-center gap-2 text-2xl mb-8'>
                <div>
                    <Link
                        href="/"
                        rel="noopener noreferrer"
                    >
                        Home
                    </Link>
                </div>
            </div>

            <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
                <BlogFilters 
                    availableTags={availableTags}
                    posts={sortedPosts}
                />
            </div>
        </div>
    )
}
