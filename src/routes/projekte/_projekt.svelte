<script>
  import Container from "$lib/Container.svelte";
  import ExternalLink from "$lib/ExternalLink.svelte";
  import PageTitle from "$lib/PageTitle.svelte";

  export let client, link, title, timePeriod, description, image, keywords;
</script>

<svelte:head>
  <title>{title} &ndash; Tim Deres &mdash; Frontend Web Developer</title>
</svelte:head>

<Container>
  <nav class="breadcrumb is-small" aria-label="Projekt-Navigation">
    <ul>
      <li><a href="/">Tim Deres</a></li>
      <li><a href="/projekte">Projekte</a></li>
      <li class="is-active"><span class="pl-3">{title}</span></li>
    </ul>
  </nav>
  <PageTitle {title}>
    {description}
  </PageTitle>
  <div class="columns mt-6">
    <div class="column">
      <div class="content mb-6">
        <p class="title detail is-5">
          Kunde <span class="subtitle is-6 mt-3">{client}</span>
        </p>
        <p class="title detail is-5 my-5">
          Zeitraum <span class="subtitle is-6 mt-3">{timePeriod}</span>
        </p>
      </div>
      <p class="title is-6">Schlagwörter</p>
      <div class="tags are-medium">
        {#each keywords as keyword}
          <span class="tag is-primary is-light">{keyword}</span>
        {/each}
      </div>

      <hr />
      <p class="button">
        <ExternalLink {link}>{link}</ExternalLink>
      </p>
    </div>
    <div class="column is-8">
      <figure class="image mb-6">
        <img src={`../${image}`} alt={`Vorschaubild zum Projekt: ${title}`} />
      </figure>
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</Container>

<style lang="scss">
  .detail > span {
    display: block;
  }
</style>
