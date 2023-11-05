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
    const handleWithoutLogin=()=>{
      //로그인없이 접속 로직
    }
  
  
    return (
      <div className="login">
        <img className='logo1' src={`${process.env.PUBLIC_URL}/assets/Union.svg`} alt="" />
        <img className='logo2' src={`${process.env.PUBLIC_URL}/assets/로고_1.svg`} alt="" />
        <p className='paragraph'>날씨별 옷차림이 고민되는 당신에게</p>
        <p className="findId" onClick={handleFindId}>아이디 / 비밀번호 찾기</p>
      
        <form onSubmit={handleLogin} className="form">
          <input type="id" value={id} onChange={(e) => setid(e.target.value)} placeholder="아이디" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" />
          <button type="submit">로그인</button>
          <button type="register" onClick={handleRegister}>회원가입하기</button>
          <p className='nologin' onClick={handleWithoutLogin}>회원가입 없이 둘러보기</p>
        </form>
      </div>
    );
  }
  
  export default Login;