import React from 'react'
import './ShopUI.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import TaxIcon from '../Assets/coffee.png'
import FtourIcon from '../Assets/breakfast.png'

const ShopUI = () => {
    
  return (
    <div className='ShopUI'>
        <div className='headershopIcons'>
            <div className="bell">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
            </div>
        </div>
        <div className='shopTable'>
            <div className='filtershop'>
                <div className="search-shop">
                    <FontAwesomeIcon  className="icon-search-shop" icon={faMagnifyingGlass} />
                    <input type='text' placeholder="Search By Client, TNB..."/>
                </div>
            </div>
            <div className='shopTableDs'>
                <table className='tableShop'>
                    <tr className='trHeadShop'>
                        <th>Shop</th>
                        <th>Date</th>
                        <th>Station</th>
                        <th>Type de Shop</th>
                        <th>Shop Point</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td>
                            <div className='shopOwner'>
                                <img className='shopOwner-Img' src={TaxIcon} alt='itemShop'/>
                                <div className='shopOwner-Info'>
                                    <span className='shopOwner-Name'>Achraf El Makaoui</span>
                                    <span className='shopOwner-Job'>Café</span>
                                </div>
                            </div>
                        </td>
                        <td><span>Oct 24, 2024</span></td>
                        <td><span>Tanmiya</span></td>
                        <td><span>Shop</span></td>
                        <td><span>6</span></td>
                        <td>
                            <div className='ActionsInfo'>
                                <div className='ActionDelIcon'>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                </div>
                                <div className='ActionUpdIcon'>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3">
                                        <path d="M12 20h9"></path>
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                    </svg>
                                </div>
                                <div className='ActionMoreInfoIcon'>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="16" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className='shopOwner'>
                                <img className='shopOwner-Img' src={FtourIcon} alt='itemShop'/>
                                <div className='shopOwner-Info'>
                                    <span className='shopOwner-Name'>Achraf El Makaoui</span>
                                    <span className='shopOwner-Job'>Ftour Beldi</span>
                                </div>
                            </div>
                        </td>
                        <td><span>Nov 10, 2024</span></td>
                        <td><span>Tanmiya</span></td>
                        <td><span>Shop</span></td>
                        <td><span>15</span></td>
                        <td>
                            <div className='ActionsInfo'>
                                <div className='ActionDelIcon'>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                </div>
                                <div className='ActionUpdIcon'>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3">
                                        <path d="M12 20h9"></path>
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                    </svg>
                                </div>
                                <div className='ActionMoreInfoIcon'>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="12" y1="16" x2="12" y2="12"></line>
                                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                    </svg>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ShopUI