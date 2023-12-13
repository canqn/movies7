export const SET_DEFAULT_PLAYER = (state) => {
    state.isPlayer = false;
    state.linkM3u8 = null;
    state.activeEpIndex = -1;
}

export const SET_PLAYER_MOVIE = (state, { data }) => {
    const firstEpisode = data[0];
    const linkItem = firstEpisode?.server_data?.[0]?.link_m3u8;
    if (linkItem) {
        state.linkM3u8 = linkItem;
        state.isPlayer = !state.isPlayer;
        state.activeEpIndex = 0
    } else {
        console.warn('Không có dữ liệu episodes hoặc link_embed.');
    }
}

export const SET_PLAYER_EP_MOVIE = (state, { data, activeEpIndex }) => {
    if (!data) return
    // console.log('click m', data, activeEpIndex)
    state.isPlayer = true;
    state.linkM3u8 = data.link_m3u8;
    state.activeEpIndex = activeEpIndex;
}

export const UPDATE_INDEX_EP = (state, index) => {
    state.activeEpIndex = index;
}

export const TOGGLE_SETTINGS_PLAYER = (state, { key }) => {
    state.settings[key] = !state.settings[key];
}

export const SET_SETTINGS_PLAYER = (state, { settings }) => {
    state.settings = settings;
}

export const GET_SETTINGS_PLAYER = (state, settings) => {
    state.settings = settings;
}


