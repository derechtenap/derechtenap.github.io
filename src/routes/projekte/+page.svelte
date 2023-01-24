<!--
<script context="module">
  throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

  // export const Load = async ({ fetch }) => {
  //   // const projects = await fetch("/api/projekte.json");
  //   // const allProjects = await projects.json();
  //   // console.log(allProjects);
  //   return {
  //     projects: {},
  //   };
  // };
</script>
-->
<script>
  // import CardProject from "$lib/CardProject.svelte";
  import Container from "$lib/Container.svelte";
  import PageTitle from "$lib/PageTitle.svelte";
</script>

<svelte:head>
  <title>Projekte &ndash; Tim Deres &mdash; Frontend Web Developer</title>
</svelte:head>

<Container>
  <PageTitle title="Meine Projekte">
    An diesen Projekten habe ich in letzter Zeit gearbeitet.
  </PageTitle>

  <div class="columns is-multiline mt-6">
    <!--
    {#each projects as project}
      <CardProject {project} />
    {/each}
    -->
  </div>
</Container>
