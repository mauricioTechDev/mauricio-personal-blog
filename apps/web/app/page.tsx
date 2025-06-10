import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className='text-4xl'>
          Mauricio Acosta <code>Software Engineer</code>
        </h1>

        <div className={styles.ctas}>
          <Link
            className={styles.primary}
            href="/blog"
            rel="noopener noreferrer"
          >
            Blog Post
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <Link
          href="https://www.linkedin.com/in/mauriciotechdev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Linkedin
        </Link>
        <Link
          href="https://x.com/mauricioTechDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          X
        </Link>
        <Link
          href="https://github.com/mauricioTechDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="Github icon"
            width={16}
            height={16}
          />
          Github
        </Link>
      </footer>
    </div>
  );
}
