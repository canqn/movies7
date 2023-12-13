export const SET_ALL_MOVIES = (state, movies) => {
    state.movies = movies;
}

export const SET_LOADING = (state, loading) => {
    state.loading = loading;
}

export const SET_ERROR = (state, error) => {
    state.error = error;
}

export const SET_MOVIE = (state, data) => {
    state.movie = data.movie;
    state.episodes = data.episodes;

    let isSelectedServer = !data.movier && data.episodes.length > 0;
    if (isSelectedServer) {
        state.selectedServer = data.episodes[0]
    }
}

export const SET_SERVER_MOVIES = (state, server) => {
    state.selectedServer = server;
}

