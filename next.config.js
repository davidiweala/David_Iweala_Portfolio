
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    unoptimized: true,
  },
  serverExternalPackages: ['resend'],  // moved out of experimental

}

module.exports = nextConfig
