<script>
  import ExternalLink from "./ExternalLink.svelte";

  import bulmaLogo from "$lib/assets/png/madeWithBulma.png";
  import footerIcons from "$lib/assets/json/footerIcons.json";

  import signature from "$lib/assets/svg/signature.svg";

  const currentYear = new Date().getFullYear();
</script>

<footer class="footer has-text-centered">
  {#each footerIcons as icon}
    <ExternalLink link={icon.href}>
      <i
        class={`button is-large is-primary is-inverted bi-${icon.name.toLowerCase()}`}
      />
    </ExternalLink>
  {/each}

  <hr />

  <img class="signature" src={signature} alt="Unterschrift von Tim Deres" />

  <p class="has-text-weight-semibold has-text-grey-darker mb-5">
    &copy; {currentYear} &mdash; Erstellt von Tim Deres
  </p>

  <small>
    Created with
    <ExternalLink link="https://kit.svelte.dev/">SvelteKit</ExternalLink>
    and published using
    <ExternalLink link="https://pages.github.com/">GitHub Pages</ExternalLink>.
  </small>

  <div class="container-logo mt-3">
    <ExternalLink link="https://bulma.io">
      <figure class="image">
        <img src={bulmaLogo} alt="Logo des Bulma CSS-Frameworks" />
      </figure>
    </ExternalLink>
  </div>
</footer>

<style>
  .container-logo {
    display: flex;
    justify-content: center;
  }
  .image {
    width: 163px;
    height: 31px;
  }

  .button {
    background-color: transparent !important;
  }

  .signature {
    width: 200px;
  }
</style>
