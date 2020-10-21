const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/raphael/Documents/NodeProjects/ReactJs/mio-library-ui/.docz/.cache/dev-404-page.js"))),
  "component---index-mdx": hot(preferDefault(require("/Users/raphael/Documents/NodeProjects/ReactJs/mio-library-ui/index.mdx"))),
  "component---readme-md": hot(preferDefault(require("/Users/raphael/Documents/NodeProjects/ReactJs/mio-library-ui/README.md"))),
  "component---src-components-button-button-mdx": hot(preferDefault(require("/Users/raphael/Documents/NodeProjects/ReactJs/mio-library-ui/src/components/Button/Button.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/raphael/Documents/NodeProjects/ReactJs/mio-library-ui/.docz/src/pages/404.js")))
}

