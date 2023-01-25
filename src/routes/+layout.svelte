<script lang="ts">
	import '../app.scss';

	import Nav from '$lib/layout/Nav.svelte';
	import Footer from '$lib/layout/Footer.svelte';

	// Set to false, because a fallback is defined in the adapter configuration
	export const prerender = false;
</script>

<Nav />
<main>
	<slot />
</main>
<Footer />
