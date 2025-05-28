import styles from './blog.module.css'

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <article className={styles.mdxContent}>
            {children}
        </article>
    )
}
