import axios from "axios";

export const api = axios.create({
    baseURL : "http://172.30.64.1:3000/"
});