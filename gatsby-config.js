// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `وب‌سایت شخصی پوریا فیاضی`,
    author: {
      name: `پوریا فیاضی`,
      summary: `مهندس کامپیوتر و توسعه‌دهنده Full-stack.`,
    },
    description: `این سایت شخصی من است که با گتسبی ساخته شده.`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    social: {
      twitter: `pooryafayazi`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
  ],
}
