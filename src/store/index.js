import { createStore } from 'vuex'
import state from "./state";
import * as getters from './getters';
import * as mutations from "./mutations";
import * as actions from "./actions";

import Todo from './modules/Todo';
import player from './modules/player';
import Movies from './modules/Movies';

const store = createStore({
    state,
    getters,
    mutations,
    actions,

    modules: {
        todo: Todo,
        movies: Movies,
        player
        // Import and add other modules here
    }
})

export default store