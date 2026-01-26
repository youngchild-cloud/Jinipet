import React from 'react';

function Footer(props) {
  return (
    <footer>
        <h2>공지사항</h2>
      <div className='footer-inner'>

        <ul className='footer-ul1'>
          <li>개인정보처리방침</li>
          <li>쇼핑몰약관</li>
          <li><img src={`${process.env.PUBLIC_URL}/images/footer_sns_2.gif`} alt="인스타로고" /></li>
        </ul>

        <ul className='footer-ul2'>
          <li>고객센터</li>
          <li>02-2166-7770</li>
          <li>평일 10:00 ~ 17:00</li>
          <li>(점심: 12:00 ~ 13:00)</li>
          <li>지니펫 사업자 정보 확인 <img src={`${process.env.PUBLIC_URL}/images/iconArrow_bottom.png`} alt="전체보기" /></li>

        </ul>

      </div>
    </footer>
  );
}

export default Footer;