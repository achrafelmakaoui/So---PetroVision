import React, { useEffect, useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import axios from 'axios';
import { motion } from "framer-motion"
import './QrCodeScanner.css'

function QRscanner({handleClose}) {
    const [qrscan, setQrscan] = useState();
    const [client, setClient] = useState({});
    const [station, setStation] = useState('');
    const [ca, setCa] = useState('');
    const [qte, setQte] = useState('');
    const [produitAcheter, setProduitAcheter] = useState('');
    const [photo, setPhoto] = useState(null);
    const [photo2, setPhoto2] = useState(null);

    useEffect(() => {
        const getClient = async () => {
          try {
            const res = await axios.get(`https://so-petrovisionapi.onrender.com/api/transaction/clients/${qrscan}`);
            setClient(res.data);
          } catch(err){
              console.log(err)
          }
        };
        getClient();
      }, [qrscan,client]);

    const handlePhotoChange = (e) => {
        setPhoto(e.target.files[0]);
    };
    const handlePhotoChange2 = (e) => {
        setPhoto2(e.target.files[0]);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('ncarnet', qrscan);
        data.append('nomComplet', client.nomComplet);
        data.append('station', station);
        data.append('ca', ca);
        data.append('qte', qte);
        data.append('produitAcheter', produitAcheter);
        if (photo) {
            data.append('imgCounteurWBon', photo);
        }
        if (photo2){
            data.append('imgCounteur', photo2);
        }

        try {
            const response = await fetch('https://so-petrovisionapi.onrender.com/api/transaction/upload/', {
                method: 'POST',
                body: data,
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Transaction created:', result);
                handleClose();
            } else {
                const errorText = await response.text();
                console.error('Error creating transaction:', errorText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='AddTransactionDiv'>
            <motion.div
                className="AddTransactionAlert"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{type: "spring", stiffness: 260, damping: 20}}
            >
                <div className='addTRansactionQr'>
                    <div className='AddTransactionCl1'>
                        <h2>Add Transaction</h2>
                        <svg onClick={handleClose} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>
                    {!qrscan && 
                        <>
                            <center>
                                <div className='qrScannerDv' style={{ marginTop: 30, width: '350px', height: '350px', border: '2px solid #ccc', borderRadius: '8px', overflow: 'hidden', marginBottom: 30 }}>
                                    <Scanner
                                        onResult={(text, result) => {
                                            setQrscan(parseInt(text));
                                        }}
                                        onError={(error) => console.log(error?.message)}
                                        styles={{ height: '100%', width: '100%' }}
                                    />
                                </div>
                            </center>
                        </>
                    }
                    {qrscan &&
                        <>
                            <form onSubmit={handleSubmit}>
                                <div className='addTransactionBannerForm'>
                                    <div className='addTransactionInputs'>
                                        <div className='InputsClm1'>
                                            <label>N° carnet</label>
                                            <input
                                                type='number'
                                                name='ncarnet'
                                                placeholder='Entrer N° carnet'
                                                value={qrscan}
                                                required
                                                disabled
                                            />
                                        </div>
                                        <div className='InputsClm1'>
                                            <label>Nom Complet</label>
                                            <input
                                                type='text'
                                                name='nomComplet'
                                                placeholder='Entrer NomComplet'
                                                value={client.nomComplet}
                                                required
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className='addTransactionInputs'>
                                        <div className='InputsClm1'>
                                            <label>Station</label>
                                            <input
                                                type='text'
                                                name='station'
                                                placeholder='Entre Station'
                                                value={station}
                                                onChange={(e) => setStation(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className='InputsClm1'>
                                            <label>CA</label>
                                            <input
                                                type='number'
                                                name='ca'
                                                placeholder='Entre CA'
                                                value={ca}
                                                onChange={(e) => setCa(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className='addTransactionInputs'>
                                        <div className='InputsClm1'>
                                            <label>Quantity</label>
                                            <input
                                                type='number'
                                                name='qte'
                                                placeholder='Enter Quantity'
                                                value={qte}
                                                onChange={(e) => setQte(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className='InputsClm1'>
                                            <label>Produit Acheter</label>
                                            <select
                                                name='produitAcheter'
                                                value={produitAcheter}
                                                onChange={(e) => setProduitAcheter(e.target.value)}
                                                required
                                            >
                                                <option value=''>Select Produit</option>
                                                <option value='Essence'>Essence</option>
                                                <option value='Diesel'>Diesel</option>
                                                <option value='Essence V POWER'>Essence V POWER</option>
                                                <option value='Diesel V POWER'>Diesel V POWER</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='addTransactionInputs'>
                                        <div className='InputsClm1'>
                                            <label htmlFor="photo">Image-Counteur-Bon:</label>
                                            <input
                                                type="file"
                                                id="photo"
                                                name="photo"
                                                accept="image/*"
                                                capture="camera"
                                                onChange={handlePhotoChange}
                                                required
                                            />
                                        </div>
                                        <div className='InputsClm1'>
                                            <label htmlFor="photo2">Image-Counteur:</label>
                                            <input
                                                type="file"
                                                id="photo2"
                                                name="photo2"
                                                accept="image/*"
                                                capture="camera"
                                                onChange={handlePhotoChange2}
                                                required
                                            />
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
                            </form>
                        </>
                    }
                </div>
            </motion.div>
        </div>
    );
}

export default QRscanner;
