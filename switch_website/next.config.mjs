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
      {
            source: "/brochure",
        destination:
          "https://drive.google.com/file/d/1A_jveOONrVJLTWkGk3oqMJJjSTWQiYja/view?usp=drivesdk",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;