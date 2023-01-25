import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	// TODO: Check if this config still works...
	// I used it to deploy the site to github around may 2022
	// Further information https://kit.svelte.dev/docs/adapter-static
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		paths: {
			assets: 'https://derechtenap.github.io',
			base: ''
		}
	}
};

export default config;
