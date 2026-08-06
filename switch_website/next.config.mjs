/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: "/register",
        destination:
          "https://unstop.com/competitions/code-rush-30-krishna-institute-of-engineering-and-technology-kiet-ghaziabad-1731472",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;