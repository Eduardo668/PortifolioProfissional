import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import login from "../../api/login";
import { Title } from "../../global/GlobalStyle";
import { FormContainer, PageContainer } from "./style";

export default function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const { mutate: loginMutation, isError } = useMutation(() =>
    login(username, password), {
      onSuccess: ()=> navigate("/main/admin/root/page")
    }
  );

 

  const handleUsername = (username: string) => {
    setUsername(username);
  };
  const handlePassword = (password: string) => {
    setPassword(password);
  };

  return (
    <PageContainer>
      <FormContainer>
        <div className="div-title">
          <Title theme={{ color: "white", font_size: "3em" }}>Login</Title>
        </div>
        <div className="div-form">
          <div className="input-div">
            <label htmlFor="">Username</label>
            <input onChange={(e)=>handleUsername(e.target.value)} type="text" className="input-text" />
          </div>
          <div className="input-div">
            <label htmlFor="">Password</label>
            <input onChange={(e)=>handlePassword(e.target.value)} type="password" className="input-text" />
            { isError ? <span>Username or Password Incorrect, try again!</span> : null }
          </div>
          <div className="btn-div">
            <button onClick={()=>loginMutation()} >Login</button>
          </div>
        </div>
      </FormContainer>
    </PageContainer>
  );
}
