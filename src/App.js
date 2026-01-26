import './style/reset.css' //초기화
import './style/common.css' // 공통 서식,변수
import './style/layout.css' //레이아웃

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './layout/Header' //헤더
import Footer from './layout/Footer' //푸터
import Main from './components/Main' //메인
import Info from './components/Info' //인포
import Intro from './components/Intro' //인트로
import Event from './components/Event' //이벤트
import Customer from './components/Customer' //커스터머
import Login from './components/Login' //로그인
import Join from './components/Join' //조인
import Cart from './components/Cart' //카트
import Order from './components/Order' //오더

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />

      {/* sub콤포넌트 목록 */}
      <Routes>
      <Route path='/' element={<Main />} /> 
      <Route path='/info' element={<Info />} /> 
      <Route path='/intro' element={<Intro />} /> 
      <Route path='/event' element={<Event />} /> 
      <Route path='/customer' element={<Customer />} /> 
      <Route path='/login' element={<Login />} /> 
      <Route path='/join' element={<Join />} /> 
      <Route path='/cart' element={<Cart />} /> 
      <Route path='/order' element={<Order />} /> 
      </Routes>

      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
