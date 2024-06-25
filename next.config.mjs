/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tse3.explicit.bing.net',
                port: '',
            },
        ],
    },
};

export default nextConfig;
