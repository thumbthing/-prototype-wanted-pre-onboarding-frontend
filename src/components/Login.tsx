import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [ id, setId ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ disable, setDisable ] = useState(false);
  const navigate = useNavigate();

  const CheckValidEmail = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    setId(e.target.value);
  }
  
  const CheckValidPassword = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    setPassword(e.target.value);
  }
  
  const SetValidUserInformation = () => {
    ( !id.includes("@") || password.length < 8 ? 
     setDisable(true) : navigate("/todo"))
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