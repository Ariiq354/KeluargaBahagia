<script lang="ts">
  import { navigating } from '$app/stores';
  import * as Card from '$lib/components/ui/card';
  import { Loader2 } from 'lucide-svelte';
</script>

{#if $navigating}
  <div class="flex h-full w-full items-center justify-center">
    <Loader2 class="animate-spin" size="50" />
  </div>
{:else}
  <Card.Root class="w-full border-black">
    <Card.Content class="p-6">
      <slot />
    </Card.Content>
  </Card.Root>
{/if}
