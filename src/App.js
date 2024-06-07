import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
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
import { useSelector, useDispatch } from 'react-redux';
import AddTransactionPompist from './components/AddTransactionPompist/AddTransactionPompist';
import AddShopSuperviseurShop from './components/AddShopSuperviseurShop/AddShopSuperviseurShop';
import { logout } from './components/redux/userRedux';
import PowerBIAccessToken from './components/PowerBIAccessToken/PowerBIAccessToken';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  const currentUser = useSelector((state) => state.user.currentUser);
  const isAdmin = currentUser?.isAdmin;
  const isSupervisor = currentUser?.isSupervisor;
  const isSupervisorShop = currentUser?.isSupervisorShoop;
  const isPompist = currentUser?.isPompist;
  const isClient = !isAdmin && !isSupervisor && !isSupervisorShop && !isPompist;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser && introComplete) {
      navigate('/login');
    } else if (!currentUser && !introComplete) {
      navigate('/intro');
    }
  }, [currentUser, introComplete, navigate]);

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
    setIntroComplete(false);
    navigate('/intro');
  };

  return (
    <div className="App">
      {currentUser && (isAdmin || isSupervisor || isSupervisorShop) && <Sideber onLogout={handleLogout} />}
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
              <Route path="/intro" element={<Intro onComplete={() => setIntroComplete(true)} />}/>
              <Route path="/qrcode" element={<><QrCodeScanner/></>}/>
              <Route path="/qrcodeshop" element={<><NewShop/></>}/>
              <Route path="/PowerBIAccessToken" element={<><PowerBIAccessToken/></>}/>
            </>
          )
          : currentUser ?
          (
            <>
              {isSupervisor && 
                <>
                  <Route path="/" element={<SuperviseurUI />} />
                  <Route path="/transaction" element={<><TransactionUI/></>}/>
                  <Route path="/Setting" element={<><SettingUI/></>}/>
                  <Route path="/pompist" element={<><PompistUI/></>}/>
                  <Route path="/client" element={<><ClientUI/></>}/>
                </>
              }
              {isSupervisorShop && 
                <>
                  <Route path="/" element={<SuperviseurShopUI />} />
                  <Route path="/Setting" element={<><SettingUI/></>}/>
                  <Route path="/Addshop" element={<><AddShopSuperviseurShop/></>}/>
                  <Route path="/shop" element={<><ShopUI/></>}/>
                </>
              }
              {isPompist && 
                <>
                  <Route path="/" element={<PompistUI />}/>
                  <Route path="/Setting" element={<><SettingUI/></>}/>
                  <Route path="/addTransaction" element={<><AddTransactionPompist/></>}/>
                </>
              }
              {isClient && <><Route path="/" element={<ClientUI />} /><Route path="/Setting" element={<><SettingUI/></>}/></> }
            </>
          ) : (
            <>
              <Route path="/intro" element={<><Intro onComplete={() => setIntroComplete(true)}/></>}/>
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
