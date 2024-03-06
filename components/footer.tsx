export function Footer() {
  return (
    <footer className="flex items-center justify-center border-t border-gray-200 dark:border-gray-800 py-12 print:hidden">
      <FooterLink href="https://twitter.com/yadielar" external>
        Twitter
      </FooterLink>
      <span className="text-gray-300 dark:text-gray-700 mx-4">|</span>
      <FooterLink href="https://github.com/yadielar" external>
        Github
      </FooterLink>
    </footer>
  );
}

type FooterLinkProps = {
  children: React.ReactNode;
  href: string;
  external?: boolean;
};

function FooterLink({ children, href, external = false }: FooterLinkProps) {
  return (
    <a
      className="flex items-center justify-center text-gray-500 hover:text-indigo-700 dark:hover:text-indigo-300"
      href={href}
      {...(external
        ? {
            target: '_blank',
            rel: 'noopener noreferrer',
          }
        : {})}
    >
      {children}
    </a>
  );
}
