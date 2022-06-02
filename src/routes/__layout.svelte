<script>
  import "../app.scss";
  import Nav from "$lib/Nav.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<Nav />
<div class="mx-2">
  <slot />
</div>
<Footer />
