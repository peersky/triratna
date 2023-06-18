/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://trir.xyz",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    includeNonIndexSitemaps: true,
  },
  generateIndexSitemap: false,
};
