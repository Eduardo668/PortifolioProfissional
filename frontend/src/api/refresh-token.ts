import { Api } from "./api";
import { setAccessToken } from "./login";

export default async function refreshToken(){

    const response = await Api.get("/api/admin/token/refresh",{
        withCredentials:true,
        
        
    })
    setAccessToken(response.data["access_token"]);

}