import React from 'react'
import './TransactionUI.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import TaxIcon from '../Assets/txd3d.png'

const transactionUI = () => {
    
  return (
    <div className='transactionUI'>
        <div className='headertransactionIcons'>
            <div className="bell">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
            </div>
        </div>
        <div className='transactionTable'>
            <div className='filterTransactions'>
                <div className="search-transaction">
                    <FontAwesomeIcon  className="icon-search-transaction" icon={faMagnifyingGlass} />
                    <input type='text' placeholder="Search By Client, TNB..."/>
                </div>
            </div>
            <div className='TransactionTableDs'>
                <table className='tableTrans'>
                    <tr className='trHead'>
                        <th>Transaction</th>
                        <th>Date</th>
                        <th>Station</th>
                        <th>Amount</th>
                        <th>Quantity</th>
                        <th>Produit</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    <tr>
                        <td>
                            <div className='transactionOwner'>
                                <img className='transactionOwner-Img' src={TaxIcon} alt='TaxIcon'/>
                                <div className='transactionOwner-Info'>
                                    <span className='transactionOwner-Name'>Achraf El Makaoui</span>
                                    <span className='transactionOwner-Job'>Taxi Driver</span>
                                </div>
                            </div>
                        </td>
                        <td><span>Oct 24, 2024</span></td>
                        <td><span>Tanmiya</span></td>
                        <td><span>DH 200.00</span></td>
                        <td><span>15L</span></td>
                        <td><span>Diesel</span></td>
                        <td>
                            <div className='statusDvFrd'>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#740505" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-triangle">
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                    <line x1="12" y1="9" x2="12" y2="13"></line>
                                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                </svg>
                                <span>Fraud</span>
                            </div>
                        </td>
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
                            <div className='transactionOwner'>
                                <img className='transactionOwner-Img' src={TaxIcon} alt='TaxIcon'/>
                                <div className='transactionOwner-Info'>
                                    <span className='transactionOwner-Name'>Karim Moussaoui</span>
                                    <span className='transactionOwner-Job'>Taxi Driver</span>
                                </div>
                            </div>
                        </td>
                        <td><span>Nov 30, 2023</span></td>
                        <td><span>Shell EXIT</span></td>
                        <td><span>DH 350.00</span></td>
                        <td><span>26.25L</span></td>
                        <td><span>Diesel</span></td>
                        <td>
                            <div className='statusDv'>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#034b03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                <span>Verified</span>
                            </div>
                        </td>
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
                            <div className='transactionOwner'>
                                <img className='transactionOwner-Img' src={TaxIcon} alt='TaxIcon'/>
                                <div className='transactionOwner-Info'>
                                    <span className='transactionOwner-Name'>Ahmed Aadli</span>
                                    <span className='transactionOwner-Job'>Taxi Driver</span>
                                </div>
                            </div>
                        </td>
                        <td><span>Nov 30, 2023</span></td>
                        <td><span>Shell EXIT</span></td>
                        <td><span>DH 350.00</span></td>
                        <td><span>26.25L</span></td>
                        <td><span>Diesel</span></td>
                        <td>
                            <div className='statusDv'>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#034b03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                                <span>Verified</span>
                            </div>
                        </td>
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

export default transactionUI