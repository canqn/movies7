<script setup>
import { computed, ref, watch, onMounted } from 'vue';
import { useStore } from 'vuex';
import Image from '~/components/Image';
const props = defineProps({ movies: Object });
const pageTitle = ref('');
const store = useStore();

const movie = computed(() => store.state.movies.movie);
watch(
  () => movie.value.origin_name,
  (newName) => {
    pageTitle.value = newName;
    updateDocumentTitle();
  }
);

const updateDocumentTitle = () => {
  document.title = `Watch Online ${pageTitle.value} Free - Movies 7` || 'Watch Online Free - Movies 7'; // Set a default title if movie name is not available
};

onMounted(() => {
  updateDocumentTitle();
});
</script>

<template>
  <div
    class="site__content rounded-lg border-slate-800 border-[1px] mb-5 flex mb:relative mb:top-0 mb:left-0 tb:relative md:top-0 tb:left-0 overflow-hidden -z-50"
  >
    <div
      class="m__poster rounded-md dt:max-w-[232px] dt:min-w-[230px] dt:max-h-[335px] dt:min-h-[330px] mb:max-w-none mb:min-w-none tb:max-w-none tb:min-w-none"
    >
      <Image
        :src-img="movie.thumb_url"
        :alt-img="movie.name"
        class-name="img__poster"
        class="w-full rounded-lg h-full object-cover mb:absolute mb:opacity-10 tb:absolute tb:h-full tb:opacity-10"
      />
    </div>

    <div class="m__info text-text-color-light-c flex flex-col gap-3 p-7 tb:mt-48 mb:mt-20 z-50">
      <div class="m__title">
        <h1 class="m__title-name text-white text-2xl font-bold">{{ movie.name }}</h1>
        <p class="m__title-origin_name font-normal text-lg text-yellow-color-c">{{ movie.origin_name }}</p>
      </div>

      <div class="m__subtitle inline-flex gap-3 items-center text-sm font-normal">
        <span class="m__quality px-1 rounded-md border-[1px] border-[rgb(134 132 132)] text-[#868484]"
          ><a :href="movie.trailer_url">Trailer</a></span
        >
        <span class="m__quality px-1 rounded-md bg-[#868484] text-[#020916]">{{ movie.quality }}</span>
        <span class="m__rating px-1 rounded-md border-[1px] border-[rgb(134 132 132)] text-[#868484]">R</span>
        <span class="m__time">{{ movie.time }}</span>
      </div>

      <div class="m__desc text-sm" v-html="movie.content"></div>

      <div class="info">
        <table class="table-auto text-sm font-light">
          <tbody>
            <tr>
              <td class="t-title">Type:</td>
              <td>{{ movie.type }}</td>
            </tr>
            <tr>
              <td class="t-title">Country:</td>
              <td>
                <span v-for="item in movie.country" :key="item.id">{{ item.name }}</span>
              </td>
            </tr>
            <tr>
              <td class="t-title">Genre:</td>
              <td>
                <span v-for="(item, index) in movie.category" :key="item.id"
                  >{{ item.name }}
                  {{ index < movie.category.length - 1 ? ',' : '' }}
                  {{ index === movie.category.length - 1 ? ' and ' : '' }}</span
                >
              </td>
            </tr>
            <tr>
              <td class="t-title">Release:</td>
              <td>Earth, Wind, and Fire</td>
            </tr>
            <tr>
              <td class="t-title">Director:</td>
              <td>
                <span v-for="(item, index) in movie.director" :key="item.id">
                  {{ item.name }}
                  <!-- Add commas between names, except for the last one -->
                  {{ index < movie.director.length - 1 ? ',' : '' }}
                  <!-- Add 'and' before the last name -->
                  {{ index === movie.director.length - 1 ? ' and ' : '' }}
                </span>
              </td>
            </tr>
            <tr>
              <td class="t-title">Production:</td>
              <td>Earth, Wind, and Fire</td>
            </tr>
            <tr>
              <td class="t-title">Cast:</td>
              <td>
                <span v-for="(item, index) in movie.actor" :key="index"
                  >{{ item }}
                  <!-- Add commas between names, except for the last one -->
                  {{ index < movie.actor.length - 1 ? ',' : '' }}
                  <!-- Add 'and' before the last name -->
                  {{ index === movie.actor.length - 1 ? '.' : '' }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Mobile */
@media only screen and (max-width: 739px) {
  .site__content::after {
    content: '';
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    width: 100%;
    background: linear-gradient(0deg, rgba(2, 9, 22, 1) 0%, rgba(2, 9, 22, 0) 100%);
  }
}

/* Table */
@media only screen and (max-width: 740px) and(max-width: 1023px) {
  .site__content::after {
    content: '';
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    width: 100%;
    background: linear-gradient(0deg, rgba(2, 9, 22, 1) 0%, rgba(2, 9, 22, 0) 100%);
  }
}

/* Desktop */
@media only screen and (min-width: 1024px) {
}
</style>
