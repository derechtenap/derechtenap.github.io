import adapter from "@sveltejs/adapter-static";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: "docs",
      assets: "docs",
      fallback: "index.html"
    }),
    paths: {
      assets: "https://derechtenap.github.io",
      base: "",
    },
  }
};

export default config;