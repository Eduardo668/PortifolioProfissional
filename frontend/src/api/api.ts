import axios from "axios";

export const Api = axios.create(
    {
        baseURL:"https://ec2-18-228-12-130.sa-east-1.compute.amazonaws.com"
    }
)
