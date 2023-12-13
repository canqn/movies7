import { computed, ref, watch, onMounted } from 'vue';
import { useStore } from 'vuex';

export function useMovies(query) {
    const page = ref(1);
    const store = useStore();
    const movies = computed(() => store.state.movies.movies);
    const isLoading = computed(() => store.state.movies.loading);
    const errorMsg = computed(() => store.state.movies.error);

    const fetchMovies = async (page) => {
        store.dispatch('movies/fetchMovies', page);
    };

    onMounted(() => {
        fetchMovies(page.value);
    });
    return { movies, isLoading, errorMsg }
}