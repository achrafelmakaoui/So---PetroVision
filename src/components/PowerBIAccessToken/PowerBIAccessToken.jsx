import React, { useState } from 'react';
import axios from 'axios';
import './PowerBIAccessToken.css';
import { Navigate } from 'react-router-dom';

const PowerBIAccessToken = () => {
    const [powerbiAccessToken, setPowerBIaccessToken] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://so-petrovisionapi.onrender.com/api/accessToken', { AccessToken: powerbiAccessToken });
            console.log('Access Token saved:', response.data);
            // Optionally, clear the input field
            setPowerBIaccessToken('');
            Navigate('/');
        } catch (error) {
            console.error('Error saving access token:', error);
        }
    };

    return (
        <div className='PowerBIAccessToken'>
            <div className='headerSettingIcons'>
                <div className="bell">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                </div>
            </div>
            <div className='PowerBIAccessTokenContenet'>
                <h2>PowerBIAccessToken</h2>
                <div className='AcessTokenFormul'>
                    <form onSubmit={handleSubmit}>
                        <div className='formDiv1'>
                            <input 
                                type='text' 
                                name='powerbiAccessToken' 
                                value={powerbiAccessToken} 
                                onChange={(e) => setPowerBIaccessToken(e.target.value)} 
                                placeholder="Enter Access Token"
                                required
                            />
                        </div>
                        <div className='formDivBtn'>
                            <button className='formbtnPowerbi' type='submit'>Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PowerBIAccessToken;
