import path from "path"
import fs from 'fs'
import { getBlogPosts } from "@/utils/getBlogPost"


type BlogPageProps = {
    params: Promise<{ slug: string }>
}

type BlogPostMetadata = {
    title: string
    description: string
    date: string
    tags: string[]
}

export default async function BlogPage({ params }: BlogPageProps) {
    const { slug } = await params
    const post = await import(`@/blogs/${slug}.mdx`)

    // Get the react component from processing the MDX file
    const MDXContent = post.default

    // Process exported metadata to construct the title area of our blog post
    const metadata: BlogPostMetadata = post.metadata
    const title = metadata.title
    const date = new Date(metadata.date)
    const tags = metadata.tags
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    }).format(date)

    return (
        <div className='flex flex-col items-center gap-6 py-6'>
            <div className='flex flex-row items-center gap-2 text-2xl'>
                <div>
                    <a
                        href="/"
                        rel="noopener noreferrer"
                    >
                        Home
                    </a>
                </div>
                <div >
                    <a
                        href="/blog"
                        rel="noopener noreferrer"
                    >
                        Blogs
                    </a>
                </div>

            </div>
            {/* some wrappers for styling and additional content*/}
            <div className='mx-auto w-full max-w-[768px]'>
                <article className='w-full p-6'>
                    {/* A title section using the markdown metadata */}
                    <div className='mt-6 mb-8'>
                        <h1 className='mb-2 text-4xl font-bold'>{title}</h1>
                        <div className='flex items-center gap-2 py-2'>
                            <span className='text-sm'>{formattedDate}</span>|
                            <div className='flex gap-1'>
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className='p-3 text-xs'
                                    >
                                        {tag} |
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* The markdown content */}
                    <MDXContent />
                </article>
            </div>
        </div>
    )
}

export function generateStaticParams() {
    const posts = getBlogPosts()

    return posts.map((post) => ({
        slug: post.slug,
    }))
}

// By marking as false, accessing a route not defined in generateStaticParams will 404.
export const dynamicParams = false