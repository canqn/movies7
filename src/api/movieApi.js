import axiosClient from "./axiosClient";

const movieApi = {
    get(id) {
        const url = `/phim/${id}`;
        return axiosClient.get(url);
    },

    getAll(page, params = {}) {
        const url = `/danh-sach/phim-moi-cap-nhat?page=${page}`;
        return axiosClient.get(url, params);
    }
}

export default movieApi;