// auth.js
// store/modules/todos.js
import { reactive } from 'vue';
import todosApi from '../../../api/todosApi';

const state = reactive({
    todos: [],
    todo: {}
});


const mutations = {
    SET_ALL_TODO(todos) {
        state.todos = todos;
        console.log('mutations', state.todos)
    },
    GET_TODO(id) {
        console.log('todo', state.todos, id)
        const findTodo = state.todos.find(todo => todo.id === id);
        state.todo = findTodo
        console.log(state.todo);
    },

    ADD_TODO(todo) {
        state.todos = [...state.todos, todo]
    },
    UPDATE_TODO(todo) {
        state.todos = state.todos.map(item => {
            if (item.id === todo.id) {
                return { ...item, name: todo.name };
            }
            return item;
        })
    },
    REMOVE_TODO(id) {
        state.todos = state.todos.filter(todo => todo.id !== id);
        // state.todos.filter(todos => todos.id !== id);
        console.log('matation', state.todos)


    }
};

const actions = {
    async fetchTodos() {
        try {
            const todos = await todosApi.getAll();
            console.log(todos)
            mutations.SET_ALL_TODO(todos)
        } catch (error) {
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

    async addTodo({ dispatch, commit }, { todo }) {
        try {
            const { status } = await todosApi.add(todo)
            console.log(status, todo);
            if (status === 201) {
                commit('ADD_TODO', todo)
                await dispatch('fetchTodos')
            }
        } catch (error) {
            console.error(error);
        }
    },
    async updateTodo({ dispatch, commit }, { id, itemUpdate }) {
        try {
            const { status } = await todosApi.update(id, itemUpdate)
            console.log(status, itemUpdate);
            if (status === 200) {
                commit('UPDATE_TODO', itemUpdate)
                await dispatch('fetchTodos')
            }
        } catch (error) {
            console.error(error);
        }
    },

    async removeTodo({ dispatch, commit }, { id }) {
        try {
            console.log('store', id);
            const res = await todosApi.del(id);
            console.log(res);

            if (res.status === 200) {
                commit('REMOVE_TODO', id);
                await dispatch('fetchTodos')
            } else {
                alert('Error deleting task', res.status);
            }

        } catch (error) {
            console.error(error);
        }
    },
};


const getters = {
    getAllTodo: state => state.todos,
    getTodo: state => state.todo

};

export default {
    state,
    getters,
    mutations,
    actions
};