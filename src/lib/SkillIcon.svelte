<script>
  export let skill;
</script>

<svg
  class="rounded has-text-white p-2"
  style={`background-color: ${skill.color}`}
  fill="currentColor"
  role="img"
  viewBox="0 0 24 24"
  width="64"
  height="64"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d={skill.path} />
</svg>
