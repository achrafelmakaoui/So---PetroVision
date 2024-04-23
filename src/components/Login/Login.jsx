import React from 'react'
import './Login.css'
import  Sheild from '../Assets/sopetrolelg.png'
import  logo from '../Assets/login.png'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserShield, faKey, faArrowRight, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    const [passwordType, setPasswordType] = useState('password');
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


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
                    <input type="text" className='inputLg' onChange={(e) => setUsername(e.target.value)} autoComplete="username" placeholder='Entre Nom...'/>
                    <label>Nom</label>
                    <FontAwesomeIcon icon={faUserShield} className='usr'/>
                </div>
                <div className="textbox">
                    <input type={passwordType} className='inputLg' onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" placeholder='Entre Mot De Passe...'/>
                    <label>Mot De Passe</label>
                    <FontAwesomeIcon icon={faKey} className='usr'/>
                </div>
                <div className='btnbnr'>
                    <button type="submit">
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