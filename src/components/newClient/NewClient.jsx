import React, { useState } from 'react'
import './NewClient.css'
import { motion } from "framer-motion"
import axios from 'axios'

const NewClient = ({handleClose}) => {
    const [selectedIcon, setSelectedIcon] = useState('keyboard');
    const [nomComplet, setNomComplet] = useState('');
    const [telephone, setTelephone] = useState('');
    const [ncarnet, setNcarnet] = useState();
    const [typeTaxi, setTypeTaxi] = useState('');
    const [stationInscription, setStationInscription] = useState('');
    const [permisConfiance, setPermisConfiance] = useState(0);
    const [matricule, setMatricule] = useState('');
    const [numeroTaxi, setNumeroTaxi] = useState(0);
    const [marqueVehicule, setMarqueVehicule] = useState('');
    const [proprietaire, setProprietaire] = useState(false);
    const [freqVisiteParMois, setfreqVisiteParMois] = useState(0);
    const [moyenneCAVisite, setmoyenneCAVisite] = useState(0);
    const [totalPoints, setTotalPoints] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = {
                nomComplet,
                telephone,
                ncarnet,
                stationInscription,
                permisConfiance,
                matricule,
                numeroTaxi,
                marqueVehicule,
                typeTaxi,
                proprietaire,
                freqVisiteParMois,
                moyenneCAVisite,
                totalPoints,
            };
            const response = await axios.post('https://so-petrovisionapi.onrender.com//api/sopclients/', formData);
            console.log('Client added:', response.data);
            handleClose(); // Close the form after successful submission
        } catch (error) {
            console.error('Error adding client:', error);
        }
    };
    const HandelKeyBordClick = () => {
        setSelectedIcon('keyboard');
    }

    const HandelByFileClick = () => {
        setSelectedIcon('file');
    }
    const [AlertErr,setAlertErr]=useState(false)
    const [AlertSucc,setAlertSucc]=useState(false)
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    };
    const handleSubmitFile = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
        console.log("Please select a file.");
        setAlertSucc(false)
        setAlertErr(true)
        return;
    }
    const formData = new FormData();
    formData.append("file", selectedFile, selectedFile.name);
    try {
        const response = await fetch("https://so-petrovisionapi.onrender.com//api/sopclients/upload", {
        method: "POST",
        body: formData,
        });
        if (!response.ok) {
        throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data);
        setAlertErr(false)
        setAlertSucc(true)
    } catch (err) {
        console.error(err);
    }
    };

  return (
        <div className='NewClientDiv'>
            <motion.div
                className="NewClientAlert"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{type: "spring", stiffness: 260, damping: 20}}
            >
                <div className='bannerNewClient'>
                    <div className='IconsSection'>
                        <div className={`IconSectionFirst ${selectedIcon === 'keyboard' ? '' : 'selected'}`} onClick={HandelKeyBordClick}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-type">
                                <polyline points="4 7 4 4 20 4 20 7"></polyline>
                                <line x1="9" y1="20" x2="15" y2="20"></line>
                                <line x1="12" y1="4" x2="12" y2="20"></line>
                            </svg>
                        </div>
                        <div className={`IconSectionSecond ${selectedIcon === 'file' ? '' : 'selected'}`} onClick={HandelByFileClick}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-plus">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="12" y1="18" x2="12" y2="12"></line>
                                <line x1="9" y1="15" x2="15" y2="15"></line>
                            </svg>
                        </div>
                    </div>
                    <div className='contentNewClient'>
                        {selectedIcon === 'keyboard' && 
                            <>
                            <form onSubmit={handleSubmit}>
                                <div className='contentNewClientKey'>
                                    <h2>Add Client</h2>
                                    <div className='addClientBannerForm'>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>Nom Complet</label>
                                                <input type='text' placeholder='Entrer nom complet' value={nomComplet} onChange={(e) => setNomComplet(e.target.value)} required/>
                                            </div>
                                            <div className='InputsClm1'>
                                                <label>Telephone</label>
                                                <input type='text' placeholder='Entrer telephone' value={telephone} onChange={(e) => setTelephone(e.target.value)} required/>
                                            </div>
                                        </div>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>N° carnet</label>
                                                <input type='number' placeholder='Entrer N° carnet' value={ncarnet} onChange={(e) => setNcarnet(e.target.value)} required/>
                                            </div>
                                            <div className='InputsClm1'>
                                                <label>Station D'inscription</label>
                                                <input type='text' placeholder="Entrer station d'inscription" value={stationInscription} onChange={(e) => setStationInscription(e.target.value)} required/>
                                            </div>
                                        </div>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>Permis de Confiance</label>
                                                <input type='number' placeholder='Entrer permis de confiance' value={permisConfiance} onChange={(e) => setPermisConfiance(parseInt(e.target.value))} required/>
                                            </div>
                                            <div className='InputsClm1'>
                                                <label>Matricule</label>
                                                <input type='text' placeholder='Entrer matricule' value={matricule} onChange={(e) => setMatricule(e.target.value)} required/>
                                            </div>
                                        </div>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>Numero Taxi</label>
                                                <input type='number' placeholder='Entrer numero taxi' value={numeroTaxi} onChange={(e) => setNumeroTaxi(parseInt(e.target.value))} required/>
                                            </div>
                                            <div className='InputsClm1'>
                                                <label>Marque de Vehicule</label>
                                                <input type='text' placeholder='Entrer marque de vehicule' value={marqueVehicule} onChange={(e) => setMarqueVehicule(e.target.value)} required/>
                                            </div>
                                        </div>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>Type Taxi</label>
                                                <select value={typeTaxi} onChange={(e) => setTypeTaxi(e.target.value)}>
                                                    <option>Choisir type de taxi</option>
                                                    <option value='Petit'>Petit</option>
                                                    <option value='Grand'>Grand</option>
                                                </select>
                                            </div>
                                            <div className='InputsClm1Proprietaire'>
                                                <label>Proprietaire</label>
                                                <div className='filterClientPropBtn'>
                                                    <div className="checkbox-wrapper-1">
                                                        <input id="example-3" className="substituted" type="checkbox"  checked={proprietaire} onChange={(e) => setProprietaire(e.target.checked)} />
                                                        <label for="example-3">Oui</label>
                                                    </div>
                                                    <div className="checkbox-wrapper-2">
                                                        <input id="example-4" className="substituted2" type="checkbox"  checked={!proprietaire} onChange={(e) => setProprietaire(!e.target.checked)} />
                                                        <label for="example-4">Non</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>Visite Par Mois</label>
                                                <input type='number' value={freqVisiteParMois} onChange={(e) => setfreqVisiteParMois(parseInt(e.target.value))} required/>
                                            </div>
                                            <div className='InputsClm1'>
                                                <label>CA / Visite</label>
                                                <input type='number' value={moyenneCAVisite} onChange={(e) => setmoyenneCAVisite(parseInt(e.target.value))} required/>
                                            </div>
                                        </div>
                                        <div className='addClientInputs'>
                                            
                                            <div className='InputsClm1'>
                                                <label>Total Points</label>
                                                <input type='number' value={totalPoints} onChange={(e) => setTotalPoints(parseInt(e.target.value))} required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='btnSubmit'>
                                        <button type="submit">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                            </svg>
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </form>
                            </>
                        }
                        {selectedIcon === 'file' && 
                            <>
                                <div className='contentNewClientFile'>
                                    <div className='ClientFileHeader'>
                                        <h2>Add Client</h2>
                                    </div>
                                    <div className="Clientfile-card">
                                        <div className="Clientfile-inputs">
                                            <form onSubmit={handleSubmitFile}>
                                                <input type="file" onChange={handleFileInput} name='file'/>
                                                <button type='submit'>
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload-cloud">
                                                        <polyline points="16 16 12 12 8 16"></polyline>
                                                        <line x1="12" y1="12" x2="12" y2="21"></line>
                                                        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                                        <polyline points="16 16 12 12 8 16"></polyline>
                                                    </svg>
                                                    Add
                                                </button>
                                            </form>
                                        </div>
                                        {AlertErr && (<p style={{ color:'red' }}>Veuillez sélectionner un fichier.</p>)}
                                        {AlertSucc && (<p style={{ color:'green' }}>Le fichier a été envoyé.</p>)}
                                        <p className="Clientmain">Fichiers Pris En Charge</p>
                                        <p className="Clientinfo">XLS, XLSX, CSV</p>
                                    </div>
                                </div>
                            </>
                        }
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

export default NewClient

