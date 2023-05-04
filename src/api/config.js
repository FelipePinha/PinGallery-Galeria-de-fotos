import axios from "axios";

export const imagesFetch = axios.create({
    baseURL: "http://localhost:3000",
});
