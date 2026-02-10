/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Ellite Construction Inc.",
    description: "Ellite Construction Inc. has been in the residential construction business for years, always seeking to bring innovation and quality to its customers. Continuously valuing customer satisfaction and high-level quality service, Ellite Construction Inc. has got its place in Massachusetts as an acknowledged, expert and reliable company, trusted by numerous customers.",
    url: "https://www.elliteconstruction.best", // No trailing slash allowed!
    address: "456 Westford Street, Lowell - MA",
    email: "ellitecmasonry@gmail.com",
    phone: "978-967-9426",
    facebook:'https://www.facebook.com/elliteEC/',
    messenger:'',
    google:'https://share.google/6QwsZiQGpfzWLa06k',
    instagram:'https://www.instagram.com/elliteconstruction/',
    thumbtack:'https://www.thumbtack.com/ma/lowell/masonry-contractors/ellite-c-masonry/service/251671686336472287?service_pk=251671686336472287&lp_request_pk=382917887968624652&zip_code=01852&lp_path=%2Finstant-results%3Fcategory_pk%3D195542926149771771%26zip_code%3D01852&keyword_pk=235852884815022900&click_origin=pro%20list%2Fclick%20pro%20avatar&sourcePage=&sourceEvent=',
    icon: "src/assets/images/icon.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        ssr: true,
        displayName: true
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Ellite Construction",
        short_name: "Elitte",
        start_url: "/",
        background_color: "#fafafa",
        theme_color: "#003D7A",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/assets/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
  proxy: [
    {
      prefix: "https://us-east1-tribeweb.cloudfunctions.net/ellite-email",
      url: "http://localhost:8000",
    },
  ]
}
