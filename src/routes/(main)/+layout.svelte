<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
<div class="grainy">
  <slot />
</div>
<Footer />
