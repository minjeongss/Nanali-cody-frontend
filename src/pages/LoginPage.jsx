import React, {useState} from 'react';
import '../styles/LoginPage.css';

function Login() {
    const [id, setid] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (event) => {
      event.preventDefault();
      // 로그인 로직을 여기에 작성하세요.
    };
  
    const handleRegister = () => {
      // 회원가입 로직을 여기에 작성하세요.
    };
    const handleFindId = () => {
      // 아이디 / 비밀번호 찾기 로직을 여기에 작성하세요.
    };
  
  
    return (
      <div className="login">
        <h1>LOGO</h1>
        <p>날씨별 옷차림이 고민되는 당신에게</p>
        <button type="findId" onClick={handleFindId}>아이디 / 비밀번호 찾기</button>
      
        <form onSubmit={handleLogin} className="form">
          <input type="id" value={id} onChange={(e) => setid(e.target.value)} placeholder="아이디" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" />
          <button type="submit">로그인</button>
          <button type="register" onClick={handleRegister}>회원가입하기</button>
        </form>
      </div>
    );
  }
  
  export default Login;