<script lang="ts">
  import { enhance } from '$app/forms';
  import { LogOut } from 'lucide-svelte';
  import * as Tooltip from './ui/tooltip';
  import Button from './ui/button/button.svelte';
</script>

<div class="sticky top-0 z-10 border-b-2 border-black bg-white">
  <div class="z-20 flex h-full w-full justify-end gap-4 p-4">
    <form method="post" action="/login?/logout" use:enhance>
      <Button
        class="group flex h-10 items-center rounded-md p-2 shadow-md"
        type="submit"
        size="icon"
        variant="outline"
      >
        <Tooltip.Root>
          <Tooltip.Trigger>
            <LogOut />
          </Tooltip.Trigger>
          <Tooltip.Content>
            <p>Log Out</p>
          </Tooltip.Content>
        </Tooltip.Root>
      </Button>
    </form>
  </div>
</div>
