import axiosClient from "./axiosClient";
import axios from 'axios';
const API_URL = 'http://localhost:5100/todolist';

const todosApi = {
    async getAll() {
        try {
            const res = await fetch(API_URL);

            const data = await res.json();

            return data;
        } catch (error) {
            throw new Error('Failed to fetch todos');
        }
    },
    async get(id) {
        try {
            const res = await axios.get(`${API_URL}/${id}`);
            return res;
        } catch (error) {
            throw new Error('Failed to get todo');
        }
    },
    async add(todo) {
        try {
            const response = await axios.post(`${API_URL}`, todo);
            return response;
        } catch (error) {
            throw new Error('Failed to add todo');
        }
    },
    async update(id, todo) {
        const url = `${API_URL}/${id}`;
        return axios.put(url, todo);
    },

    async del(id) {
        try {
            const res = await axios.delete(`${API_URL}/${id}`);
            return res;
        } catch (error) {
            throw new Error('Failed to remove todo');
        }
    },

}

export default todosApi;