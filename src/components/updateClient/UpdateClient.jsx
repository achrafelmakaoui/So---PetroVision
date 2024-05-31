import React, { useEffect, useState } from 'react'
import './UpdateClient.css'
import { motion } from "framer-motion"
import axios from 'axios'

const UpdateClient = ({handleClose, clientId}) => {
    const [client, setClient] = useState({});
    const [nomComplet, setNomComplet] = useState('');
    const [telephone, setTelephone] = useState('');
    const [typeTaxi, settypeTaxi] = useState('');
    const [ncarnet, setncarnet] = useState();
    const [stationInscription, setStationInscription] = useState('');
    const [permisConfiance, setPermisConfiance] = useState();
    const [matricule, setMatricule] = useState('');
    const [numeroTaxi, setNumeroTaxi] = useState();
    const [marqueVehicule, setMarqueVehicule] = useState('');
    const [proprietaire, setProprietaire] = useState(false);
    const [freqVisiteParMois, setfreqVisiteParMois] = useState();
    const [moyenneCAVisite, setmoyenneCAVisite] = useState();
    const [totalPoints, setTotalPoints] = useState();

    

    useEffect(() => {
        const getClient = async () => {
          try {
            const res = await axios.get(`http://localhost:5000/api/sopclients/find/${clientId}`);
            setClient(res.data);
          } catch(err){
              console.log(err)
          }
        };
        getClient();
      }, [clientId,client]);

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedClientData = {
                // Assuming you have all the required form fields in state variables
                // Replace these with your actual state variables
                nomComplet: nomComplet,
                telephone: telephone,
                ncarnet: ncarnet,
                stationInscription: stationInscription,
                permisConfiance: permisConfiance,
                matricule: matricule,
                numeroTaxi: numeroTaxi,
                marqueVehicule: marqueVehicule,
                proprietaire: proprietaire,
                freqVisiteParMois: freqVisiteParMois,
                moyenneCAVisite: moyenneCAVisite,
                totalPoints: totalPoints,
            };
    
            const response = await axios.put(`http://localhost:5000/api/sopclients/${client._id}`, updatedClientData);
            console.log('Client updated:', response.data);
    
            // Update the client state with the updated data
            setClient(response.data);
    
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
                                    <h2>Update Client</h2>
                                    <div className='addClientBannerForm'>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>Nom Complet</label>
                                                <input type='text' placeholder={client.nomComplet} value={nomComplet} onChange={(e) => setNomComplet(e.target.value)} required/>
                                            </div>
                                            <div className='InputsClm1'>
                                                <label>Telephone</label>
                                                <input type='text' placeholder={client.telephone} value={telephone} onChange={(e) => setTelephone(e.target.value)} required/>
                                            </div>
                                        </div>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>ncarnet</label>
                                                <input type='number' placeholder={client.ncarnet} value={ncarnet} onChange={(e) => setncarnet(e.target.value)} required/>
                                            </div>
                                            <div className='InputsClm1'>
                                                <label>Station D'inscription</label>
                                                <input type='text' placeholder={client.stationInscription} value={stationInscription} onChange={(e) => setStationInscription(e.target.value)} required/>
                                            </div>
                                        </div>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>Permis de Confiance</label>
                                                <input type='number' placeholder={client.permisConfiance} value={permisConfiance} onChange={(e) => setPermisConfiance(parseInt(e.target.value))} required/>
                                            </div>
                                            <div className='InputsClm1'>
                                                <label>Matricule</label>
                                                <input type='text' placeholder={client.matricule} value={matricule} onChange={(e) => setMatricule(e.target.value)} required/>
                                            </div>
                                        </div>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>Numero Taxi</label>
                                                <input type='number' placeholder={client.numeroTaxi} value={numeroTaxi} onChange={(e) => setNumeroTaxi(parseInt(e.target.value))} required/>
                                            </div>
                                            <div className='InputsClm1'>
                                                <label>Marque de Vehicule</label>
                                                <input type='text' placeholder={client.marqueVehicule} value={marqueVehicule} onChange={(e) => setMarqueVehicule(e.target.value)} required/>
                                            </div>
                                        </div>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1Proprietaire'>
                                                <label>Proprietaire</label>
                                                <div className='filterClientPropBtn'>
                                                    <div className="checkbox-wrapper-1">
                                                        <input id="example-5" className="substituted" type="checkbox"  checked={proprietaire} onChange={(e) => setProprietaire(e.target.checked)}  />
                                                        <label for="example-5">Oui</label>
                                                    </div>
                                                    <div className="checkbox-wrapper-2">
                                                        <input id="example-6" className="substituted2" type="checkbox"  checked={!proprietaire} onChange={(e) => setProprietaire(e.target.checked)} />
                                                        <label for="example-6">Non</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='InputsClm1'>
                                                <label>Type Taxi</label>
                                                <select value={typeTaxi} onChange={(e) => settypeTaxi(e.target.value)}>
                                                    <option>Choisir type de taxi</option>
                                                    <option value='Petit'>Petit</option>
                                                    <option value='Grand'>Grand</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>Visite Par Mois</label>
                                                <input type='number' placeholder={client.freqVisiteParMois}  value={freqVisiteParMois} onChange={(e) => setfreqVisiteParMois(parseInt(e.target.value))} required/>
                                            </div>
                                            <div className='InputsClm1'>
                                                <label>CA / Visite</label>
                                                <input type='number' placeholder={client.moyenneCAVisite} value={moyenneCAVisite} onChange={(e) => setmoyenneCAVisite(parseInt(e.target.value))} required/>
                                            </div>
                                        </div>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>Total Points</label>
                                                <input type='number' placeholder={client.totalPoints} value={totalPoints} onChange={(e) => setTotalPoints(parseInt(e.target.value))} required/>
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

export default UpdateClient

