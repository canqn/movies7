export const setDefaultPlayer = async ({ commit }) => {
    commit('SET_DEFAULT_PLAYER');
}

export const setSelectEpisode = async ({ commit }, { data, activeEpIndex }) => {
    try {
        commit('SET_PLAYER_EP_MOVIE', { data, activeEpIndex });
    } catch (error) {
        console.error(error);
    }
}

export const setPlayer = async ({ commit }, { data }) => {
    try {
        console.log(data)
        commit('SET_PLAYER_MOVIE', { data });
    } catch (error) {
        console.error(error);
    }
}

export const updateIndex = async ({ commit }, { index }) => {
    try {

        commit('UPDATE_INDEX_EP', { index });
    } catch (error) {
        console.error(error);
    }
}

export const toggleSettings = async ({ commit }, { key }) => {
    try {

        commit('TOGGLE_SETTINGS_PLAYER', { key });
    } catch (error) {
        console.error(error);
    }
}

export const setSettings = async ({ commit }, { settings }) => {
    try {

        commit('SET_SETTINGS_PLAYER', { settings });
    } catch (error) {
        console.error(error);
    }
}

export const getSettings = async ({ commit }, { settings }) => {
    try {
        commit('GET_SETTINGS_PLAYER', { settings });
    } catch (error) {
        console.error(error);
    }
}