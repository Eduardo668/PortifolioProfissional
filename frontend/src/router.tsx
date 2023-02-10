import { Route, Routes } from "react-router-dom";
import App from "./app";
import AdminPage from "./page/admin/admin-page";


export default function Navigation(){
    return(
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/main/admin/root/page" element={ <AdminPage /> } />
        </Routes>
    )
}