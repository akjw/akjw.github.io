module.exports = {
  siteMetadata: {
    title: 'Asey Koh',
    author: 'Asey Koh',
    description: 'Portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/feather-solid.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
