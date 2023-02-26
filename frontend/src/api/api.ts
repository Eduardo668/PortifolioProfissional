import axios from "axios";

export const Api = axios.create(
    {
        baseURL:"https://8081-eduardo668-portifoliopr-7lrly9bx8il.ws-us88.gitpod.io"
    }
)