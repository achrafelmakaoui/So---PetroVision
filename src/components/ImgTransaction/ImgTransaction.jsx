import React, { useEffect, useState } from 'react'
import './ImgTransaction.css'
import { motion } from "framer-motion"
import axios from 'axios'

const ImgTransaction = ({handleClose, transactionId}) => {
    const [transaction, setTransaction] = useState({});
    

    useEffect(() => {
        const getSuperviseur = async () => {
          try {
            const res = await axios.get(`http://localhost:5000/api/transaction/find/${transactionId}`);
            setTransaction(res.data);
          } catch(err){
              console.log(err)
          }
        };
        getSuperviseur();
      }, [transactionId, transaction]);

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
                        <h2>Counter Image</h2>
                        <svg onClick={handleClose} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </div>    
                    <div className='CounterImg'>
                            {transaction.imgCounteur && (
                                <img
                                    src={`http://localhost:5000/uploads2/${transaction.imgCounteur}`}
                                    alt="Img Counteur"
                                    style={{ width: '350px', height: 'auto' }}
                                />
                            )}
                    </div>
                </div>
            </motion.div>
        </div>
  )
}

export default ImgTransaction

