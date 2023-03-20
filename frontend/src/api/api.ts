import axios from "axios";

export const Api = axios.create(
    {
        baseURL:"https://ec2-18-228-26-91.sa-east-1.compute.amazonaws.com"
    }
)