<script setup>
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
</script>

<template>
  <div class="wrapper">
    <Header />
    <main class="main mx-4 mt-16 grid gap-3 mb:grid-flow-row tb:grid-flow-row dt:grid-flow-col dt:justify-between">
      <slot />
      <Sidebar />
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
