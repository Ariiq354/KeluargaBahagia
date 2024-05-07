<script>
  import { Facebook, Instagram, Mail, Phone, Youtube } from 'lucide-svelte';
</script>

<div class="w-full bg-white">
  <div class="container flex items-center justify-between p-12">
    <div class="flex flex-shrink-0 flex-col items-center gap-4">
      <img src="/logo.png" alt="logo" class="w-24" />
      <h1 class="text-xl font-bold">Keluarga Bahagia</h1>
    </div>
    <p class="px-24 text-lg">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quo quasi accusantium a
      nesciunt optio sint temporibus odit, consequatur perferendis dignissimos qui deserunt rerum!
      Quod similique ipsa a. Assumenda, nobis!
    </p>
    <div class="flex gap-24">
      <div class="flex flex-col gap-4">
        <h1 class="border-b-2 border-b-black text-xl font-bold">Info Kontak</h1>
        <ul class="flex flex-col gap-2">
          <li class="flex items-center gap-2"><Phone size={20} /> +123 345 789</li>
          <li class="flex items-center gap-2"><Mail size={20} /> lorem@ipsum.com</li>
        </ul>
      </div>

      <div class="flex flex-col gap-4">
        <h1 class="border-b-2 border-b-black text-xl font-bold">Follow Us</h1>
        <ul class="flex flex-col gap-2">
          <li class="flex items-center gap-2"><Instagram size={20} /> Instagram</li>
          <li class="flex items-center gap-2"><Facebook size={20} /> Facebook</li>
          <li class="flex items-center gap-2"><Youtube size={20} /> Youtube</li>
        </ul>
      </div>
    </div>
  </div>
</div>
