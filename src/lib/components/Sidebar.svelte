<script lang="ts">
  import {
    Book,
    BookOpen,
    ClipboardPlus,
    DoorClosed,
    FileQuestion,
    GraduationCap,
    LayoutDashboard,
    NotebookTabs,
    Percent,
    ScanEye,
    TicketPercent,
    Users
  } from 'lucide-svelte';
  import { page } from '$app/stores';
  import { cn } from '$lib/utils';

  export let role: number;
</script>

<div
  class="sticky left-0 top-0 z-10 hidden h-screen w-72 flex-col border-r-2 border-black bg-white shadow-xl md:flex"
>
  <!-- Logo -->
  <div class="flex w-full items-center border-b-2 border-black px-4 py-3">
    <img src="/blackTransparent.png" alt="logo" class="h-12" />
  </div>

  <div class="flex flex-col gap-8 p-4">
    <!-- Admin -->
    {#if role === 1}
      <div class="flex flex-col gap-2">
        <div class="text-xs font-medium uppercase tracking-wider text-gray-500">admin</div>
        <div class="flex flex-col gap-2">
          <a
            href="/dashboard/admin"
            class={cn(
              $page.url.pathname == '/dashboard/admin'
                ? 'flex items-center gap-3 rounded-lg bg-primary/20 px-3 py-2 text-foreground transition-all duration-200 hover:text-foreground'
                : 'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all duration-200 hover:text-foreground'
            )}
          >
            <LayoutDashboard size="20" />
            <div class="flex items-center">Dashboard</div>
          </a>
          <a
            href="/dashboard/admin/diskon"
            class={cn(
              $page.url.pathname == '/dashboard/admin/diskon'
                ? 'flex items-center gap-3 rounded-lg bg-primary/20 px-3 py-2 text-foreground transition-all duration-200 hover:text-foreground'
                : 'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all duration-200 hover:text-foreground'
            )}
          >
            <TicketPercent size="20" />
            Diskon
          </a>
          <a
            href="/dashboard/admin/user"
            class={cn(
              $page.url.pathname == '/dashboard/admin/user'
                ? 'flex items-center gap-3 rounded-lg bg-primary/20 px-3 py-2 text-foreground transition-all duration-200 hover:text-foreground'
                : 'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all duration-200 hover:text-foreground'
            )}
          >
            <Users size="20" />
            <div class="flex items-center">User</div>
          </a>
        </div>
      </div>
    {/if}

    <!-- User/Teacher -->
    <div class="flex flex-col gap-2">
      <div class="text-xs font-medium uppercase tracking-wider text-gray-500">user</div>
      <div class="flex flex-col gap-2">
        <a
          href="/dashboard"
          class={cn(
            $page.url.pathname == '/dashboard'
              ? 'flex items-center gap-3 rounded-lg bg-primary/20 px-3 py-2 text-foreground transition-all duration-200 hover:text-foreground'
              : 'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all duration-200 hover:text-foreground'
          )}
        >
          <LayoutDashboard size="20" />
          <div class="flex items-center">Dashboard</div>
        </a>
      </div>
    </div>
  </div>
</div>
