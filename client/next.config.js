/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: false
	},
  sassOptions: {
		includePaths: [path.join(__dirname, './src/styles')],
	},
  compiler: {
    removeConsole: true,
  },
}

module.exports = nextConfig
