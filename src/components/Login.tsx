import React, { useState } from "react";

interface FormValue {
  id: string;
  password: string;
}

export default function Login() {
  const [ id, setId ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ disable, setDisable ] = useState(false);

  const CheckValidEmail = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    setId(e.target.value);
  }
  
  const CheckValidPassword = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    setPassword(e.target.value);
  }
  
  const SetValidUserInformation = () => {
    
    ( !id.includes("@") ? alert(id + ": 유효하지 않은 아이디입니다.") : alert("Id is valid") );
    ( password.length < 8 ? alert(password +": 비밀번호가 너무 짧습니다.") : alert("Password is valid") );

    ( !id.includes("@") || password.length < 8 ? 
     setDisable(true) : alert("api 연결이 필요합니다."))
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
        data-testid = "signin-button"
        onClick = { SetValidUserInformation }
        disabled = { disable }
      >
      로그인  
      </button>
    </>
  )
}