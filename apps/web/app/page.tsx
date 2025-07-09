import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-20 gap-16 max-sm:p-8 max-sm:pb-20" style={{ fontSynthesis: 'none' }}>
      <Header />
      <main className="flex flex-col gap-8 row-start-2 max-sm:items-center">
        <h1 className='text-4xl max-sm:text-center'>
          Mauricio Acosta <code className="bg-gray-100 px-1 rounded font-semibold">Software Engineer</code>
        </h1>

        <div className="flex gap-4 max-sm:flex-col">
          <Link
            className="home-btn-primary appearance-none rounded-full h-12 px-5 border-none font-geist-sans border border-transparent transition-all cursor-pointer flex items-center justify-center text-base leading-5 font-medium gap-2 max-sm:text-sm max-sm:h-10 max-sm:px-4"
            style={{ 
              backgroundColor: 'var(--foreground)',
              color: 'var(--background)'
            }}
            href="/blog"
            rel="noopener noreferrer"
          >
            Blog Post
          </Link>
        </div>
      </main>
      <footer className="font-geist-sans row-start-3 flex gap-6 max-sm:flex-wrap max-sm:items-center max-sm:justify-center">
        <Link
          href="https://www.linkedin.com/in/mauriciotechdev/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline hover:underline-offset-1"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
            className="flex-shrink-0"
          />
          Linkedin
        </Link>
        <Link
          href="https://x.com/mauricioTechDev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline hover:underline-offset-1"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
            className="flex-shrink-0"
          />
          X
        </Link>
        <Link
          href="https://github.com/mauricioTechDev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline hover:underline-offset-1"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="Github icon"
            width={16}
            height={16}
            className="flex-shrink-0"
          />
          Github
        </Link>
      </footer>
    </div>
  );
}
