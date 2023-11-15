/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        apiKey: '4201e49a9242c900993b52966ad08c0e'
    },
    experimental: {
        appDir: true,
    },
    compiler: {
        styledComponents: true,
    },
}

module.exports = nextConfig