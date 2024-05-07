<script>
  import { Button } from './ui/button';
</script>

<div class="sticky top-0 w-full border-b-2 bg-white py-4">
  <div class="container flex h-full items-center justify-between">
    <div class="flex items-center gap-4 text-2xl font-bold">
      <img src="/logo.png" alt="logo" class="h-14" />
      KELUARGA BAHAGIA
    </div>
    <nav class="flex gap-12 text-lg font-semibold">
      <div class="transition-all duration-300 hover:-translate-y-1 hover:opacity-70">Home</div>
      <div class="transition-all duration-300 hover:-translate-y-1 hover:opacity-70">About</div>
      <div class="transition-all duration-300 hover:-translate-y-1 hover:opacity-70">Product</div>
      <div class="transition-all duration-300 hover:-translate-y-1 hover:opacity-70">Contact</div>
    </nav>
    <Button href="/login">Sign Up</Button>
  </div>
</div>
