module.exports = {
  siteMetadata: {
    title: "Joe Alden's CV",
    siteUrl: "https://cv.joealden.com"
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Joe Alden's CV",
        short_name: "Joe's CV",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "browser"
      }
    },
    "gatsby-plugin-netlify"
  ]
};
