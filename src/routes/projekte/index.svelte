<script context="module">
  export const load = async ({ fetch }) => {
    const projects = await fetch("/api/projekte.json");
    const allProjects = await projects.json();

    return {
      props: {
        projects: allProjects,
      },
    };
  };
</script>

<script>
  import CardProject from "$lib/CardProject.svelte";
  import Container from "$lib/Container.svelte";
  import PageTitle from "$lib/PageTitle.svelte";
  export let projects;
</script>

<svelte:head>
  <title>Projekte &ndash; Tim Deres &mdash; Frontend Web Developer</title>
</svelte:head>

<Container>
  <PageTitle title="Meine Projekte">
    An diesen Projekten habe ich in letzter Zeit gearbeitet.
  </PageTitle>

  <div class="columns is-multiline mt-6">
    {#each projects as project}
      <CardProject {project} />
    {/each}
  </div>
</Container>
