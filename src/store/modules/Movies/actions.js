import movieApi from '../../../api/movieApi';
export const fetchMovies = async ({ commit }, page) => {
    try {
        commit('SET_LOADING', true);
        const { items, status } = await movieApi.getAll(page);

        if (status) {
            commit('SET_ALL_MOVIES', items);
            commit('SET_LOADING', false);
        }
    } catch (error) {
        commit('SET_LOADING', false);
        commit('SET_ERROR', error);
        console.error(error);
    }
};

export const getMovie = async ({ commit }, { id }) => {
    try {
        commit('SET_LOADING', true);
        const data = await movieApi.get(id);

        if (data.status) {
            commit('SET_MOVIE', data);
            commit('SET_LOADING', false);
        }
    } catch (error) {
        commit('SET_LOADING', false);
        commit('SET_ERROR', error);
        console.error(error);
    }
}

export const setServer = async ({ commit }, { server }) => {
    try {
        commit('SET_SERVER_MOVIES', server);
    } catch (error) {
        console.error(error);
    }
}
