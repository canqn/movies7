import { reactive } from 'vue';
const state = reactive({
    isPlayer: false,
    serverData: [],
    activeEpIndex: -1,
    linkM3u8: null,
    settings: {
        autoPlay: false,
        autoNext: false,
        autoSkip: false,
        darkTheme: false
    }
});

export default state;