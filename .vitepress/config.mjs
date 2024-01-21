import { defineConfig } from "vitepress"

export default defineConfig({
  title: "hekireki demo site",
  description: "hekireki demo site",
  ignoreDeadLinks: "localhostLinks",
  lang: "ja-JP",
  base: '/hekireki/',
  cleanUrls: true,
  srcDir: "./src",
  srcExclude: ["**/README.md", "draft/*.md", "template/*.md"],
  markdown: {
    image: {lazyLoading: true}
  },
  head: [
          ["link", {rel: "icon", href: "/favicon.ico"}],
          ["link", {rel: "preconnect", href: "https://fonts.googleapis.com"}],
          ["link", {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: ""}],
          ["link", {href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap", rel: "stylesheet"}],
          ["link", {rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons"}],
          ["meta", {property: "og:site_name", content: "hekireki demo site"}]
        ],
  lastUpdated: true,
  sitemap: {hostname: "https://handism.github.io/hekireki"},

  themeConfig: {
    siteTitle: "hekireki demo site",
    footerNav: [
      {text: "About", link: "/about"},
      {text: "Sitemap", link: "/sitemap"},
      {text: "GitHub", link: "https://github.com/handism/hekireki"}
    ]
  },

  async transformHead(context) {
    return [
      ["meta", { property: "og:title", content: context.pageData.title }],
      ["meta", { property: "og:image", content: `https://handism.github.io/hekireki/${context.pageData.frontmatter.image ? context.pageData.frontmatter.image : "site-image.webp"}`}]
    ]
  }

})
