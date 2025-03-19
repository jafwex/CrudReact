import Axios from "axios";

export const api = axios.create({
    baseURL: "https://67da45f535c87309f52bbd21.mockapi.io/api/hello/students"
});