<script>
  import Container from "$lib/Container.svelte";
  import ExternalLink from "$lib/ExternalLink.svelte";
  import PageTitle from "$lib/PageTitle.svelte";
  import footerIcons from "$lib/assets/json/footerIcons.json";
  import InputTextField from "$lib/InputTextField.svelte";
</script>

<svelte:head>
  <title>Kontakt &ndash; Tim Deres &mdash; Frontend Web Developer</title>
</svelte:head>

<Container>
  <PageTitle title="Kontakt" />
  <div class="columns">
    <div class="column is-6 mb-6">
      <p class="subtitle">Angaben gem. § 5 TMG:</p>
      <address class="subtitle is-5 line-height-text">
        Tim Deres <br />
        Auf der Ratschelle 15 <br />
        58840 Plettenberg
      </address>

      <p>E-Mail: <a href="mailto:">tim@deres.de</a></p>
      <p>Telefon: <a href="tel:">02391/12012312</a></p>
      <p>
        Webseite: <ExternalLink link="https://derechtenap.github.io">
          https://derechtenap.github.io
        </ExternalLink>
      </p>
      <p class="mt-6 mb-4">Oder kontaktieren Sie mich über diese Netzwerke:</p>
      {#each footerIcons as icon}
        <ExternalLink link={icon.href}>
          <i
            class={`bi-${icon.name.toLowerCase()} is-size-2 has-text-primary mr-5`}
            role="img"
          />
        </ExternalLink>
      {/each}
    </div>

    <aside class="column has-background-white-bis rounded px-6 py-5">
      <form>
        <InputTextField id="name" label="Name" placeholder="Max Mustermann" />
        <InputTextField
          id="mail"
          label="E-Mail-Adresse"
          placeholder="max@mustermann.de"
        >
          Die E-Mail Adresse wird zur Kontaktaufnahme benötigt.
        </InputTextField>
        <InputTextField
          id="subject"
          label="Betreff"
          placeholder="Anfrage wegen einer Webseite"
        >
          Worum geht es in Ihrer Anfrage? Ein neues Projekt? Haben Sie eine
          Frage?
        </InputTextField>

        <textarea class="textarea" placeholder="Ihre Nachricht..." required />

        <button class="button is-primary mt-5" type="submit">
          <i class="bi-send mr-2" />
          Abschicken
        </button>
      </form>
    </aside>
  </div>
</Container>
