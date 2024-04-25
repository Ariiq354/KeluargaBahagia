<script>
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import '../app.pcss';
</script>

<Navbar />
<slot></slot>
<Footer />
