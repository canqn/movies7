import { reactive } from 'vue';
const state = reactive({
    movies: [],
    loading: false,
    error: null,
    movie: {},
    episodes: [],
    selectedServer: null,
    page: 1
});

export default state;