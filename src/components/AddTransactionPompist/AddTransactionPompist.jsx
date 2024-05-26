import React, { useEffect, useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './AddTransactionPompist.css'

function AddTransactionPompist() {
    const [qrscan, setQrscan] = useState();
    const [client, setClient] = useState({});
    // const [station, setStation] = useState('');
    const [ca, setCa] = useState('');
    const [qte, setQte] = useState('');
    const [produitAcheter, setProduitAcheter] = useState('');
    const [points, setPoints] = useState();
    const [photo, setPhoto] = useState(null);

    const currentUser = useSelector((state) => state.user.currentUser);
    const isPompist = currentUser?.isPompist;

    useEffect(() => {
        const getClient = async () => {
          try {
            const res = await axios.get(`http://localhost:5000/api/transaction/clients/${qrscan}`);
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('numeroBon', qrscan);
        data.append('nomComplet', client.nomComplet);
        data.append('station', currentUser.stationActuel);
        data.append('ca', ca);
        data.append('qte', qte);
        data.append('produitAcheter', produitAcheter);
        data.append('points', points);
        if (photo) {
            data.append('photo', photo);
        }

        try {
            const response = await fetch('http://localhost:5000/api/transaction/upload/', {
                method: 'POST',
                body: data,
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Transaction created:', result);
            } else {
                const errorText = await response.text();
                console.error('Error creating transaction:', errorText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='addTRQr'>
            <div className='AddTrCl1'>
                <h2>Add Transaction</h2>
                <div className='goBackTransactionPomp'>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-down-left">
                        <polyline points="9 10 4 15 9 20"></polyline>
                        <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                    </svg>
                </div>
            </div>
            {qrscan && 
                <>
                    <center>
                        <div className='qrScDv' style={{ marginTop: 30, width: '350px', height: '350px', border: '2px solid #ccc', borderRadius: '8px', overflow: 'hidden', marginBottom: 30 }}>
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
            {!qrscan &&
                <>
                    <form onSubmit={handleSubmit}>
                        <div className='addTrBannerForm'>
                            <div className='addTrInputs'>
                                <div className='InpsClm1'>
                                    <label>Numero de Bon</label>
                                    <input
                                        type='number'
                                        name='numeroBon'
                                        placeholder='Entrer Numero de Bon'
                                        value={qrscan}
                                        required
                                        disabled
                                    />
                                </div>
                                <div className='InpsClm1'>
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
                            <div className='addTrInputs'>
                                <div className='InpsClm1'>
                                    <label>Station</label>
                                    <input
                                        type='text'
                                        name='station'
                                        placeholder='Entre Station'
                                        value={currentUser.stationActuel}
                                        required
                                        disabled
                                    />
                                </div>
                                <div className='InpsClm1'>
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
                            <div className='addTrInputs'>
                                <div className='InpsClm1'>
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
                                <div className='InpsClm1'>
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
                            <div className='addTrInputs'>
                                <div className='InpsClm1'>
                                    <label>Points</label>
                                    <input
                                        type='number'
                                        name='points'
                                        placeholder='Enter Points'
                                        value={points}
                                        onChange={(e) => setPoints(parseInt(e.target.value))}
                                         required
                                    />
                                </div>
                                <div className='InpsClm1'>
                                    <label htmlFor="photo">Image-Counter:</label>
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
                            </div>
                        </div>
                        <div className='btnSub'>
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
    );
}

export default AddTransactionPompist;
