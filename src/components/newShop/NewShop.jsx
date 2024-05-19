import React, { useEffect, useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import axios from 'axios';

function NewShop() {
    const [qrscan, setQrscan] = useState();
    const [client, setClient] = useState({});
    const [station, setStation] = useState('');
    const [typeShoop, setTypeShoop] = useState('');
    const [shoop, setShoop] = useState('');
    const [pointShoop, setPointShoop] = useState('');

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = {
                numeroBon:qrscan,
                nomComplet:client.nomComplet,
                station,
                typeShoop,
                shoop,
                pointShoop,
                
            };
            const response = await axios.post('http://localhost:5000/api/shoop/', formData);
            console.log('shop added:', response.data);
        } catch (error) {
            console.error('Error adding shoop:', error);
        }
    };

    return (
        <div>
            <span>QR Scanner</span>
            <center>
                <div style={{ marginTop: 30, width: '320px', height: '320px', border: '2px solid #ccc', borderRadius: '8px', overflow: 'hidden', marginBottom: 30 }}>
                    <Scanner
                        onResult={(text, result) => {
                            console.log(text, result);
                            setQrscan(parseInt(text));
                        }}
                        onError={(error) => console.log(error?.message)}
                        styles={{ height: '100%', width: '100%' }}
                    />
                </div>
            </center>
            <form onSubmit={handleSubmit}>
                <div className='addClientBannerForm'>
                    <div className='addClientInputs'>
                        <div className='InputsClm1'>
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
                    <div className='addClientInputs'>
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
                    <div className='addClientInputs'>
                        <div className='InputsClm1'>
                            <label>Shop</label>
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
                        <div className='InputsClm1'>
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
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NewShop;
