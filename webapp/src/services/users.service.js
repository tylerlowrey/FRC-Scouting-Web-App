import { BACKEND_API_URL } from "../constants";
import axios from 'axios';

export const usersService = {
    login,
    logout,
    register
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

