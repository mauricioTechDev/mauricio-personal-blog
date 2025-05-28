import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below
    experimental: {
        mdxRs: true,
    },
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': '.',
        };
        return config;
    },
};

const withMDX = createMDX({
    // Add markdown plugins here, if desired
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
    },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
