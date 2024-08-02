<script>
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Textarea } from '$lib/components/ui/textarea';
  import { FileImage } from 'lucide-svelte';
</script>

<div
  class="flex w-full flex-col items-center justify-center gap-4 bg-eastern-blue-500 px-96 py-20 text-center text-white"
>
  <h1 class="text-5xl font-bold">Tentang Kami</h1>
</div>
<div class="container mt-12 grid grid-cols-2 gap-12">
  <p class="flex items-center">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima molestiae laborum cupiditate,
    in velit repellendus similique obcaecati corporis illum blanditiis nihil beatae deserunt
    incidunt aperiam, dolor rerum facere repudiandae nostrum.
  </p>
  <div class="flex items-center justify-center">
    <div
      class="m-12 flex aspect-square w-full max-w-[400px] items-center justify-center bg-gray-300"
    >
      <FileImage />
    </div>
  </div>
</div>

<h1 class="mb-12 text-center text-4xl font-bold">Tim Kami</h1>
<div class="container grid grid-cols-4 gap-12">
  {#each Array(8) as item}
    <div class="rounded-lg bg-white p-4 shadow-lg">
      <div class="mb-6 flex aspect-square w-full items-center justify-center rounded bg-gray-300">
        <FileImage />
      </div>
      <h1 class="mb-2 text-xl">John Doe</h1>
      <p class="text-black/60">Project Manager</p>
    </div>
  {/each}
</div>
<div class="flex w-full justify-center py-12">
  <Button class="rounded-full text-lg" size="lg">Download Profil</Button>
</div>
