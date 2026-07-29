import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@veidjz/ui'],
  experimental: {
    useTypeScriptCli: true,
  },
}

export default nextConfig
