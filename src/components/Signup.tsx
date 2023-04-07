import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [ id, setId ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ disable, setDisable ] = useState(false);
  const navigate = useNavigate();
  
  const SetValidUserInformation = () => {
    ( !id.includes("@") || password.length < 8 ?
     setDisable(true) : navigate("/signin") )
  }

  return (
    <>
      <input 
        data-testid = "email-input"
        value = { id }
        onChange={ (e) => setId(e.target.value) }
      />
      <input
        data-testid = "password-input"
        value = { password }
        onChange = { (e) => setPassword(e.target.value) }
      />
      <button 
        data-testid = "signin-button"
        onClick = { SetValidUserInformation }
        disabled = { disable }
      >
      회원 가입  
      </button>
    </>
  )
}
