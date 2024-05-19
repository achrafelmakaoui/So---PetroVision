import React from 'react'
import './Login.css'
import  Sheild from '../Assets/sopetrolelg.png'
import  logo from '../Assets/login.png'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield, faKey, faArrowRight, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../redux/apiCalls";

const Login = () => {
    const [passwordType, setPasswordType] = useState('password');
    const [cin, setCin] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching} = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { cin, password });
    };

    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setPasswordType(passwordType === 'password' ? 'text' : 'password');
    }
  return (
    <div className='Login'>
        <div className='LoginDS'>
            <div className='LoginImg'>
                <div className='imgdivsheild'>
                    <img src={Sheild} alt='sheild'/>
                </div>
                <h1>So - PetroVision</h1>
                <p>Optimisez la gestion de la fidélité client de sopetrole.<br/> Simplifiez la visualisation des données pour des performances améliorées.</p>
            </div>
        </div>
        <div className='LoginDiv'>
            <div className='LoginInfo'>
                <div className='imglg'>
                     <img src={logo} alt='logo'/>
                </div>
                <h1>Suivi de fidélité!</h1>
                <p>Bienvenue sur notre page de connexion !<br/>
                Veuillez saisir vos identifiants ci-dessous.</p>
            </div>
            <div className='LoginForm'>
            <form className="formulaire">
                <div className="textbox">
                    <input type="text" className='inputLg' onChange={(e) => setCin(e.target.value)} autoComplete="cin" placeholder='Entre Cin...'/>
                    <label>Cin</label>
                    <FontAwesomeIcon icon={faUserShield} className='usr'/>
                </div>
                <div className="textbox">
                    <input type={passwordType} className='inputLg' onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" placeholder='Entre Mot De Passe...'/>
                    <label>Mot De Passe</label>
                    <FontAwesomeIcon icon={faKey} className='usr'/>
                </div>
                <div className='btnbnr'>
                    <button type="submit" onClick={handleClick} disabled={isFetching}>
                        Se Connecter
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                    <button id='btnshowpwd' onClick={togglePasswordVisibility}>
                        {passwordType === 'password' ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}  
                    </button>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Login