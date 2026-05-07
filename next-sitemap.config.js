/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://b2bsalesarrow.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/server-sitemap.xml"], // Exclude dynamic sitemaps if you have them
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
