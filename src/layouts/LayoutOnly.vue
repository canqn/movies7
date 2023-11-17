<script setup>
import Header from '../components/Header';
import Footer from '../components/Footer';
</script>

<template>
  <div class="wrapper container mx-auto">
    <Header />
    <main class="main">
      <div class="content">
        <slot></slot>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
