import Head from 'next/head';
import Resume from '../components/resume.mdx';

export default function Home() {
  return (
    <div className="px-5 print:px-0">
      <Head>
        <title>Yadiel Arroyo - Front-End Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex flex-col items-center justify-center text-center mt-16 print:mt-0">
        <h1 className="text-4xl lg:text-6xl text-indigo-700 dark:text-indigo-300 font-bold">
          Yadiel Arroyo
        </h1>
        <p className="text-xl lg:text-3xl mt-4">Front-End Developer</p>
      </header>

      <main>
        <article className="prose prose-li:my-1 dark:prose-invert print:max-w-none mx-auto mt-6 py-12">
          <Resume />
        </article>
      </main>

      <footer className="flex items-center justify-center border-t border-gray-200 dark:border-gray-800 py-12">
        <a
          className="flex items-center justify-center text-gray-500 hover:text-indigo-700 dark:hover:text-indigo-300"
          href="https://twitter.com/yadielar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <span className="text-gray-300 dark:text-gray-700 mx-4">|</span>
        <a
          className="flex items-center justify-center text-gray-500 hover:text-indigo-700 dark:hover:text-indigo-300"
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
