import path from "path"
import fs from 'fs'


const getBlogPosts = () => {
    const postsDirectory = path.join(process.cwd(), 'blogs')
    console.log(postsDirectory)

    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames
        .filter(fileName => fileName.endsWith('.mdx'))
        .map(fileName => ({
            slug: fileName.replace(/\.mdx$/, ''),
            title: fileName.replace(/\.mdx$/, '').split('-').join(' '),
        }))
}

export { getBlogPosts }