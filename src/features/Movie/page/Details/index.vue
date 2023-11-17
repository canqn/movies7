<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import movieApi from '../../../../api/movieApi';
import MovieContent from '../../components/MovieContent/index.vue';
import MovieControl from '../../components/MovieControl/index.vue';
import MovieServer from '../../components/MovieServer/index.vue';
import MoviePlayer from '../../components/MoviePlayer/index.vue';
import MovieEpisodes from '../../components/MovieEpisodes/index.vue';

const route = useRoute();
const isLoading = ref(false);
const isPlayer = ref(false);
const movie = ref({});
const episodes = ref([]);
const linkEmbed = ref();
const activeEpisodeIndex = ref(-1);
const selectedServer = ref(null);
const movieId = computed(() => route.params.id);

const getMovieId = async () => {
  try {
    isLoading.value = true;
    const res = await movieApi.get(movieId.value);
    const { status, movie: fetchedMovie, episodes: fetchedEpisodes } = res;

    if (status) {
      isLoading.value = false;
      movie.value = fetchedMovie;
      episodes.value = fetchedEpisodes;

      if (!selectedServer.value && fetchedEpisodes.length > 0) {
        selectedServer.value = fetchedEpisodes[0];
      }
    } else {
      isLoading.value = false;
      alert(res.msg);
    }
  } catch (error) {
    isLoading.value = false;
    console.error(error.message);
  }
};

getMovieId();

// Watch for changes in movieId and fetch data accordingly
watch(movieId, () => {
  getMovieId();
});

const onPlayEpisode = (link, epIndex) => {
  isPlayer.value = true;
  linkEmbed.value = link;
  activeEpisodeIndex.value = epIndex;
};

const onPlayerClick = () => {
  const firstEpisode = episodes.value?.[0];
  const link_embed = firstEpisode?.server_data?.[0]?.link_embed;

  if (link_embed) {
    linkEmbed.value = link_embed;
    isPlayer.value = !isPlayer.value;
    activeEpisodeIndex.value = 0;
  } else {
    console.warn('Không có dữ liệu episodes hoặc link_embed.');
  }
};

const handleClickServer = (server) => {
  selectedServer.value = server;
};
</script>
<template>
  <section class="m__detail">
    <!--Movie Player-->
    <MoviePlayer :movie="movie" :is-player="isPlayer" :link-embed="linkEmbed" @click-player="onPlayerClick" />
    <!---Movie control-->
    <MovieControl />
    <!---End Movie control-->
    <div class="m__list mb-5">
      <!--server-->
      <MovieServer :episodes="episodes" :selected-server="selectedServer" @click-server="handleClickServer" />
      <!--List episodes-->
      <MovieEpisodes
        :selected-server="selectedServer"
        :active-episode-index="activeEpisodeIndex"
        @play-episode="onPlayEpisode"
      />
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
