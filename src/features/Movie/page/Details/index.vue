<script setup>
import { computed, ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import MovieContent from '../../components/MovieContent/index.vue';
import MovieControl from '../../components/MovieControl/index.vue';
import MovieServer from '../../components/MovieServer/index.vue';
import MoviePlayer from '../../components/MoviePlayer/index.vue';
import MovieEpisodes from '../../components/MovieEpisodes/index.vue';
const store = useStore();
const route = useRoute();
const movieId = computed(() => route.params.id);
const movie = computed(() => store.state.movies.movie);
const episodes = computed(() => store.state.movies.episodes);
const selectedServer = computed(() => store.state.movies.selectedServer);

const getMovie = (id) => {
  store.dispatch('movies/getMovie', { id });
  store.dispatch('player/setDefaultPlayer');
};
getMovie(movieId.value);
// Watch for changes in movieId and fetch data accordingly
watch(movieId, (newId) => {
  getMovie(newId);
});
</script>
<template>
  <section class="m__detail">
    <!--Movie Player-->
    <MoviePlayer :movie="movie" :playlist="selectedServer?.server_data" />
    <!---Movie control-->
    <MovieControl />
    <!---End Movie control-->
    <div class="m__list mb-5">
      <!--server-->
      <MovieServer :episodes="episodes" :selected-server="selectedServer" />
      <!--List episodes-->
      <MovieEpisodes :selected-server="selectedServer" />
    </div>

    <!--Movie Content-->
    <MovieContent :movie="movie" />
  </section>
</template>

<style scoped>
/* Select the scrollbar track */
::-webkit-scrollbar-track {
  /* Change the background color */
  background-color: #f1f1f1;
}

/* Select the scrollbar thumb */
::-webkit-scrollbar-thumb {
  /* Change the background color */
  background-color: #888;

  /* Change the size of the thumb */
  height: 10px;
  width: 30px;
}
</style>
