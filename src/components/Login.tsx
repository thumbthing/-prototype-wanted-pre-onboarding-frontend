import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { request } from "../request/Api";

export default function Login() {
  const [ id, setId ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ disable, setDisable ] = useState(false);
  const userForm = {
    email: id,
    password: password,
  };
  const navigate = useNavigate();

  const CheckValidEmail = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    setId(e.target.value);
    if (id.includes("@") && password.length > 8) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }
  
  const CheckValidPassword = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    setPassword(e.target.value);
    if (id.includes("@") && password.length > 8) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }

  const signIn = async () => {
    if (!id.includes("@") || password.length < 8) {
      return setDisable(true)
    } else {
      try {
      request.post("/auth/signin", userForm).then( response => {
        const { accessToken } = response.data;
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      }); 
    } catch (error) {
      console.log(error);
    }
    alert("로그인 페이지로 이동합니다.")
    navigate("/todo");
    }     
  }

  return (
    <>
    <h1>로그인</h1>
    <h2>아이디</h2>
      <input 
        data-testid = "email-input"
        type="email"
        value = { id }
        onChange={ CheckValidEmail }
      />
      <h2>비밀번호</h2>
      <input
        data-testid = "password-input"
        type="password"
        value = { password }
        onChange = { CheckValidPassword }
      />
      <button 
        data-testid = "signin-button"
        onClick = { signIn }
        disabled = { disable }
      >
      로그인  
      </button>
    </>
  )
}