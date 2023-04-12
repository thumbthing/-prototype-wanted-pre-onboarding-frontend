import axios from "axios";
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { request } from "../request/Api";

export default function Signup() {
  const [ id, setId ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ disable, setDisable ] = useState(false);
  const userForm = {
    email: id,
    password: password,
  };
  
  const navigate = useNavigate();
  
  const checkValidEmail = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    setId(e.target.value);
    if(!id.includes("@")) {
      setDisable(true)
    } else {
      setDisable(false)
    }
  }
  
  const checkValidPassword = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    setPassword(e.target.value);
    if(password.length < 8) {
      setDisable(true)
    } else {
      setDisable(false)
    }
  }


  const signUp = async () => {
    try {
      request.post("/auth/signup", userForm); 
    } catch (error) {
      console.log(error);
    }
    alert("로그인 페이지로 이동합니다.")
    navigate("/signin");
  }

  return (
    <>
    <h1>회원 가입</h1>
    <h2>아이디</h2>
      <input 
        data-testid = "email-input"
        value = { id }
        onChange={ checkValidEmail }
      />
    <h2>비밀번호</h2>
      <input
        data-testid = "password-input"
        value = { password }
        onChange = { checkValidPassword }
      />
      <button 
        data-testid = "signup-button"
        onClick = { signUp }
        disabled = { disable }
      >
      회원 가입  
      </button>
    </>
  )
}
