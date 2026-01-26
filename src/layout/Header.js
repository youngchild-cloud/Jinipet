import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header(props) {
  //1. 상태변경함수
  const [menuOpen, setMenuOpen] = useState(false);
  //로컬저장소에 있는 아디값을 변수에 저장
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  //로그아웃 버튼 클릭시 실행되는 함수
  const handleLogout=()=>{
    localStorage.removeItem('token'); //기존 데이터 삭제
    localStorage.removeItem('username'); //사용자 아이디 데이터 삭제
    navigate('/login'); //로그인 페이지 이동하기
    window.location.reload(); //상태 갱신을 위해서 새로고침(선택)
  }
  return (
    <header className='header'>

      <h1>
        <Link to="/" title="메인페이지로 바로가기">
          <img src={`${process.env.PUBLIC_URL}/images/logo_clr.png`} alt="상단로고" />
        </Link>
      </h1>

      <button className='toggle_btn' onClick={() => setMenuOpen(true)}>
        <img src={`${process.env.PUBLIC_URL}/images/topIcon_burger.png`} alt="전체메뉴" />
      </button>

      <Link to="/cart" title="장바구니" className="cart_btn">
        <img src={`${process.env.PUBLIC_URL}/images/topIcon_cart.png`} alt="장바구니" />
      </Link>

      {/* 모바일 내비게이션 */}
      <nav className='navi'
        style={{ left: menuOpen ? '0%' : '-100%' }}
        onClick={(e) => {
          if (e.target.closest('a')) setMenuOpen(false);
        }}
      >
        <button className="close_btn" onClick={() => setMenuOpen(false)}>
          <img src={`${process.env.PUBLIC_URL}/images/btn_close.png`} alt="닫기" />
        </button>

        <ul className='gnb'>
          <li className='member_info'><b>{username}</b>{username&&'님 환영합니다.'}</li>
          <li><Link to='/'>지니펫 쇼핑몰</Link></li>
          <li><Link to='/intro'>브랜드 소개</Link></li>
          <li><Link to='/info'>반려견 정보</Link></li>
          <li><Link to='/event'>이벤트</Link></li>
          <li><Link to='/customer'>고객지원</Link></li>
        </ul>

        {/* 삼항조건연산자 => 조건식?참인값:거짓인값; */}
        {username?(
        <ul className='form_navi'>
          <li><Link to='/' onClick={handleLogout}>로그아웃</Link></li>
          <li><Link to='/join'>회원가입</Link></li>
          <li><Link to='/order'>주문조회</Link></li>
          <li><Link to='/cart'>장바구니</Link></li>
          </ul>
          ):(
          <ul className="form_navi">
            <li><Link to='/login'>로그인</Link></li>
            <li><Link to='/join'>회원가입</Link></li>
            <li><Link to='/order'>주문조회</Link></li>
            <li><Link to='/cart'>장바구니</Link></li>
          </ul>
          )}

        

      </nav>
    </header>
  );
}

export default Header;