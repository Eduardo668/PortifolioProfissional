import { Route, Routes } from "react-router-dom";
import App from "./app";
import LoginPage from "./page/admin-login/login-page";
import AdminPage from "./page/admin/admin-page";


export default function Navigation(){
    return(
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/main/admin/root/page" element={ <AdminPage /> } />
            <Route path="/main/admin/root/login" element={ <LoginPage /> } />
        </Routes>
    )
}