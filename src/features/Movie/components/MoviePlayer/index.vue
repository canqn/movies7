<script setup>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';

import images from '~/assets/images';
import Artplayer from '../../../../components/Artplayer';

const store = useStore();
const props = defineProps({
  movie: Object,
  playlist: Object
});

const isPlayer = computed(() => store.state.player.isPlayer);
const linkM3u8 = computed(() => store.state.player.linkM3u8);
const episodes = computed(() => store.state.movies.episodes);
const indexEp = computed(() => store.state.player.activeEpIndex);
const settings = computed(() => store.state.player.settings);

const emit = defineEmits(['click-player', 'update-index-ep'], props);

const linkMovie = ref();
const videoPlaylist = computed(() => {
  if (Array.isArray(props.playlist)) {
    return props.playlist.map((movies) => movies.link_m3u8);
  }
  return [];
});

watch(
  () => linkM3u8.value,
  (newValue) => {
    if (newValue) {
      linkMovie.value = newValue;
    }
  }
);

linkMovie.value = linkM3u8.value;

const getInstance = (art) => {
  console.info(art);
};

const handleVideoEnded = (currIndex, newUrl) => {
  if (!settings.value.autoNext) return;

  // console.log(currIndex);
  let newLink = videoPlaylist.value[currIndex];
  linkMovie.value = newLink;
  store.dispatch('player/updateIndex', { index: currIndex });
  // emit('update-index-ep', currIndex);
};

const onClick = () => {
  store.dispatch('player/setPlayer', { data: episodes.value });
  // emit('click-player');
};

const option = computed(() => {
  return {
    container: '.artplayer-app',
    url: linkMovie.value,
    poster: props.movie.poster_url,
    isLive: false,
    muted: false,
    autoplay: settings.value.autoPlay,
    pip: true,
    setting: true,
    loop: true,
    flip: true,
    playbackRate: true,
    aspectRatio: true,
    fullscreen: true,
    fullscreenWeb: true,
    miniProgressBar: true,
    mutex: true,
    backdrop: true,
    playsInline: true,
    // autoPlayback: false,
    airplay: true
  };
});

const stylePlayer = {};
</script>

<template>
  <div
    class="m__background mb-4 bg-cover overflow-hidden"
    :class="isPlayer ? 'mt-4' : ''"
    :style="{ 'background-image': `url(${movie.poster_url})` }"
  >
    <div
      class="m__player"
      :class="[
        isPlayer
          ? 'relative pb-[56.25%] h-0'
          : 'h-[450px] mb:max-h-60 tb:max-h-96 flex justify-center items-center flex-col '
      ]"
    >
      <div v-if="!isPlayer" class="cursor-pointer" @click="onClick">
        <img :src="images.play" alt="" srcset="" />
      </div>
      <Artplayer
        v-else
        :option="option"
        :style="stylePlayer"
        :playlist="videoPlaylist"
        :initial-index="indexEp"
        @video-ended="handleVideoEnded"
        @get-instance="getInstance"
      />
    </div>
  </div>
</template>

<style scoped>
.m__player {
  background: linear-gradient(0deg, rgba(2, 9, 22, 1) 0%, rgba(2, 9, 22, 0) 100%);
}
</style>
