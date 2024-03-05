import NextMdx from '@next/mdx';

const withMDX = NextMdx();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
};

export default withMDX(nextConfig);
