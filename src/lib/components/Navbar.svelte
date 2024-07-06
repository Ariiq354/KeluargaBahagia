<script>
  import { Button } from './ui/button';
</script>

<div class="sticky top-0 z-30 w-full border-b-2 bg-white py-4">
  <div class="container flex h-full items-center justify-between">
    <div class="flex items-center gap-4 text-2xl font-bold">
      <img src="/logo.png" alt="logo" class="h-14" />
      KELUARGA BAHAGIA
    </div>
    <nav class="flex gap-12 text-lg font-semibold">
      <a href="/" class="transition-all duration-300 hover:-translate-y-1 hover:opacity-70">Home</a>
      <a href="/about" class="transition-all duration-300 hover:-translate-y-1 hover:opacity-70">
        About
      </a>
      <a href="/product" class="transition-all duration-300 hover:-translate-y-1 hover:opacity-70">
        Product
      </a>
      <a href="/contact" class="transition-all duration-300 hover:-translate-y-1 hover:opacity-70">
        Contact
      </a>
    </nav>
    <Button href="/login" class="text-white">Sign Up</Button>
  </div>
</div>
