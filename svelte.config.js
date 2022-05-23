import adapter from "@sveltejs/adapter-static";

const dev = "production" === "development";

// Guide: https://sveltesaas.com/articles/sveltekit-github-pages-guide/
/** @type {import(""@sveltejs/kit").Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: "docs",
      assets: "docs"
    }),
    paths: {
      // change below to your repo name
      base: dev ? "" : "/derechtenap.github.io",
    },
  }
};

export default config;