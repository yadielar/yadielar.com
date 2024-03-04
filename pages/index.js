import Head from 'next/head';
import Resume from '../components/resume.mdx';

export default function Home() {
  return (
    <div className="px-5">
      <Head>
        <title>Yadiel Arroyo - Front-End Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex flex-col items-center justify-center text-center mt-16">
        <h1 className="text-4xl lg:text-6xl text-indigo-700 font-bold">
          Yadiel Arroyo
        </h1>
        <p className="text-xl lg:text-3xl mt-4">Front-End Developer</p>
      </header>

      <main>
        <article className="prose lg:prose-lg dark:prose-invert mx-auto mt-6 py-12">
          <Resume />
        </article>
      </main>

      <footer className="flex items-center justify-center border-t py-12">
        <a
          className="flex items-center justify-center text-gray-500 hover:text-blue-600"
          href="https://twitter.com/yadielar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <span className="text-black/25 mx-4">|</span>
        <a
          className="flex items-center justify-center text-gray-500 hover:text-blue-600"
          href="https://github.com/yadielar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}
