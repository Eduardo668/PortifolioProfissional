import { Api } from "./api";

export let accessToken:string = ""; 

export function setAccessToken(access_token:string):void{
    accessToken = access_token;
}


export default async function login(username:string, password:string){

    const response = await Api.post("/login", new URLSearchParams({
        "username": username,
        "password":password
    }), {withCredentials:true} )

    setAccessToken(response.data["access_token"]);

    return response.status;

} 