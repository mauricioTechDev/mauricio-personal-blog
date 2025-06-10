import { getBlogPosts } from '@/utils/getBlogPost'
import Link from 'next/link'

export default async function BlogIndex() {
    const posts = getBlogPosts()

    // Sort posts by date in descending order (newest first)
    const postsWithMetadata = await Promise.all(
        posts.map(async (post) => {
            const { metadata } = await import(`@/blogs/${post.slug}.mdx`)
            return { ...post, date: metadata.date }
        })
    )

    const sortedPosts = postsWithMetadata.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <div className='flex flex-row items-center gap-2 text-2xl'>
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
            <div className="space-y-4">
                {sortedPosts.map(post => (
                    <article key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>
                            <h2 className="text-xl font-semibold capitalize">{post.title}</h2>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    )
}
