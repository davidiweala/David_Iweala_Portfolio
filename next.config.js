const { Resend } = require('resend')

/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['resend'],  // moved out of experimental

}

module.exports = nextConfig
