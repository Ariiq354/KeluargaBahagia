<script lang="ts">
  import * as Form from '$lib/components/ui/form';
  import { Input } from '$lib/components/ui/input';
  import * as Select from '$lib/components/ui/select';
  import { goto } from '$app/navigation';
  import { Button } from '$lib/components/ui/button';
  import { ArrowLeft, Loader2 } from 'lucide-svelte';
  import { toast } from 'svelte-sonner';
  import SuperDebug, { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import type { PageData } from './$types';
  import { formSchema } from './schema';

  export let data: PageData;

  const form = superForm(data.form, {
    validators: zodClient(formSchema),
    async onUpdate({ form }) {
      if (form.valid) {
        toast.success('Submit berhasil');
        await goto('/dashboard/admin/diskon');
      }
    },
    onError(event) {
      toast.error(event.result.error.message);
    }
  });
  const { form: formData, enhance, submitting } = form;
</script>

<SuperDebug data={$formData} />

<div class="flex flex-col gap-4">
  <div class="flex items-center justify-between">
    <div class="flex flex-col gap-1">
      <h1 class="text-3xl font-bold">Diskon</h1>
      {#if $formData.id}
        <p>Form Edit Diskon</p>
      {:else}
        <p>Form Buat Diskon</p>
      {/if}
    </div>
    <Button variant="outline" href="/dashboard/admin/diskon" class="p-2 shadow-lg">
      <ArrowLeft />
    </Button>
  </div>
  <hr />

  <form method="POST" use:enhance>
    <Form.Field {form} name="id">
      <Form.Control let:attrs>
        <input hidden name={attrs.name} bind:value={$formData.id} />
      </Form.Control>
    </Form.Field>
    <Form.Field {form} name="nama">
      <Form.Control let:attrs>
        <Form.Label>Nama Diskon</Form.Label>
        <Input {...attrs} bind:value={$formData.nama} placeholder="Nama diskon..." />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="jumlah">
      <Form.Control let:attrs>
        <Form.Label>Jumlah Diskon %</Form.Label>
        <Input {...attrs} bind:value={$formData.jumlah} type="number" placeholder="1 - 100" />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="expireAt">
      <Form.Control let:attrs>
        <Form.Label>Tanggal Ekspirasi Diskon</Form.Label>
        <Input class="w-fit" type="date" {...attrs} bind:value={$formData.expireAt} />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Button disabled={$submitting} class="mt-4">
      {#if $submitting}
        <Loader2 class="mr-2 h-4 w-4 animate-spin" />
      {/if}
      Simpan
    </Form.Button>
  </form>
</div>
