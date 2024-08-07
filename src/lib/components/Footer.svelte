<script>
  import { Facebook, Instagram, Mail, Phone, Youtube } from 'lucide-svelte';
</script>

<div class="w-full bg-eastern-blue-100">
  <div class="container flex items-center justify-between p-12">
    <div class="flex flex-shrink-0 flex-col items-center gap-4">
      <img src="/logo.png" alt="logo" class="w-24" />
      <h1 class="text-xl font-bold">Keluarga Bahagia</h1>
    </div>
    <p class="px-24 text-lg">
      "Menikah adalah perjalanan yang indah, namun membutuhkan persiapan yang matang. Bangunlah
      fondasi pernikahan yang kokoh dan bahagia. Jangan ragu untuk mendaftar dan persiapkan diri
      Anda untuk menyambut masa depan yang indah bersama pasangan tercinta."
    </p>
    <div class="flex gap-24">
      <div class="flex flex-col gap-4">
        <h1 class="border-b-2 border-b-black text-xl font-bold">Info Kontak</h1>
        <ul class="flex flex-col gap-2">
          <li class="flex w-44 items-center gap-2"><Phone size={20} /> +62 857 7204 8120</li>
          <li class="flex items-center gap-2"><Mail size={20} /> keluargabahagianews@gmail.com</li>
        </ul>
      </div>

      <div class="flex flex-col gap-4">
        <h1 class="border-b-2 border-b-black text-xl font-bold">Follow Us</h1>
        <ul class="flex flex-col gap-2">
          <li>
            <a
              href="https://www.instagram.com/keluargabahagia.id_?igsh=MWkzazAyazM0MmVyag=="
              target="_blank"
              class="flex items-center gap-2"
            >
              <Instagram size={20} /> Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@keluargabahagia_id?_t=8njgSqMVs5H&_r=1"
              class="flex items-center gap-2"
            >
              <Facebook size={20} /> Tiktok
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@KeluargaBahagia_id"
              target="_blank"
              class="flex items-center gap-2"
            >
              <Youtube size={20} /> Youtube
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
