import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Intro from './components/Intro/Intro'
import Login from './components/Login/Login'
import DashLandingPage from './components/DashLandPage/DashLandingPage';
import QrCodeScanner from './components/QrCodeScanner/QrCodeScanner';

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
      <Routes>
        <Route
          path="/intro"
          element={
            <>
                <Intro />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
                <DashLandingPage />
            </>
          }
        />
        <Route
          path="/qrcode"
          element={
            <>
              <QrCodeScanner/>
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login/>
            </>
          }
        />
</Routes>
    </div>
  );
}

export default App;
