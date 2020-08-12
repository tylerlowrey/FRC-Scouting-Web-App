import { BACKEND_API_URL } from "../constants";
import axios from 'axios';

export const usersService = {
    login,
    logout,
    register,
    getUser
};

function login(username, password) {
    return axios.post(`${BACKEND_API_URL}/login`, {
        username,
        password,
    });
}

function logout() {

}

function register(username, password) {

}

function getUser(id) {
    axios.get(`${BACKEND_API_URL}/users/${id}`)
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.log(error);
            return -1;
        })
}

