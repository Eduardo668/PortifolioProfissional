import { Route, Routes, useNavigate, useNavigation } from "react-router-dom";
import App from "../app";
import LoginPage from "../page/admin-login/login-page";
import AdminPage from "../page/admin/admin-page";
import { accessToken } from "../api/login";
import { useEffect, useState } from "react";
import refreshToken from "../api/refresh-token";

function NavigateToLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/main/admin/root/login");
  }, []);
  return <></>;
}

export default function Navigation() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect(()=>{
  //   async function refreshTokenRoute(){
  //      const response = await refreshToken();
  //      setLoading(false);
  //   }
  // },[])

 

  return (
    <Routes>
      <Route path="/" element={<App />} />
      { accessToken != "" ? (
        <Route path="/main/admin/root/page" element={<AdminPage />} />
      ) : (
        <Route path="/main/admin/root/page" element={<NavigateToLogin />} />
      )}

      <Route path="/main/admin/root/login" element={<LoginPage />} />
    </Routes>
  );
}
