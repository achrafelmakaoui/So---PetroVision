import React, { useEffect, useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import axios from 'axios';
import './AddShopSuperviseurShop.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

function AddShopSuperviseurShop() {
    const [qrscan, setQrscan] = useState();
    const [client, setClient] = useState({});
    // const [station, setStation] = useState('');
    const [typeShoop, setTypeShoop] = useState('');
    const [shoop, setShoop] = useState('');
    const [pointShoop, setPointShoop] = useState('');
    const [photo, setPhoto] = useState(null);
    const [alert, setAlert] = useState(false);

    const currentUser = useSelector((state) => state.user.currentUser);

    useEffect(() => {
        const getClient = async () => {
          try {
            const res = await axios.get(`http://localhost:5000/api/shoop/clients/${qrscan}`);
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
        data.append('ncarnet', qrscan);
        data.append('nomComplet', client.nomComplet);
        data.append('station', currentUser.stationActuel);
        data.append('typeShoop', typeShoop);
        data.append('shoop', shoop);
        data.append('pointShoop', pointShoop);
        if (photo) {
            data.append('photo', photo);
        }

        try {
            const response = await fetch('http://localhost:5000/api/shoop/upload/', {
                method: 'POST',
                body: data,
            });

            if (response.ok) {
                const result = await response.json();
                console.log('shop created:', result);
                setAlert(true);
            } else {
                const errorText = await response.text();
                console.error('Error creating shop:', errorText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='addTRansactionQr'>
            <div className='AddTransactionCl1'>
                <h2>Add Shop</h2>
                <Link to='/'>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </Link>
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
                        <div className='addTrBannerForm'>
                            <div className='addTrInputs'>
                                <div className='InpsClm1'>
                                    <label>ncarnet</label>
                                    <input
                                        type='number'
                                        name='ncarnet'
                                        placeholder='Entrer ncarnet'
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
                                    <label>TypeShoop</label>
                                    <select
                                        name='typeShoop'
                                        value={typeShoop}
                                        onChange={(e) => setTypeShoop(e.target.value)}
                                        required
                                    >
                                        <option>Entre typeShoop</option>
                                        <option value='Shop'>Shop</option>
                                        <option value='Gift'>Gift</option>
                                    </select>
                                </div>
                            </div>
                            <div className='addTrInputs'>
                                <div className='InpsClm1'>
                                    <label>Cadeau</label>
                                    <select
                                        name='shop'
                                        value={shoop}
                                        onChange={(e) => setShoop(e.target.value)}
                                        required
                                    >
                                        <option>Entre shop</option>
                                        <option value='Coffee'>Coffee</option>
                                        <option value='Ftour beldi'>Ftour beldi</option>
                                        <option value='Shell Oil'>Shell Oil</option>
                                    </select>
                                </div>
                                <div className='InpsClm1'>
                                    <label>Points</label>
                                    <input
                                        type='number'
                                        name='points'
                                        placeholder='Enter Shop Points'
                                        value={pointShoop}
                                        onChange={(e) => setPointShoop(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='addTrInputs'>
                                <div className='InpsClm1'>
                                    <label htmlFor="photo">Image-Recip:</label>
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
                        <div className='btnSub' style={{marginTop:'1rem'}}>
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
            {alert && 
                <>
                    <div className='AddAlertDiv'>
                        <motion.div
                            className="AddAlertShop"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{type: "spring", stiffness: 260, damping: 20}}
                        >
                            <div className='addAlertContenet'>
                                <div className='alertIcon'>
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                                        <polyline points="20 6 9 17 4 12"></polyline>0
                                    </svg>
                                </div>
                                <div className='alertText'>
                                    <h2>Great</h2>
                                    <p>{client.nomComplet} Shop Inserted successfully</p>
                                </div>
                                <div className='alertBtn'>
                                    <Link to='/shop'>
                                        <button>Continue</button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            }
        </div>
        
    );
}

export default AddShopSuperviseurShop;
