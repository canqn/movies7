<script setup>
import Header from '../components/Header';
import Footer from '../components/Footer';
</script>

<template>
  <div class="wrapper">
    <Header />
    <main class="main">
      <div class="content mx-4">
        <slot></slot>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
