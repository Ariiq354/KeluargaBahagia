<script lang="ts">
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Topbar from '$lib/components/Topbar.svelte';
  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<div class="flex">
  <Sidebar role={data.user.role} />
  <div class="flex flex-1 flex-col bg-slate-100">
    <Topbar />
    <div class="container h-full w-full py-8">
      <slot />
    </div>
  </div>
</div>
