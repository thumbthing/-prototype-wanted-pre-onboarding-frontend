import React, { useState } from "react";

interface FormValue {
  id: string;
  password: string;
}

export default function Login() {
  const [ id, setId ] = useState('');
  const [ password, setPassword ] = useState('');

  const CheckValidEmail = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    setId(e.target.value);
  }
  
  const CheckValidPassword = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    setPassword(e.target.value);
  }
  
  const SetValidUserInformation = () => {
    alert(id + password);
    ( !id.includes("@") ? alert("유효하지 않은 아이디입니다.") : alert("Id is valid") );
    ( password.length < 8 ? alert("비밀번호가 너무 짧습니다.") : alert("Password is valid") );
  }
  return (
    <>
      <input 
        data-testid = "email-input"
        value = { id }
        onChange={ CheckValidEmail }
      />
      <input
        data-testid = "password-input"
        value = { password }
        onChange = { CheckValidPassword }
      />
      <button 
        data-testid = "signup-button"
        onClick={ SetValidUserInformation }
      >
      회원 가입  
      </button>
  
    </>
  )
}