<script>
  import Container from "$lib/Container.svelte";
  import PageTitle from "$lib/PageTitle.svelte";
</script>

<svelte:head>
  <title>Über mich &ndash; Tim Deres &mdash; Frontend Web Developer</title>
</svelte:head>

<Container>
  <PageTitle title="Über mich">
    Aktuell studiere ich <i>Wirtschaftsinformatik</i> an der Fachhochschule Südwestfalen.
    Baue in meiner Freizeit kleinere Webprojekte und fahre nebenbei gerne auf den
    Kartbahnen der Region im Kreis.
  </PageTitle>

  <div class="columns mt-6 is-align-items-center">
    <div class="column is-5 line-height-text">
      <p class="has-text-weight-bold is-size-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
        alias nesciunt totam laborum nulla. Ab qui ullam odio numquam beatae!
      </p>
      <p class="my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        repudiandae ut dignissimos, inventore quam esse voluptas est et. Atque,
        praesentium enim. Expedita dolores rerum, placeat minima error voluptate
        quae sunt, molestiae iste in tempore qui.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
        alias nesciunt totam laborum nulla. Ab qui ullam odio numquam beatae!
      </p>
    </div>
    <div class="column">
      <figure class="image">
        <img src="https://bulma.io/images/placeholders/640x360.png" alt="" />
      </figure>
    </div>
  </div>

</Container>
