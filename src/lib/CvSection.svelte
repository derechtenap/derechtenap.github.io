<script>
  export let cv;

  const { city, icon, location, skills, timePeriod, title } = cv;
</script>

<section class="media">
  <figure class="media-left">
    <i class={`bi-${icon} is-size-1 has-text-primary p-2`} role="img" />
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <small>{location}, {city}</small>
      </p>
      <p>
        <strong class="is-size-5">{title}</strong>
      </p>
      <p class="has-text-weight-bold my-3">Schwerpunkte</p>
      <ul>
        {#each skills as skill}
          <li>{skill}</li>
        {/each}
      </ul>
    </div>
  </div>
  <div class="media-right">
    {timePeriod}
  </div>
</section>
