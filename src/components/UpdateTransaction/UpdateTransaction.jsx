import React, { useEffect, useState } from 'react'
import './UpdateTransaction.css'
import { motion } from "framer-motion"
import { useSelector } from 'react-redux';
import axios from 'axios'

const UpdateTransaction = ({handleClose, transactionId}) => {
    const [transaction, setTransaction] = useState({});
    const [produitAcheter, setProduitAcheter] = useState('');
    const [qte, setQte] = useState('');
    const [ca, setCa] = useState('');
    const [station, setStation] = useState('');
    const [status, setStatus] = useState('');

    const currentUser = useSelector((state) => state.user.currentUser);
    const isAdmin = currentUser?.isAdmin;
    const isSupervisor = currentUser?.isSupervisor;

    useEffect(() => {
        const getSuperviseur = async () => {
          try {
            const res = await axios.get(`https://so-petrovisionapi.onrender.com/api/transaction/find/${transactionId}`);
            setTransaction(res.data);
          } catch(err){
              console.log(err)
          }
        };
        getSuperviseur();
      }, [transactionId, transaction]);

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let updatedSupervisorData;

            if (isAdmin) {
                updatedSupervisorData = {
                    ncarnet: transaction.ncarnet,
                    dataVisite: transaction.dataVisite,
                    station,
                    ca,
                    qte,
                    produitAcheter,
                    imgCounteur:transaction.imgCounteur,
                    imgCounteurWBon:transaction.imgCounteurWBon,
                    status,
                };
            } else if (isSupervisor) {
                updatedSupervisorData = {
                    ncarnet: transaction.ncarnet,
                    dataVisite: transaction.dataVisite,
                    station,
                    ca,
                    qte,
                    produitAcheter,
                    imgCounteur:transaction.imgCounteur,
                    imgCounteurWBon:transaction.imgCounteurWBon,
                    status:transaction.status,
                };
            }
            const response = await axios.put(`https://so-petrovisionapi.onrender.com/api/transaction/${transaction._id}`, updatedSupervisorData);
            console.log('Transaction updated:', response.data);
    
            // Update the Transaction state with the updated data
            setTransaction(response.data);
    
            handleClose(); // Close the form after successful submission
        } catch (error) {
            console.error('Error updating Transaction:', error);
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
                                    <h2>Update Transaction</h2>
                                    <div className='addClientBannerForm'>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>N° carnet</label>
                                                <input type='text' placeholder={transaction.ncarnet} value={transaction.ncarnet} disabled/>
                                            </div>
                                            <div className='InputsClm1'>
                                                <label>Nom Complet</label>
                                                <input type='text' placeholder={transaction.nomComplet} value={transaction.nomComplet} disabled/>
                                            </div>
                                        </div>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>Station</label>
                                                <input type='text' placeholder={transaction.station} value={station} onChange={(e) => setStation(e.target.value)} required/>
                                            </div>
                                            <div className='InputsClm1'>
                                                <label>CA</label>
                                                <input type='number' placeholder={transaction.ca} value={ca} onChange={(e) => setCa(e.target.value)} required/>
                                            </div>
                                        </div>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>Quantity</label>
                                                <input type='text' placeholder={transaction.qte} value={qte} onChange={(e) => setQte(e.target.value)} required/>
                                            </div>
                                            <div className='InputsClm1'>
                                                <label>produitAcheter</label>
                                                <select value={produitAcheter} onChange={(e) => setProduitAcheter(e.target.value)} required>
                                                    <option value='Essence'>Essence</option>
                                                    <option value='Diesel'>Diesel</option>
                                                    <option value='Essence V POWER'>Essence V POWER</option>
                                                    <option value='Diesel V POWER'>Diesel V POWER</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>Image-Counter-Bon</label>
                                                <input type='text' placeholder={transaction.imgCounteurWBon} value={transaction.imgCounteurWBon} disabled required/>
                                            </div>
                                            {!isSupervisor && 
                                                <div className='InputsClm1'>
                                                    <label>Status</label>
                                                    <select value={status} onChange={(e) => setStatus(e.target.value)} required>
                                                        <option value='Encours'>Encours</option>
                                                        <option value='Fraud'>Fraud</option>
                                                        <option value='Verified'>Verified</option>
                                                    </select>
                                                </div>
                                            }
                                        </div>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>Image-Counter</label>
                                                <input type='text' placeholder={transaction.imgCounteur} value={transaction.imgCounteur} disabled required/>
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

export default UpdateTransaction

