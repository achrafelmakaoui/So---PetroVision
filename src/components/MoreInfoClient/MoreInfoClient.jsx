import React, { useEffect, useState } from 'react'
import './MoreInfoClient.css'
import TaxIcon from '../Assets/txd3d.png'
import { motion } from "framer-motion"
import axios from 'axios'
import QRCode from 'qrcode'

const MoreInfoClient = ({handleClose , clientNumeroBon}) => {
    const [client, setClient] = useState({});
    const [clientTextQrCode, setClientTextQrCode] = useState('');
    const [clientImgQrCode, setClientImgQrCode] = useState('');


    useEffect(() => {
        const getClient = async () => {
          try {
            const res = await axios.get(`https://so-petrovisionapi.onrender.com/api/sopclients/find/${clientNumeroBon}`);
            setClient(res.data);
            setClientTextQrCode(`${client.ncarnet}`)
          } catch(err){
              console.log(err)
          }
        };
        getClient();
        const generateQrCode = () => {
            QRCode.toDataURL(clientTextQrCode, (err, qrcode)=>{
                if(err) return console.error('Failed to generate Qr Code', err);

                setClientImgQrCode(qrcode);
            })
        }
        generateQrCode();
      }, [clientNumeroBon,client,clientTextQrCode]);


    const dateInscription = client.createdAt;

    // Create a Date object from the date string
    const date = new Date(dateInscription);

    // Extract day, month, and year
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is zero-based, so add 1
    const year = date.getFullYear();

    // Pad single-digit day and month with leading zeros
    const formattedDay = day < 10 ? "0" + day : day;
    const formattedMonth = month < 10 ? "0" + month : month;

    // Format the date as DD-MM-YYYY
    const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;
    
    let phoneNumber = client.telephone; // Sample phone number with leading zero

    // Convert the phone number to a string and remove the leading zero
    phoneNumber = Number(phoneNumber).toString();

    let proprietaire = client.proprietaire;
    if (proprietaire === true){
        proprietaire= 'Oui'
    } else{
        proprietaire='Non'
    }

    let moyenneCAVisite = client.moyenneCAVisite

    // Round to 2 decimal places and convert back to a number
    moyenneCAVisite = parseFloat(Number(moyenneCAVisite).toFixed(2));
  return (
    <div className='MoreInfoClientDiv'>
        <motion.div
            className="InfoClientAlert"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{type: "spring",stiffness: 260,damping: 20}}
        >
            <div className='bannerInfoClient'>
                <div className='infoClientImgName'>
                    <img className='imgClient' src={TaxIcon} alt='TaxIcom'/>
                    <h2>{client.nomComplet}</h2>
                    <span className='firstSpan'>Member since  <span className='secondSpan'>{formattedDate}</span></span>
                    {clientImgQrCode && (
                        <>
                            <img className='qrCodeImg' src={clientImgQrCode} alt='qrCode'/>
                            <a href={clientImgQrCode} download={`${client.nomComplet}QrCode.png`}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff5900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </a>
                        </>
                    )}
                </div>
                <div className='InfoClientPerso'>
                    <div className='infoClinetRw1Hist'>
                        <h3>Personal Information</h3>
                        <div className='divPersInfoDf'>
                            <div className='divCl1'>
                                <span>Telephone</span>
                                <span>(+212){phoneNumber}</span>
                            </div>
                            <div className='divCl2'>
                                <span>N° carnet</span>
                                <span>{client.ncarnet}</span>
                            </div>
                            <div className='divCl3'>
                                <span>Station d'inscription</span>
                                <span>{client.stationInscription}</span>
                            </div>
                        </div>
                    </div>
                    <div className='infoClinetRw2Hist'>
                        <h3>Véhicule Information</h3>
                        <div className='divPersInfoDf2'>
                            <div className='persoInfo1rw'>
                                <div className='divCl1Rw1'>
                                    <span>Permis de confince</span>
                                    <span>{client.permisConfiance}</span>
                                </div>
                                <div className='divCl2Rw1'>
                                    <span>Matricule</span>
                                    <span>{client.matricule}</span>
                                </div>
                                <div className='divCl3Rw1'>
                                    <span>Numero de taxi</span>
                                    <span>{client.numeroTaxi}</span>
                                </div>
                            </div>
                            <div className='persoInfo2rw'>
                                <div className='divCl1Rw2'>
                                    <span>Marque de vehicule</span>
                                    <span>{client.marqueVehicule}</span>
                                </div>
                                <div className='divCl1Rw2'>
                                    <span>Type de taxi</span>
                                    <span>{client.typeTaxi}</span>
                                </div>
                                <div className='divCl2Rw2'>
                                    <span>Proprietaire</span>
                                    <span>{proprietaire}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='infoClinetRw3Hist'>
                        <h3>Système de fidélité</h3>
                        <div className='clientPointAndVistes'>
                            <div className='PointAndVisitescl1'>
                                <div className='firstOne'>
                                    <span>NV / Mois</span>
                                    <span>{client.freqVisiteParMois}</span>
                                </div>                                
                                <div className='firstOneSvg'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity">
                                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                    </svg>
                                </div>
                            </div>
                            <div className='PointAndVisitescl2'>
                                <div className='secondOne'>
                                    <span>CA / Visite</span>
                                    <span>{moyenneCAVisite} DH</span>
                                </div>                                
                                <div className='secondOneSvg'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign">
                                        <line x1="12" y1="1" x2="12" y2="23"></line>
                                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className='PointAndVisitescl3'>
                                <div className='thirdOne'>
                                    <span>Total Points</span>
                                    <span>{client.totalPoints}</span>
                                </div>                                
                                <div className='thirdOneSvg'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='CloseIcon'>
                    <svg onClick={handleClose} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>    
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default MoreInfoClient

