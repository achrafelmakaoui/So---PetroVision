import React, { useEffect, useState } from 'react'
import './RecipShoop.css'
import { motion } from "framer-motion"
import axios from 'axios'

const RecipShoop = ({handleClose, shopId}) => {
    const [shop, setShop] = useState({});
    

    useEffect(() => {
        const getRecip = async () => {
          try {
            const res = await axios.get(`https://so-petrovisionapi.onrender.com/api/shoop/find/${shopId}`);
            setShop(res.data);
          } catch(err){
              console.log(err)
          }
        };
        getRecip();
      }, [shopId, shop]);

  return (
        <div className='ImgTransactionDiv'>
            <motion.div
                className="ImgTransactionAlert"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{type: "spring", stiffness: 260, damping: 20}}
            >
                <div className='ImgTransactionContent'>
                    <div className='ImgTransactionCl1'>
                        <h2>Recip Image</h2>
                        <svg onClick={handleClose} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>    
                    <div className='CounterImg'>
                            {shop.imgRecip && (
                                <img
                                    src={`https://so-petrovisionapi.onrender.com/uploads3/${shop.imgRecip}`}
                                    alt="Img Recip"
                                    style={{ width: '350px', height: 'auto' }}
                                />
                            )}
                    </div>
                </div>
            </motion.div>
        </div>
  )
}

export default RecipShoop

