import React, { useEffect, useState } from 'react'
import './SettingUI.css'
import AdminIcon from '../Assets/AdminIcon.png'
import TaxIcon from '../Assets/txd3d.png'
import PompistIcon from '../Assets/Pompist3d.png'
import SupIcon from '../Assets/sup3d.png'
import SupShopIcon from '../Assets/supShop3d.png'

import { motion } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { logout } from '../redux/userRedux';
import UpdateUser from '../UpdateUser/UpdateUser'
import { Link } from 'react-router-dom'

const SettingUI = () => {
  const [DeleteAlert,setDeleteAlert]= useState(false);
  const [user,setUser]= useState({});
  const [updateUser,setUpdateUser]= useState(false);


  const handelClickUpdateUser = () => {
    setUpdateUser(true);
  }
  const dispatch = useDispatch();

  const handelClickDeleteBtn = () => {
    setDeleteAlert(true);
  }
  const handelClickCloseIcon = () => {
    setDeleteAlert(false);
    setUpdateUser(false);
  }

  const currentUserId = useSelector((state) => state.user.currentUser._id);
  const currentUser = useSelector((state) => state.user.currentUser);
  const isPompist = currentUser?.isPompist;
  const isSupervisorShop = currentUser?.isSupervisorShoop;
  const isPompistAndSuperShop = isSupervisorShop || isPompist;

  const handleDelete = () => {
    axios.delete(`https://so-petrovisionapi.onrender.com/api/users/${currentUserId}`)
      .then(response => {
        console.log(response.data);
        dispatch(logout());
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`https://so-petrovisionapi.onrender.com/api/users/find/${currentUserId}`);
        setUser(res.data);
      } catch(err){
          console.log(err)
      }
    };
    getUser();
  }, [currentUserId,user]);
  let phoneNumber = user.telephone; // Sample phone number with leading zero

    // Convert the phone number to a string and remove the leading zero
    phoneNumber = Number(phoneNumber).toString();

    const getRole = () => {
        if (user.isAdmin) return "Admin";
        if (user.isSupervisor) return "Supervisor";
        if (user.isSupervisorShoop) return "Supervisor Shop";
        if (user.isPompist) return "Pompist";
        return "Client";
    };

  return (
    <div className='SettingUI'>
        {!isPompistAndSuperShop &&
        <div className='headerSettingIcons'>
                <div className="bell">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                </div>
            </div>
        }
        {isPompistAndSuperShop &&
            <div className='AddTrCl1'>
                <h2>Setting</h2>
                <Link to='/'>
                    <div className='goBackTransactionPomp'>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-down-left">
                            <polyline points="9 10 4 15 9 20"></polyline>
                            <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                        </svg>
                    </div>
                </Link>
            </div>
        }
        <div className='SettingContent'>
            <h2>My Profil</h2>
            <div className='firstBannerProfilInfo'>
                <div className='prInfoIdentity'>
                    <div className='IdentityImg'>
                        {user.isAdmin && <img src={AdminIcon} alt='AdminIcon'/>}
                        {user.isSupervisor && <img src={SupIcon} alt='SupervisorIcon'/>}
                        {user.isSupervisorShoop && <img src={SupShopIcon} alt='SupervisorShopIcon'/>}
                        {user.isPompist && <img src={PompistIcon} alt='PompistIcon'/>}
                        {!user.isPompist && !user.isAdmin && !user.isSupervisor && !user.isSupervisorShoop && <img src={TaxIcon} alt='ClientIcon'/>}
                    </div>
                    <div className='IdentityCredentils'>
                        <span className='span2'>{getRole()}</span>
                        <span className='span1'>{user.nomComplet}</span>
                        
                        <span className='span3'>Laayoune, MA</span>
                    </div> 
                </div>
                {!isPompistAndSuperShop && 
                    <div className='editBtnProfilInfo'>
                        <button onClick={handelClickUpdateUser}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2">
                                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                            </svg>
                            Edit
                        </button>
                    </div>
                }
            </div>
            <div className='secondBannerProfilInfo'>
                <div className='prInfoRW1'>
                    <div className='persoInfoDiv'>
                        <h3>Personal Information</h3>
                    </div>
                    {!isPompistAndSuperShop &&
                        <div className='editBtnProfilInfo'>
                            <button onClick={handelClickUpdateUser}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2">
                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                </svg>
                                Edit
                            </button>
                        </div>
                    }
                </div>
                <div className='prInfoRW2'>
                    <div className='prInfoClm1'>
                        <div className='prInfoClm1Rw1'>
                            <span>Full Name</span>
                            <span>{user.nomComplet}</span>
                        </div>
                        {!isPompistAndSuperShop &&
                            <div className='prInfoClm1Rw2'>
                                <span>Email Address</span>
                                <span>{user.email}</span>
                            </div>
                        }
                        <div className='prInfoClm1Rw3'>
                            <span>Bio</span>
                            <span>{getRole()}</span>
                        </div>
                    </div>
                    <div className='prInfoClm2'>
                        <div className='prInfoClm2Rw1'>
                            <span>Telephone</span>
                            <span>(+212){phoneNumber}</span>
                        </div>
                        <div className='prInfoClm2Rw2'>
                            <span>Cin</span>
                            <span>{user.cin}</span>
                        </div>
                    </div>
                </div>
            </div>
            {!isPompistAndSuperShop && 
                <div className='thirdBannerProfilInfo'>
                    <div className='DeleteDivBnr'>
                        <h3>Deleting account will do the following:</h3>
                        <span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="15" y1="9" x2="9" y2="15"></line>
                                <line x1="9" y1="9" x2="15" y2="15"></line>
                            </svg>
                            Log you out on all devices
                        </span>
                        <span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="15" y1="9" x2="9" y2="15"></line>
                                <line x1="9" y1="9" x2="15" y2="15"></line>
                            </svg>
                            Delete all of your account information
                        </span>
                    </div>
                    <div className='DeleteDivBtn'>
                        <button onClick={handelClickDeleteBtn}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                            Delete account
                        </button>
                    </div>
                </div>
            }
        </div>
        {DeleteAlert && 
            <>
                <div className='settingBannerQuestion'>
                    <motion.div
                        className="settingAskYesOrNo"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{type: "spring",stiffness: 260,damping: 20}}
                    >
                        <div className='divDelRw1'>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                        </div>
                        <div className='divDelRw2'>
                            <h3>Are you sure you want to delete your account!</h3>
                        </div>
                        <div className='divDelRw3'>
                            <button onClick={handelClickCloseIcon}>No, cancel</button>
                            <button onClick={handleDelete}>Yes, delete</button>
                        </div>
                    </motion.div>
                </div>
            </>
        }
        {updateUser && <><UpdateUser handleClose={handelClickCloseIcon} userId={user._id}/></>}
    </div>
  )
}

export default SettingUI