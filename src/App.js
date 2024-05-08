import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Intro from './components/Intro/Intro'
import Login from './components/Login/Login'
import DashLandingPage from './components/DashLandPage/DashLandingPage';
import QrCodeScanner from './components/QrCodeScanner/QrCodeScanner';
import Sideber from './components/Sidebar/Sidebar';
import './App.css'
import ClientUI from './components/ClientUI/ClientUI';
import SuperviseurUI from './components/SuperviseurUI/SuperviseurUI';
import SuperviseurShopUI from './components/SuperviseurShopUI/SuperviseurShopUI';
import PompistUI from './components/PompistUI/PompistUI';
import TransactionUI from './components/TransactionUI/TransactionUI';
import ShopUI from './components/ShopUI/ShopUI';
import SettingUI from './components/SettingUI/SettingUI';
function App() {
  // const [introComplete, setIntroComplete] = useState(false);


  // useEffect(() => {
  //   const hasSeenIntro = localStorage.getItem('hasSeenIntro');
  //   if (hasSeenIntro) {
  //     setIntroComplete(true);
  //   } else {
  //     setTimeout(() => {
  //       setIntroComplete(true);
  //       localStorage.setItem('hasSeenIntro', 'true');
  //     }, 7000);
  //   }
  // }, []);
  return (
    <div className="App">
      <Sideber/>
      <Routes>
        <Route path="/" element={<><DashLandingPage/></>}/>
        <Route path="/client" element={<><ClientUI/></>}/>
        <Route path="/superviseur" element={<><SuperviseurUI/></>}/>
        <Route path="/SuperviseurShop" element={<><SuperviseurShopUI/></>}/>
        <Route path="/pompist" element={<><PompistUI/></>}/>
        <Route path="/transaction" element={<><TransactionUI/></>}/>
        <Route path="/shop" element={<><ShopUI/></>}/>
        <Route path="/Setting" element={<><SettingUI/></>}/>
        <Route path="/intro" element={<><Intro /></>}/>
        <Route path="/qrcode" element={<><QrCodeScanner/></>}/>
        <Route path="/login" element={<><Login/></>}/>
      </Routes>
    </div>
  );
}

export default App;
