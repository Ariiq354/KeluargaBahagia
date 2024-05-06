<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Plus } from 'lucide-svelte';
  import type { PageData } from './$types';
  import DataTable from './components/data-table.svelte';

  export let data: PageData;
</script>

<div class="flex flex-col gap-4">
  <div class="flex items-center justify-between">
    <div class="flex flex-col gap-1">
      <h1 class="text-3xl font-bold">Diskon</h1>
      <p>Tabel Daftar Diskon</p>
    </div>
    <Button href="/dashboard/admin/diskon/new" variant="outline" class="p-2 shadow-lg">
      <Plus />
    </Button>
  </div>
  <hr />
  <DataTable data={data.diskonData} />
</div>
