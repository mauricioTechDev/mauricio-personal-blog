import { getBlogPosts } from "@/utils/getBlogPost"
import { TAG_METADATA } from "@/lib/blog-tags"
import Link from "next/link"
import { Header } from "@/components/header"
import { Metadata } from "next"


type BlogPageProps = {
    params: Promise<{ slug: string }>
}

type BlogPostMetadata = {
    title: string
    description: string
    date: string
    tags: string[]
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
    const { slug } = await params
    const post = await import(`@/blogs/${slug}.mdx`)
    const metadata: BlogPostMetadata = post.metadata

    return {
        title: metadata.title,
        description: metadata.description,
        openGraph: {
            title: metadata.title,
            description: metadata.description,
            url: `https://www.mauricioacosta.dev/blog/${slug}`,
            siteName: "Mauricio Acosta Personal Website",
            images: [
                {
                    url: "https://www.mauricioacosta.dev/apple-touch-icon.png",
                    width: 180,
                    height: 180,
                    alt: metadata.title,
                },
            ],
            locale: "en_US",
            type: "article",
            publishedTime: metadata.date,
        },
        twitter: {
            card: "summary_large_image",
            title: metadata.title,
            description: metadata.description,
            images: ["https://www.mauricioacosta.dev/apple-touch-icon.png"],
            creator: "@mauricioTechDev",
        },
    }
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
        <div>
            <Header />
            <div className='flex flex-col items-center gap-6 py-6'>
                <div className='flex flex-row items-center gap-2 text-2xl'>
                <div>
                    <Link
                        href="/"
                        rel="noopener noreferrer"
                    >
                        Home
                    </Link>
                </div>
                <div >
                    <Link
                        href="/blog"
                        rel="noopener noreferrer"
                    >
                        Blogs
                    </Link>
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
                            <div className='flex gap-1 flex-wrap'>
                                {tags.map((tag) => {
                                    const tagMeta = TAG_METADATA[tag as keyof typeof TAG_METADATA] || { 
                                        label: tag, 
                                        color: 'bg-gray-100 text-gray-800' 
                                    };
                                    return (
                                        <span
                                            key={tag}
                                            className={`px-3 py-2 rounded-full text-xs font-medium ${tagMeta.color}`}
                                        >
                                            {tagMeta.label}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    {/* The markdown content */}
                    <MDXContent />
                </article>
            </div>
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