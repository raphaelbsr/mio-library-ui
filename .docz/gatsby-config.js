const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Mio Library Ui',
    description:
      'Componentes de interface de usuário baseado na material-ui para linha de aplicativos mio',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          '/Users/raphael/Documents/NodeProjects/ReactJs/mio-library-ui/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Mio Library Ui',
        description:
          'Componentes de interface de usuário baseado na material-ui para linha de aplicativos mio',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/raphael/Documents/NodeProjects/ReactJs/mio-library-ui',
          templates:
            '/Users/raphael/Documents/NodeProjects/ReactJs/mio-library-ui/node_modules/docz-core/dist/templates',
          docz:
            '/Users/raphael/Documents/NodeProjects/ReactJs/mio-library-ui/.docz',
          cache:
            '/Users/raphael/Documents/NodeProjects/ReactJs/mio-library-ui/.docz/.cache',
          app:
            '/Users/raphael/Documents/NodeProjects/ReactJs/mio-library-ui/.docz/app',
          appPackageJson:
            '/Users/raphael/Documents/NodeProjects/ReactJs/mio-library-ui/package.json',
          appTsConfig:
            '/Users/raphael/Documents/NodeProjects/ReactJs/mio-library-ui/tsconfig.json',
          gatsbyConfig:
            '/Users/raphael/Documents/NodeProjects/ReactJs/mio-library-ui/gatsby-config.js',
          gatsbyBrowser:
            '/Users/raphael/Documents/NodeProjects/ReactJs/mio-library-ui/gatsby-browser.js',
          gatsbyNode:
            '/Users/raphael/Documents/NodeProjects/ReactJs/mio-library-ui/gatsby-node.js',
          gatsbySSR:
            '/Users/raphael/Documents/NodeProjects/ReactJs/mio-library-ui/gatsby-ssr.js',
          importsJs:
            '/Users/raphael/Documents/NodeProjects/ReactJs/mio-library-ui/.docz/app/imports.js',
          rootJs:
            '/Users/raphael/Documents/NodeProjects/ReactJs/mio-library-ui/.docz/app/root.jsx',
          indexJs:
            '/Users/raphael/Documents/NodeProjects/ReactJs/mio-library-ui/.docz/app/index.jsx',
          indexHtml:
            '/Users/raphael/Documents/NodeProjects/ReactJs/mio-library-ui/.docz/app/index.html',
          db:
            '/Users/raphael/Documents/NodeProjects/ReactJs/mio-library-ui/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
