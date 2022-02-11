<script>
  import Nav from '$lib/Nav.svelte';
  import Hero from '$lib/Hero.svelte';
  import Footer from '$lib/Footer.svelte';
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>Tim Deres &ndash; Frontend Web Developer</title>
</svelte:head>

<div class="h-screen" in:fade={{ delay: 2000, duration: 2000 }} out:fade={{ duration: 1000 }}>
  <Nav />
  <Hero />
  <Footer />
</div>
