/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `XJTU Software Mirrors`,
    siteUrl: `https://mirrors.xjtu.edu.cn/`,
    description: `The Xi'an Jiaotong University Software Mirrors website.`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'templates',
        path: './src/templates/',
      },
      __key: 'templates',
    },
  ],
  trailingSlash: 'always',
};
