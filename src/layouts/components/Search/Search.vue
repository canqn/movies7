<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import Image from '../../../components/Image';
import images from '../../../assets/images';

const store = useStore();
const moviesList = computed(() => store.state.movies.movies);
const props = defineProps({ search: Boolean });
const input = ref('');
// Computed property to filter movies based on searchQuery
const filteredMovies = computed(() => {
  if (input.value !== '') {
    return moviesList.value.filter(
      (movie) =>
        movie.name.toLowerCase().includes(input.value.toLowerCase()) ||
        movie.origin_name.toLowerCase().includes(input.value.toLowerCase())
    );
  } else {
    return []; // Return all movies if searchQuery is empty
  }
});

// Computed property to display only the first 5 filtered movies
const displayedMovies = computed(() => {
  return filteredMovies.value.slice(0, 5); // Display only the first 5 movies
});
</script>

<template>
  <Transition>
    <div v-show="props.search" class="search__wrap flex items-center justify-center">
      <div class="search__box flex bg-first-color-alt-c px-4 py-3 rounded-t-2xl w-full max-w-3xl relative">
        <a
          href="#"
          class="bg-yellow-color-c text-[#141a23] text-[11px] font-semibold px-3 py-2 rounded-lg inline-flex items-center gap-1"
          ><font-awesome-icon :icon="['fas', 'filter']" size="sm" />Filter</a
        >
        <input
          v-model="input"
          type="text"
          placeholder="Search movies..."
          class="w-full py-1 px-2 bg-first-color-alt-c outline-none border-none text-xs text-text-color-light-c"
        />
        <button class="text-text-color-light-c">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" size="sm" />
        </button>

        <div class="search__lists absolute left-0 top-[53px] bg-first-color-alt-c rounded-b-2xl w-full max-w-3xl z-50">
          <div
            v-for="movie in displayedMovies"
            :key="movie._id"
            class="search-content px-4 py-2 flex hover:bg-first-color-alt-c"
          >
            <RouterLink :to="{ name: 'TheMovie', params: { id: movie.slug } }" class="flex gap-2">
              <Image
                :src-img="`https://img.ophim1.com/uploads/movies/${movie.thumb_url}`"
                :alt-img="movie.name"
                class-name="rounded-lg object-cover"
                :fallback="images.noImage"
                class="h-12 w-9"
              />
              <div class="m__heading flex flex-col gap-2">
                <div
                  class="m__title text-sm font-medium max-w-[15rem] tb:max-w-xl whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  {{ movie.origin_name }}
                </div>

                <div class="flex items-center gap-2 text-xs text-text-color-light-c">
                  <div class="m-quality bg-white font-bold text-xs px-1 rounded-md text-black">HD</div>
                  <span class="">{{ movie.year }} </span>
                  <div class="w-1 h-1 rounded-full bg-[#656466]"></div>
                  <span class="">110 min </span>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s linear;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.search-content:hover {
  background-color: aqua;
}
.search-content:nth-child(odd) {
  background-color: rgb(15 23 42);
}
.search-content:nth-child(even) {
  background-color: rgb(30 41 59);
}
</style>
