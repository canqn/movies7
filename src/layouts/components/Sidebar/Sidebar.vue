<script setup>
import SidebarItem from '~/components/SidebarItem';
import MoviesUpdated from '~/features/Movie/page/Sidebar/Updated';
import NewlyAdded from '~/features/Movie/page/Sidebar/NewlyAdded';
</script>

<template>
  <aside class="site__sidebar w-80 tb:w-full mb:w-full mt-3 flex flex-col gap-3">
    <MoviesUpdated />
    <NewlyAdded />
  </aside>
</template>
