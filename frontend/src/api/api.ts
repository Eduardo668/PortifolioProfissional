import axios from "axios";

export const Api = axios.create(
    {
        baseURL:"https://portifolio-profissional-api.fly.dev"
    }
)