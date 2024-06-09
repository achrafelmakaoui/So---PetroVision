import React, { useEffect, useState } from 'react'
import './UpdateShop.css'
import { motion } from "framer-motion"
import axios from 'axios'

const UpdateShop = ({handleClose, shopId}) => {
    const [shop, setShop] = useState({});
    const [shoop, setShoop] = useState('');
    const [station, setStation] = useState('');
    const [typeShoop, setTypeShoop] = useState('');
    const [pointShoop, setPointShoop] = useState();

    

    useEffect(() => {
        const getShop = async () => {
          try {
            const res = await axios.get(`https://so-petrovisionapi.onrender.com/api/shoop/find/${shopId}`);
            setShop(res.data);
          } catch(err){
              console.log(err)
          }
        };
        getShop();
      }, [shopId, shop]);

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedShopData = {
                // Assuming you have all the required form fields in state variables
                // Replace these with your actual state variables
                ncarnet: shop.ncarnet,
                nomComplet:shop.nomComplet,
                station,
                shoop,
                typeShoop,
                pointShoop,
                imgRecip:shop.imgRecip,
            };
    
            const response = await axios.put(`https://so-petrovisionapi.onrender.com/api/shoop/${shop._id}`, updatedShopData);
            console.log('Shop updated:', response.data);
    
            // Update the Shop state with the updated data
            setShop(response.data);
    
            handleClose(); // Close the form after successful submission
        } catch (error) {
            console.error('Error updating Shop:', error);
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
                                    <h2>Update Shop</h2>
                                    <div className='addClientBannerForm'>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>N° carnet</label>
                                                <input type='number' placeholder={shop.ncarnet} value={shop.ncarnet} disabled/>
                                            </div>
                                            <div className='InputsClm1'>
                                                <label>Nom Complet</label>
                                                <input type='text' placeholder={shop.nomComplet} value={shop.nomComplet} disabled/>
                                            </div>
                                        </div>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>Station</label>
                                                <input type='text' placeholder={shop.station} value={station} onChange={(e) => setStation(e.target.value)} required/>
                                            </div>
                                            <div className='InputsClm1'>
                                                <label>Shop</label>
                                                <input type='text' placeholder={shop.shoop} value={shoop} onChange={(e) => setShoop(e.target.value)} required/>
                                            </div>
                                        </div>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>TypeShop</label>
                                                <input type='text' placeholder={shop.typeShoop} value={typeShoop} onChange={(e) => setTypeShoop(e.target.value)} required/>
                                            </div>
                                            <div className='InputsClm1'>
                                                <label>pointShoop</label>
                                                <input type='number' placeholder={shop.pointShoop} value={pointShoop} onChange={(e) => setPointShoop(e.target.value)} required/>
                                            </div>
                                        </div>
                                        <div className='addClientInputs'>
                                            <div className='InputsClm1'>
                                                <label>Image-Recip</label>
                                                <input type='text' placeholder={shop.imgRecip} value={shop.imgRecip} disabled required/>
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

export default UpdateShop

