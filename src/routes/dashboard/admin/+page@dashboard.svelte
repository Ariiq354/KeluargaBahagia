<script lang="ts">
  import { ArrowRight, ChevronRight, CircleArrowRight, School, User, User2 } from 'lucide-svelte';
  import type { PageData } from './$types';
</script>

<div class="grid grid-cols-3 gap-4 px-12 text-white">
  <div class="relative w-full bg-blue-600 shadow-lg">
    <div class="flex flex-col px-4 pb-8 pt-4">
      <h1 class="text-3xl font-semibold">bla</h1>
      <p class="text-sm">Jumlah Semua User</p>
    </div>
    <a
      href="/dashboard/admin/teacher"
      class=" group relative z-30 flex items-center justify-center gap-1 bg-black/20 p-1 font-extralight"
    >
      <p>View More</p>
      <CircleArrowRight size="15" class="transition-all duration-200 group-hover:translate-x-2" />
    </a>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="absolute bottom-0 right-0 size-24 text-black/20"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"
      />
    </svg>
  </div>
  <div class="relative w-full bg-orange-600 shadow-lg">
    <div class="flex flex-col px-4 pb-8 pt-4">
      <h1 class="text-3xl font-semibold">lab</h1>
      <p class="text-sm">Jumlah Semua Siswa</p>
    </div>
    <a
      href="/dashboard/admin/student"
      class=" group relative z-30 flex items-center justify-center gap-1 bg-black/20 p-1 font-extralight"
    >
      <p>View More</p>
      <CircleArrowRight size="15" class="transition-all duration-200 group-hover:translate-x-2" />
    </a>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="absolute bottom-0 right-4 size-24 text-black/20"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      ><path
        fill="currentColor"
        d="M0 18v-1.575q0-1.075 1.1-1.75T4 14q.325 0 .625.013t.575.062q-.35.525-.525 1.1t-.175 1.2V18zm6 0v-1.625q0-.8.438-1.463t1.237-1.162T9.588 13T12 12.75q1.325 0 2.438.25t1.912.75t1.225 1.163t.425 1.462V18zm13.5 0v-1.625q0-.65-.162-1.225t-.488-1.075q.275-.05.563-.062T20 14q1.8 0 2.9.663t1.1 1.762V18zM4 13q-.825 0-1.412-.587T2 11q0-.85.588-1.425T4 9q.85 0 1.425.575T6 11q0 .825-.575 1.413T4 13m16 0q-.825 0-1.412-.587T18 11q0-.85.588-1.425T20 9q.85 0 1.425.575T22 11q0 .825-.575 1.413T20 13m-8-1q-1.25 0-2.125-.875T9 9q0-1.275.875-2.137T12 6q1.275 0 2.138.863T15 9q0 1.25-.862 2.125T12 12"
      /></svg
    >
  </div>
  <div class="relative w-full bg-green-600 shadow-lg">
    <div class="flex flex-col px-4 pb-8 pt-4">
      <h1 class="text-3xl font-semibold">bal</h1>
      <p class="text-sm">Jumlah Semua Kelas</p>
    </div>
    <a
      href="/dashboard/admin/class"
      class=" group relative z-30 flex items-center justify-center gap-1 bg-black/20 p-1 font-extralight"
    >
      <p>View More</p>
      <CircleArrowRight size="15" class="transition-all duration-200 group-hover:translate-x-2" />
    </a>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="absolute bottom-4 right-4 size-20 text-black/20"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      ><path
        fill="currentColor"
        d="M14 11q1.25 0 2.125-.875T17 8t-.875-2.125T14 5t-2.125.875T11 8t.875 2.125T14 11m-6 4.75q1.125-1.325 2.7-2.037T14 13t3.3.713T20 15.75V4H8zM8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V6h2v14h14v2zM14 9q-.425 0-.712-.288T13 8t.288-.712T14 7t.713.288T15 8t-.288.713T14 9m-3.3 7h6.6q-.725-.5-1.575-.75T14 15t-1.725.25T10.7 16M14 9.875"
      /></svg
    >
  </div>
</div>
