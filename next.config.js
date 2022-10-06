module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/categories/rc",
        destination: "/categories/Radio%20Control",
        permanent: true,
      },
      {
        source: "/categories/3dp",
        destination: "/categories/3D%20Printing",
        permanent: true,
      },
      {
        source: "/categories/photo",
        destination: "/categories/Photography",
        permanent: true,
      },
    ];
  },
};
