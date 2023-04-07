
export default function Login() {

  return (
    <div>
      <h2> 아이디 </h2>
      <input data-testid="email-input" />
      <h2> 비밀번호 </h2>
      <input data-testid="password-input" />
      <div>
        <button data-testid="signin-button" placeholder="로그인" onClick={() => alert("로그인")} />
        <button data-testid="signup-button" placeholder="회원가입" onClick={() => alert("회원 가입")} />
      </div>
    </div>
  )
}