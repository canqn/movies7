// auth.js
// store/modules/todos.js
import { reactive } from 'vue';
import movieApi from '../../../api/movieApi';

const state = reactive({
    movies: [],
    isLoading: false,
    movie: {},
    page: 1
});


const mutations = {
    SET_ALL_MOVIES(state, movies) {
        state.movies = movies
    },
    GET_MOVIE(id) {
        console.log('todo', state.todos, id)
        const findTodo = state.todos.find(todo => todo.id === id);
        state.todo = findTodo
        console.log(state.todo);
    },


};

const actions = {
    async fetchMovies({ commit }, page) {
        try {
            commit('SET_LOADING', true);
            const { items, status } = await movieApi.getAll(page);
            if (status) {
                commit('SET_ALL_MOVIES', items);
                commit('SET_LOADING', false);
            }
        } catch (error) {
            commit('SET_LOADING', false);
            console.error(error);
        }
    },

    async getTodo({ commit }, { id }) {
        try {
            // console.log('action', id)
            const res = await todosApi.get(id)
            console.log('status', res, id);
            if (res.status === 200) {
                mutations.GET_TODO(id)
            }
        } catch (error) {
            console.error(error);
        }
    },
};


const getters = {
    getAllMovies: state => state.movies,
    isLoading: state => state.isLoading,
    getMovie: state => state.movie

};

export default {
    state,
    getters,
    mutations,
    actions
};