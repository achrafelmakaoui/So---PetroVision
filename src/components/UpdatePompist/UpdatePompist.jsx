import React, { useEffect, useState } from 'react'
import './UpdatePompist.css'
import { motion } from "framer-motion"
import axios from 'axios'

const UpdatePompist = ({handleClose, pompistId}) => {
    const [pompist, setPompist] = useState({});
    const [email, setEmail] = useState('');
    const [nomComplet, setNomComplet] = useState('');
    const [telephone, setTelephone] = useState('');
    const [cin, setCin] = useState('');
    const [password, setPassword] = useState('');
    const [stationActuel, setStationActuel] = useState('');
    const [shift, setShift] = useState('');

    

    useEffect(() => {
        const getPompist = async () => {
          try {
            const res = await axios.get(`https://so-petrovisionapi.onrender.com/api/users/find/${pompistId}`);
            setPompist(res.data);
          } catch(err){
              console.log(err)
          }
        };
        getPompist();
      }, [pompistId,pompist]);

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedPompistData = {
                // Assuming you have all the required form fields in state variables
                // Replace these with your actual state variables
                email,
                nomComplet,
                telephone,
                cin,
                password,
                stationActuel,
                shift,
                isPompist: true
    
            };
    
            const response = await axios.put(`https://so-petrovisionapi.onrender.com/api/users/${pompist._id}`, updatedPompistData);
            console.log('Client updated:', response.data);
    
            // Update the client state with the updated data
            setPompist(response.data);
    
            handleClose(); // Close the form after successful submission
        } catch (error) {
            console.error('Error updating client:', error);
        }
    };

  return (
        <div className='UpdateClientDiv'>
            <motion.div
                className="UpdateClientAlert"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{type: "spring", stiffness: 260, damping: 20}}
            >
                <div className='bannerUpdateClient'>
                    <div className='contentUpdateClient'>
                            <form onSubmit={handleSubmit}>
                                <div className='contentUpdateClientKey'>
                                    <h2>Update Pompist</h2>
                                    <div className='addClientBannerForm'>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>Email Address</label>
                                                <input type='email' placeholder={pompist.email} value={email}  onChange={(e) => setEmail(e.target.value)} required/>
                                            </div>
                                            <div className='InputsClm1'>
                                                <label>Nom Complet</label>
                                                <input type='text' placeholder={pompist.nomComplet} value={nomComplet} onChange={(e) => setNomComplet(e.target.value)} required/>
                                            </div>
                                        </div>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>Telephone</label>
                                                <input type='text' placeholder={pompist.telephone} value={telephone} onChange={(e) => setTelephone(e.target.value)} required/>
                                            </div>
                                            <div className='InputsClm1'>
                                                <label>Cin</label>
                                                <input type='text' placeholder={pompist.cin} value={cin} onChange={(e) => setCin(e.target.value)} required/>
                                            </div>
                                        </div>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>Station Actuel</label>
                                                <input type='text' placeholder={pompist.stationActuel} value={stationActuel} onChange={(e) => setStationActuel(e.target.value)} required/>
                                            </div>
                                            <div className='InputsClm1'>
                                                <label>Shift</label>
                                                <input type='text' placeholder={pompist.shift} value={shift} onChange={(e) => setShift(e.target.value)} required/>
                                            </div>
                                        </div>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>Password</label>
                                                <input type='password' placeholder={pompist.password} value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='btnSubmit'>
                                        <button type="submit">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                            </svg>
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </form>
                    </div>
                    <div className='CloseIcon'>
                        <svg onClick={handleClose} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>    
                    </div>
                </div>
            </motion.div>
        </div>
  )
}

export default UpdatePompist

