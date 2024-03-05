export function Footer() {
  return (
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
  );
}
