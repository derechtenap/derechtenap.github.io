<script>
  export let id, label, placeholder;
</script>

<div class="field mb-5">
  <label class="label" for={id}>{label}</label>
  <div class="control">
    <input class="input" {id} {placeholder} required type="text" />
  </div>
  <p class="help mt-3">
    <slot />
  </p>
</div>
