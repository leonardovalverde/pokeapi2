/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "raw.githubusercontent.com"],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
