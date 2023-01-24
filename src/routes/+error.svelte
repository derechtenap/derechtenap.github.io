<script>
  import PageTitle from "$lib/PageTitle.svelte";
</script>

<div class="hero is-fullheight-with-navbar">
  <div class="hero-body">
    <div class="container">
      <PageTitle title="Oh, es ist ein Fehler aufgetreten!">
        Die Seite konnte nicht geladen und dargestellt werden. Bitte versuchen
        Sie es erneut. Sollte das Problem bestehen bleiben, würde ich mich
        freuen, wenn Sie mich über diesen Fehler informieren würden.
        <div class="block mt-6">
          <a href="/" class="button is-primary">Zur Startseite</a>
          <a href="/kontakt" class="button is-primary is-outlined">
            Fehler melden
          </a>
        </div>
      </PageTitle>
    </div>
  </div>
</div>
