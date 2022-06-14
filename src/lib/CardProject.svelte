<script>
  export let project;

  const { path } = project;
  const { description, image, title } = project.meta;
</script>

<div class="column is-one-third">
  <div class="card has-background-white-bis">
    <div class="card-image">
      <a href={path}>
        <figure class="image">
          <img src={image} alt={`Vorschaubild zum Projekt: ${title}`} />
        </figure>
      </a>
    </div>
    <div class="card-content">
      <p class="title is-4">
        <a class="has-text-black" href={path}>
          {title}
        </a>
      </p>
      <p class="subtitle is-6 line-height-text mt-4">
        {description}
      </p>
      <a class="button is-primary" href={path}>Zum Projekt</a>
    </div>
  </div>
</div>

<style lang="scss">
  .card-image,
  .image > img {
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
</style>
