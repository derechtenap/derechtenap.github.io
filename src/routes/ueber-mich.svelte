<script>
  import Container from "$lib/Container.svelte";
  import PageTitle from "$lib/PageTitle.svelte";
  import SkillIcon from "$lib/SkillIcon.svelte";
  import skills from "$lib/assets/json/skills.json";
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";

  const splideOptions = {
    rewind: true,
    autoplay: true,
    perPage: 3,
    perMove: 1,
    arrows: true,
    pagination: false,
    speed: 2000,
    rewindSpeed: 3000,
    breakpoints: {
      640: {
        perPage: 1,
      },
      920: {
        perPage: 2,
      },
    },
    // TODO: Set aria-labels --> https://splidejs.com/guides/i18n/
    i18n: {},
  };
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

  <h3 class="title is-4 mt-6">Sprachen & Frameworks</h3>

  <div class="p-6 has-background-white-ter rounded">
    <Splide
      options={splideOptions}
      aria-label="Diese Sprachen und Frameworks benutze ich..."
    >
      {#each skills as skill}
        <SplideSlide class="has-text-centered">
          <SkillIcon {skill} />
          <p class="is-size-5">{skill.name}</p>
        </SplideSlide>
      {/each}
    </Splide>
  </div>
</Container>
