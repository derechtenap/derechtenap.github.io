import adapter from "@sveltejs/adapter-static";
import sveltePreprocess from "svelte-preprocess";
import {
  mdsvex
} from 'mdsvex';

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
  },
  extensions: ['.svelte', '.md'],
  preprocess: [
    sveltePreprocess(),
    mdsvex({
      extensions: ['.md'],
      layout: {
        projekte: 'src/routes/projekte/_projekt.svelte'
      }
    })
  ]
};

export default config;