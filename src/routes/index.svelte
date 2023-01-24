<script>
  import Cta from "$lib/Cta.svelte";
  import { Splide, SplideSlide } from "@splidejs/svelte-splide";

  const splideOptions = {
    arrows: false,
    pagination: false,
    drag: false,
    rewind: true,
    autoplay: true,
    direction: "ttb",
    height: "5rem",
    speed: 2000,
  };
</script>

<svelte:head>
  <title>Tim Deres &mdash; Frontend Web Developer</title>
</svelte:head>

<div class="hero is-fullheight-with-navbar">
  <div class="hero-body bg my-6 rounded">
    <div class="container">
      <p class="title has-text-dark is-spaced is-size-2-mobile is-size-1">
        Hallo, ich bin Tim Deres.
      </p>
      <p class="subtitle is-size-6-mobile is-size-3 line-height-text">
        <Splide options={splideOptions} aria-label="">
          <SplideSlide class="has-text-grey-dark">
            Student Wirtschaftsinformatik @ Fachhochschule Südwestfalen in Hagen
          </SplideSlide>
          <SplideSlide class="has-text-grey-dark is-size-4-mobile">
            Frontend Web Developer
          </SplideSlide>
        </Splide>
      </p>
    </div>
  </div>
</div>
<Cta />

<style>
  .bg {
    background-color: transparent;
    background-image: url("../lib/assets/jpg/roman-bg.jpg");
  }
</style>
