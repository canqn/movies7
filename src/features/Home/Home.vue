<script setup>
import images from '../../assets/images';
import config from '../../config';
</script>

<template>
  <div class="home grid place-content-center place-items-center my-14 mx-4">
    <div class="flex flex-col gap-3 justify-center items-center max-w-2xl">
      <h1 class="text-4xl font-extrabold text-white text-center">WATCH MOVIES AND TV SHOWS ONLINE FOR FREE</h1>
      <p class="text-sm text-text-color-light-c text-center">
        Experience a superior destination for free online movie streaming. This platform enables you to enjoy movies
        online in high quality, completely free of charge.
      </p>
      <RouterLink
        :to="config.routes.movie"
        class="bg-yellow-color-c px-3 py-2 text-first-color-c rounded-md font-bold w-full text-center hover:bg-yellow-500"
        >Go to homepage</RouterLink
      >
      <p class="text-sm text-text-color-light-c text-center">
        If you enjoy the website, please consider sharing it with your friends. Thank you!
      </p>
      <div class="text-sm text-text-color-light-c mt-4">
        <p>
          Welcome to Movies7, your ultimate destination for online movie streaming. With our extensive database and a
          multitude of exciting features, we bring you a world of entertainment right at your fingertips. One of the
          standout features of Movies7 is our continuous and hourly updates. We tirelessly curate and add the latest
          movies and TV shows to our collection, ensuring that you always have access to the hottest content. Whether
          you're in the mood for action, romance, comedy, or something else entirely, our vast library has something to
          satisfy every cinematic craving. We take pride in our simple, smart, and convenient interface, designed to
          provide an effortless user experience. Navigating through our website is a breeze, allowing you to seamlessly
          browse and discover new titles. Our intuitive layout makes it easy to find the movies or TV shows you're
          looking for, and our robust search and filter system further enhances your browsing experience. At Movies7, we
          understand the importance of synchronization and convenience. Our platform offers synchronous support between
          devices, allowing you to seamlessly switch between your laptop, tablet, and smartphone. Not only that, but you
          can also save bookmarks and track your watching progress, picking up right where you left off, no matter which
          device you're using. The best part? You can enjoy all of this without any registration or payment required.
          Movies7 is a free streaming website, dedicated to providing unlimited access to entertainment for everyone. No
          subscriptions, no hidden fees, just pure cinematic enjoyment.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .home {
  background: linear-gradient(0deg, rgba(2, 9, 22, 1) 80%, rgba(2, 9, 22, 0) 108%);
} */
</style>
