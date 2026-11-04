/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Make sure the private notes folder is bundled with the server output
  experimental: {
    outputFileTracingIncludes: {
      "/api/download": ["./private-notes/**/*"],
    },
  },
};

export default nextConfig;
