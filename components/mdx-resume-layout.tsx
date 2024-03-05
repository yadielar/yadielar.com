import Head from 'next/head';
import { Header } from './header';
import { Footer } from './footer';

type MdxResumeLayoutProps = {
  children: React.ReactNode;
  documentTitle: string;
};

export function MdxResumeLayout({
  children,
  documentTitle,
}: MdxResumeLayoutProps) {
  return (
    <div className="px-5 print:px-0">
      <Head>
        <title>{documentTitle}</title>
      </Head>

      <Header />

      <main>
        <article className="prose hover:prose-a:text-indigo-700 dark:hover:prose-a:text-indigo-300 dark:prose-invert print:max-w-none mx-auto mt-6 py-12">
          {children}
        </article>
      </main>

      <Footer />
    </div>
  );
}
