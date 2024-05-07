<script>
  import { Button } from '$lib/components/ui/button';
  import { Circle, CirclePercent } from 'lucide-svelte';
</script>

<!-- Hero -->
<div class="h-[90vh] bg-slate-200">
  <div class="container grid h-full grid-cols-2">
    <div class="flex h-full w-full flex-col justify-center gap-8 p-16">
      <h1 class="text-6xl font-bold">Temukan rahasia keluarga bahagia</h1>
      <p class="text-xl">
        Bergabunglah dengan seminar kami dan jelajahi buku-buku unggulan kami untuk mempelajari cara
        menciptakan keluarga yang kuat dan penuh kasih sayang.
      </p>
      <div class="flex gap-4">
        <Button>Learn More</Button>
        <Button variant="outline" href="/login">Sign Up</Button>
      </div>
    </div>
  </div>
</div>

<div class="flex h-[50vh] w-full items-center justify-center py-12">
  <div class="flex w-2/3 flex-col gap-4">
    <h1 class="text-center text-4xl font-bold">Apakah anda ragu untuk menikah?</h1>
    <p class="text-center text-xl">
      Takut gagal? Belum punya calon? Belum siap secara finansial? Belum punya bekal ilmu
      pernikahan?
    </p>
  </div>
</div>

<div class="h-[90vh] bg-slate-200">
  <div class="container grid h-full grid-cols-2">
    <div class="flex h-full w-full flex-col justify-center gap-12">
      <h1 class="text-6xl font-bold">Seminar Pranikah</h1>
      <ul class="flex list-disc flex-col gap-4 text-xl">
        <li>
          Membantu Anda memahami esensi pernikahan sebagai ibadah dan separuh agama yang sempurna
        </li>
        <li>Mempersiapkan Anda untuk membangun rumah tangga yang kokoh dan bahagia</li>
        <li>
          Memberikan bekal ilmu dan keterampilan praktis untuk menghadapi berbagai tantangan dalam
          pernikahan
        </li>
        <li>Memperkuat komitmen dan komunikasi dengan pasangan</li>
      </ul>
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <Circle />[ Rino Amri, SE, M.Pd, chc] Konsultan Jelajah Diri
        </div>
        <div class="flex items-center gap-2">
          <Circle />[ Andri setiawan ] Guru Besar ponpes Dahlan ikhsan
        </div>
      </div>
    </div>
    <div class="h-full w-full p-12">
      <div class="h-full w-full bg-slate-500"></div>
    </div>
  </div>
</div>

<div class="h-[50vh] w-full bg-white">
  <div class="container flex h-full flex-col items-center justify-center gap-12 py-12">
    <h1 class="text-4xl font-bold">Daftar dan Dapatkan Keuntungan</h1>
    <div class="grid grid-cols-3 gap-4">
      <div class="flex items-center justify-center gap-4 rounded-lg bg-slate-200 px-6 py-4">
        <CirclePercent size={50} />
        <p class="text-xl">Diskon spesial untuk pendaftar awal</p>
      </div>
      <div class="flex items-center justify-center gap-4 rounded-lg bg-slate-200 px-6 py-4">
        <CirclePercent size={50} />
        <p class="text-xl">Materi seminar yang informatif dan bermanfaat</p>
      </div>
      <div class="flex items-center justify-center gap-4 rounded-lg bg-slate-200 px-6 py-4">
        <CirclePercent size={50} />
        <p class="text-xl">Berkesempatan untuk bertemu jodoh</p>
      </div>
    </div>
  </div>
</div>
<div class="w-full bg-slate-700 p-12 text-white">
  <p class="container w-2/3 text-center text-xl">
    "Menikah adalah perjalanan yang indah, namun membutuhkan persiapan yang matang. Bangunlah
    fondasi pernikahan yang kokoh dan bahagia. Jangan ragu untuk mendaftar dan persiapkan diri Anda
    untuk menyambut masa depan yang indah bersama pasangan tercinta."
  </p>
</div>
