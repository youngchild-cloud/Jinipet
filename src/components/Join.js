import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../style/join_login.css'


function Join(props) {
  //1. 변수선언
  const [form, setForm] = useState({
    username: '',
    password: '',
    password2: '',
    email: '',
    tel: ''
  })

  //회원가입이 실패하는 경우가 있다면 에러출력하기
  const [message, setMessage] = useState('');
  const [error, setError] = useState('false');

  //2. input 입력한 값 저장하기
  const handleChange = (e) => {
    setForm({
      ...form, //기존 폼데이터에 이어서 저장
      [e.target.name]: e.target.value //사용자가 입력한 데이터를 각각 저장
    })

    //데이터값 없는 경우
    setMessage('');//에러 초기화
  }

  //3. url 주소 관리 = 페이지 이동
  const navigate = useNavigate();

  //4. 아이디 중복체크 기능
  const checkUsername = () => {
    axios.post('http://localhost:9070/check-username', {
      username: form.username
    })
      .then(res => {
        if (res.data.exists) {
          setMessage('이미 사용중인 아이디입니다.');
          setError(true);
        } else {
          setMessage('사용 가능한 아이디입니다.');
          setError(false);
        }
      });
  };

  //5. 회원가입 버튼 클릭시 해당 값들을 서버측으로 전송함
  const handleSubmit = (e) => {
    //사용자가 입력한 data를 backend서버에 post방식으로 전송
    e.preventDefault(); //새로고침 방지

    //비밀번호, 비밀번호확인 일치하는지 확인
    if (form.password !== form.password2) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    //비밀번호가 일치하면 서버측으로 내용을 전송
    axios.post('https://web-jinipet-mkvwe9x45fceba4b.sel3.cloudtype.app/ginipet_register', form)
      .then(() => { //전송성공시
        alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
        navigate('/login');//로그인 경로주소
      })
      .catch(err => { //실패시
        console.log(err); //콘솔모드에 에러출력하고
        setError('회원가입 실패 : 아이디가 이미 존재하거나 서버 오류입니다.');
      })
  }

  return (
    <main>
      <section className='join'>
        <h2>회원가입</h2>
        <form className='join_form' onSubmit={handleSubmit}>
          <p className='join_form1'>
            <label htmlFor="username">아이디 : </label>
            <input type="text" id="username" name="username" placeholder="아이디 입력" required
              value={form.username} onChange={handleChange}
            />
            <button type="button" onClick={checkUsername}>중복확인</button>
          </p>
          <p className='join_form2'>
            <label htmlFor="password">비밀번호 : </label>
            <input type="password" id="password" name="password" placeholder="비밀번호 입력" required
              value={form.password} onChange={handleChange}
            />
          </p>
          <p className='join_form3'>
            <label htmlFor="password2">비밀번호 확인 : </label>
            <input type="password" id="password2" name="password2" placeholder="비밀번호 재확인" required
              value={form.password2} onChange={handleChange}
            />
          </p>
          <p className='join_form4'>
            <label htmlFor="email">이메일 주소 : </label>
            <input type="email" id="email" name="email" placeholder="이메일을 입력하세요" required
              value={form.email} onChange={handleChange}
            />
          </p>
          <p className='join_form5'>
            <label htmlFor="tel">전화번호 : </label>
            <input type="tel" id="tel" name="tel" placeholder="전화번호를 입력하세요 (- 를 제외하고 입력)" required
              value={form.tel} onChange={handleChange}
            />
          </p>
          <p className='join_form6'>
            <input type="checkbox" required id="agree" />
            <label htmlFor="agree">이용약관, 개인정보 수집 및 이용, 마케팅 활용 선택에 모두 동의합니다.</label>
          </p>
          <p className='join_form7'><button type="submit">회원가입</button></p>

          {/* 회원가입이 실패하면 나오는 문구 */}
          {error ? <p style={{ color: "#f00" }}>{message}</p> : <p style={{ color: '#0f0' }}>{message}</p>}
          {/* 조건부 랜더링 변수명&&참인값 */}
          {/* 삼항조건연산자 변수값?참인값;거짓인값 */}
          {/* 사용가능한 id는 초록색, 사용불가능한 아이디는 빨간색 */}

        </form>

      </section>
    </main>
  );
}


export default Join;

