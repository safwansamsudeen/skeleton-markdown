<script>
  export let ordered
  export let start
</script>

{#if ordered}
  <ol class="list" {start}><slot></slot></ol>
{:else}
  <ul class="list"><slot></slot></ul>
{/if}
