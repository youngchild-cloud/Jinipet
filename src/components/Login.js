import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

import '../style/join_login.css'; 

function Login(props) {
  //1. 변수선언과 값 설정하기
  const [form, setForm] = useState({
    username:'',
    password:'',
  })

  const [error, setError] = useState('');
  const navigate = useNavigate(); //url주소 이동

  //2. 입력폼에 입력시 실행되는 함수
  const handleChange=(e)=>{
    setForm({ //기존 객체에 추가하여 데이터 입력
      ...form,
      [e.target.name]:e.target.value //사용자가 입력한 것을
    });
    setError(''); //에러 초기화
  }
  //3. 로그인버튼 클릭시 실행되는 함수
  const handleSubmit=(e)=>{
    e.preventDefault(); //새로고침 방지

    //백엔드 서버에 url주소 form데이터를 넘긴다.
    axios.post('https://web-jinipet-mkvwe9x45fceba4b.sel3.cloudtype.app/ginipet_login', form)
    .then(res=>{
      //jwt 토큰 저장
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', form.username); //사용자 아이디
      alert('로그인 성공 메인페이지로 이동합니다.');
      navigate('/'); //메인페이지로 이동
    })
    .catch(()=>{
      setError('로그인 실패 : 아이디 또는 비밀번호를 확인하세요.');
    });

    }

  return (
    <main>
      <section className='login'>
        <h2>로그인</h2>
        <form className="login_form" onSubmit={handleSubmit}>
          <p className='login_form1'>
            <input type="radio" id="member" name="memberGroup"/>
            <label htmlFor="member">회원</label>
            <input type="radio" id="member" name="memberGroup"/>
            <label htmlFor="nomember">비회원</label>
          </p>
          <p className='login_form2'>
            <label htmlFor="username">아이디</label>
            <input type="text" id="username" name="username" placeholder='아이디' required onChange={handleChange} value={form.username} />
          </p>
          <p className='login_form3'>
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" name="password" placeholder='비밀번호' required onChange={handleChange} value={form.password} />
          </p>
          <p className='login_form4'>
            <input type="checkbox" id="username-check" />
            <label htmlFor="username-check">아이디 저장</label>
          </p>

          <p className='login_form5'>
            <button type="submit">로그인</button>
            {/* button 회원가입 - 확장 가능한 버튼, 문자, 이미지, 아이콘, html요소 모두 사용이 가능하여 자유롭게 css로 서식이 변경가능함. 스타일 적용이 쉬워 리액트에서 주로 많이 사용함.
            input type="submit" - 내용을 단순하게 전송하기 위한 목적, 버튼안에 텍스트만 들어가며 아이콘, 이미지, 로딩바 적용이 쉽지 않음 */}
          </p>
          <p className='login_form6'> 
            <Link to="/id-search">아이디찾기</Link>&#10072;
            <Link to="/pw-search">비번찾기</Link>&#10072;
            <Link to="/join">회원가입</Link>
          </p>

          {/* 로그인 실패시  */}
          {error&&<p style={{color:'#f00'}}>{error}</p>}
        </form>
      </section>
    </main>
  );
}


export default Login;
