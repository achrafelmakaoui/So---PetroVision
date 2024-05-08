import React from 'react'
import './SuperviseurShopUI.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import SupShopIcon from '../Assets/supShop3d.png'

const SuperviseurShopUI = () => {
    
  return (
    <div className='SuperviseurShopUI'>
        <div className='headerIcons-supShop'>
            <div className="search-supShop">
                <FontAwesomeIcon  className="icon-search-Supshop" icon={faMagnifyingGlass} />
                <input type='text' placeholder="Search For SuperviseurShop..."/>
            </div>
            <div className="bell-supShop">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
            </div>
            <div className='addSupShopIcon-supShop'>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                </svg>
            </div>
        </div>
        <div className='filterSupShop'>
            <div className='titleFilter-supShop'>
                <h2>Filter</h2>
            </div>
            <div className='filterSupShopSt'>
                <div className='titFilterSupShopStation'>
                    <h3>Station:</h3>
                </div>
                <div className='titFilterSupShopStatInp'>
                    <input type='text' name='station'/>
                </div>
            </div>
        </div>
        <div className='cardsDsSupShop'>
            <div className='cardDesignSupShop'>
                <div className='cardSupShophead'>
                    <div className='cardSupShopImg'>
                        <img src={SupShopIcon} alt='SupShopIcon'/>
                    </div>
                </div>
                <div className='cardSupShopCt'>
                    <div className='cardSupShopCin'>
                        <span>Cin</span>
                        <span>SH135420</span>
                    </div>
                    <div className='cardSupShopTel'>
                        <span>Tel</span>
                        <span>0626627378</span>
                    </div>
                </div>
                <div className='cardSupShopIdentity'>
                    <h5>ST. Tanmiya</h5>
                    <h3>Achraf El Makaoui</h3>
                    <h4>Superviseur Shop</h4>
                </div>
                <div className='cardSupShopDelUpd'>
                    <div className='cardSupShopUpd'>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b3b3b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3">
                            <path d="M12 20h9"></path>
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        </svg>
                    </div>
                    <div className='cardSupShopDel'>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b3b3b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='cardDesignSupShop'>
                <div className='cardSupShophead'>
                    <div className='cardSupShopImg'>
                        <img src={SupShopIcon} alt='SupShopIcon'/>
                    </div>
                </div>
                <div className='cardSupShopCt'>
                    <div className='cardSupShopCin'>
                        <span>Cin</span>
                        <span>SH135420</span>
                    </div>
                    <div className='cardSupShopTel'>
                        <span>Tel</span>
                        <span>0626627378</span>
                    </div>
                </div>
                <div className='cardSupShopIdentity'>
                    <h5>ST. Tanmiya</h5>
                    <h3>Achraf El Makaoui</h3>
                    <h4>Superviseur Shop</h4>
                </div>
                <div className='cardSupShopDelUpd'>
                    <div className='cardSupShopUpd'>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b3b3b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3">
                            <path d="M12 20h9"></path>
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        </svg>
                    </div>
                    <div className='cardSupShopDel'>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b3b3b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='cardDesignSupShop'>
                <div className='cardSupShophead'>
                    <div className='cardSupShopImg'>
                        <img src={SupShopIcon} alt='SupShopIcon'/>
                    </div>
                </div>
                <div className='cardSupShopCt'>
                    <div className='cardSupShopCin'>
                        <span>Cin</span>
                        <span>SH135420</span>
                    </div>
                    <div className='cardSupShopTel'>
                        <span>Tel</span>
                        <span>0626627378</span>
                    </div>
                </div>
                <div className='cardSupShopIdentity'>
                    <h5>ST. Tanmiya</h5>
                    <h3>Achraf El Makaoui</h3>
                    <h4>Superviseur Shop</h4>
                </div>
                <div className='cardSupShopDelUpd'>
                    <div className='cardSupShopUpd'>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b3b3b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3">
                            <path d="M12 20h9"></path>
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        </svg>
                    </div>
                    <div className='cardSupShopDel'>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b3b3b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='cardDesignSupShop'>
                <div className='cardSupShophead'>
                    <div className='cardSupShopImg'>
                        <img src={SupShopIcon} alt='SupShopIcon'/>
                    </div>
                </div>
                <div className='cardSupShopCt'>
                    <div className='cardSupShopCin'>
                        <span>Cin</span>
                        <span>SH135420</span>
                    </div>
                    <div className='cardSupShopTel'>
                        <span>Tel</span>
                        <span>0626627378</span>
                    </div>
                </div>
                <div className='cardSupShopIdentity'>
                    <h5>ST. Tanmiya</h5>
                    <h3>Achraf El Makaoui</h3>
                    <h4>Superviseur Shop</h4>
                </div>
                <div className='cardSupShopDelUpd'>
                    <div className='cardSupShopUpd'>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b3b3b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3">
                            <path d="M12 20h9"></path>
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        </svg>
                    </div>
                    <div className='cardSupShopDel'>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b3b3b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SuperviseurShopUI