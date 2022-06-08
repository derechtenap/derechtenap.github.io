<!-- TODO: Automatically close menu when menu item is clicked -->
<script>
  import { onMount } from "svelte";

  import signature from "$lib/assets/svg/signature.svg";

  let expanded = false;

  const links = [
    {
      name: "Über mich",
      href: "/ueber-mich",
    },
    {
      name: "Projekte",
      href: "/projekte",
    },
  ];

  const buttons = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/tim-deres-133a66228/",
      isIcon: true,
      isPrimary: false,
    },
    {
      name: "GitHub",
      href: "https://github.com/derechtenap",
      isIcon: true,
      isPrimary: false,
    },
    {
      name: "Kontakt",
      href: "/kontakt",
      isIcon: false,
      isPrimary: true,
    },
  ];

  onMount(async () => {
    // onMount runs after the component is first rendered to the DOM.
    // This allows selecting the icon and the links...
    const burgerIcon = document.querySelector("#burger");
    const navbarMenu = document.querySelector("#nav-links");

    burgerIcon.addEventListener("click", () => {
      // https://bulma.io/documentation/components/navbar/#navbar-menu
      // The navbar-menu is hidden on touch devices (< 1024px). Unless
      // the modifier class `is-active` is added.
      navbarMenu.classList.toggle("is-active");

      // https://bulma.io/documentation/components/navbar/#navbar-burger
      burgerIcon.classList.toggle("is-active");
      burgerIcon.setAttribute("aria-expanded", !expanded);
      expanded = !expanded;
    });
  });
</script>

<div class="hero-head">
  <nav class="navbar is-white has-background-white" aria-label="Navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item has-text-weight-bold" href="/">
          <img src={signature} alt="Unterschrift von Tim Deres" />
        </a>

        <span
          class="navbar-burger"
          id="burger"
          aria-label="menu"
          aria-expanded="false"
          role="button"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </span>
      </div>

      <div class="navbar-menu" id="nav-links">
        <div class="navbar-start">
          {#each links as link}
            <a class="navbar-item" href={link.href}>{link.name}</a>
          {/each}
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              {#each buttons as link}
                {#if link.isPrimary}
                  <a class="button is-primary" href={link.href}>
                    {#if link.isIcon}
                      <i
                        class={`bi-${link.name.toLowerCase()}`}
                        role="img"
                        aria-label={link.name}
                      />
                    {:else}
                      {link.name}
                    {/if}
                  </a>
                {:else}
                  <a class="button" href={link.href}>
                    {#if link.isIcon}
                      <i
                        class={`bi-${link.name.toLowerCase()}`}
                        role="img"
                        aria-label={link.name}
                      />
                    {:else}
                      {link.name}
                    {/if}
                  </a>
                {/if}
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>
