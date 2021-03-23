const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://samsamhan.github.io/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'Samsamhan',
    logoLink: 'https://samsamhan.github.io/',
    title:
      "<a href='https://samsamhan.github.io/'>Samsamhan</a>",
    githubUrl: 'https://github.com/samsamhan/samsamhan.github.io',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Samsamhan', link: 'https://samsamhan.github.io/' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://samsamhan.github.io/'>graphql </a><div class='greenCircle'></div><a href='https://samsamhan.github.io/'>react</a>",
  },
  siteMetadata: {
    title: 'Gatsby Gitbook Boilerplate | Hasura',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/samsamhan/samsamhan.github.io/tree/ssh_blog/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
