/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        // apiKey: '4201e49a9242c900993b52966ad08c0e'
        apiKey: '127c7efed7fafe2ae353a62645564631'
    },
    experimental: {
        appDir: true,
    },
    compiler: {
        styledComponents: true,
    },
}

// eslint-disable-next-line no-undef
module.exports = nextConfig