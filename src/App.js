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
import NewShop from './components/newShop/NewShop';
import { useSelector } from 'react-redux';

function App() {
  // const [introComplete, setIntroComplete] = useState(false);

  const currentUser = useSelector((state) => state.user.currentUser);
  const isAdmin = currentUser?.isAdmin;
  const isSupervisor = currentUser?.isSupervisor;
  const isSupervisorShop = currentUser?.isSupervisorShoop;
  const isPompist = currentUser?.isPompist;
  const isClient = !isAdmin && !isSupervisor && !isSupervisorShop && !isPompist;
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
      {currentUser  && <Sideber/>}
      <Routes>
        {isAdmin ? 
          (
            <>
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
              <Route path="/qrcodeshop" element={<><NewShop/></>}/>
            </>
          )
          : currentUser ?
          (
            <>
              {isSupervisor && <Route path="/" element={<SuperviseurUI />} />}
              {isSupervisorShop && <Route path="/" element={<SuperviseurShopUI />} />}
              {isPompist && <Route path="/" element={<PompistUI />} />}
              {isClient && <Route path="/" element={<ClientUI />} />}
            </>
          ) : (
            <>
              <Route path="/intro" element={<><Intro /></>}/>
              <Route path="/login" element={<><Login/></>}/>
            </>
          )
        }
        <Route path='/login' element={currentUser  ? <Navigate to='/'/> : <Navigate to="/login" />} />
        <Route path='*' element={currentUser  ? <Navigate to='/'/> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
