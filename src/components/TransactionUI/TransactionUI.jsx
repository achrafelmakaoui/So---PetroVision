import React, { useState, useEffect } from 'react'
import './TransactionUI.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import TaxIcon from '../Assets/txd3d.png'
import axios from 'axios'
import UpdateTransaction from '../UpdateTransaction/UpdateTransaction'
import QrCodeScanner from '../QrCodeScanner/QrCodeScanner'
import ImgTransaction from '../ImgTransaction/ImgTransaction'

const TransactionUI = () => {
    const [transactions, setTransactions] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [mois, setMois] = useState();
    const [jour, setJour] = useState();
    const [station, setStation] = useState('');
    const [status, setStatus] = useState('');
    const [numeroBon, setNumeroBon] = useState();
    const [transactionId, setTransactionId] = useState();
    const [updateTransaction, setUpdateTransaction] = useState(false);
    const [newTransaction, setNewTransaction] = useState(false);
    const [imgTransaction, setImgTransaction] = useState(false);
    const [searchMode, setSearchMode] = useState(false);

    const formatDate = (dateString) => {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    };

    const deleteTransaction = async (id) => {
        try {
          const res = await axios.delete(`http://localhost:5000/api/transaction/${id}`);
          console.log(res)
        } catch(err){
            console.log(err)
        }
    };

    useEffect(() => {
        const getTransactions = async () => {
            let url;
            if (searchMode && searchQuery) {
                url = `http://localhost:5000/api/transaction/search?name=${searchQuery}`;
            } else {
                url = "http://localhost:5000/api/transaction/multiFilter?";
                const queryParams = [];
                
                if (mois) {
                    queryParams.push(`mois=${mois}`);
                }
                
                if (jour) {
                    queryParams.push(`jour=${jour}`);
                }
                
                if (station) {
                    queryParams.push(`station=${station}`);
                }
                if (numeroBon) {
                    queryParams.push(`numeroBon=${numeroBon}`);
                }
                if (status) {
                    queryParams.push(`status=${status}`);
                }
                
                if (queryParams.length > 0) {
                    url += queryParams.join('&');
                }
            }
            try {
                const res = await axios.get(url);
                setTransactions(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getTransactions();
    }, [searchQuery,mois,jour,station,numeroBon,status,searchMode]);

    const handelClickUpdateTransaction = (TransactionId) => {
        setUpdateTransaction(true);
        setTransactionId(TransactionId)
    }
    const handelClickImgTransaction = (TransactionId) => {
        setImgTransaction(true);
        setTransactionId(TransactionId)
    }
    const handelClickCloseIcon = () => {
        setUpdateTransaction(false);
        setImgTransaction(false)
        setNewTransaction(false);
    };
    const handelClickNewTransaction = () => {
        setNewTransaction(true);
    };
    const handleSearchFocus = () => {
        setSearchMode(true);
        setNumeroBon(false);
        setMois(false);
        setJour(false);
        setStatus('');
        setStation('');
    };

    const handleSearchBlur = () => {
        setSearchMode(false);
        setSearchQuery('');
    };
  return (
    <div className='transactionUI'>
        <div className='headertransactionIcons'>
            <div className="search">
                <FontAwesomeIcon  className="icon-search" icon={faMagnifyingGlass} />
                <input type='text' placeholder="Search By Client..." id='name' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={handleSearchFocus} onBlur={handleSearchBlur}/>
            </div>
            <div className="bell">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
            </div>
            <div className='transactionAddIcon' onClick={handelClickNewTransaction}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
            </div>
        </div>
        <div className='transactionTable'>
            <div className='filterTransactions'>
                <div className="search-transaction">
                    <div className='serachByNumeroBon'>
                        <input type='number' placeholder="Filter By N° bon..." min={0} value={numeroBon} onChange={(e) => setNumeroBon(e.target.value)}/>
                    </div>
                </div>
                <div className='transactionFilterMois'>
                    <div className='transactionFilterMoisSel'>
                        <select name="day" value={mois} onChange={(e) => setMois(e.target.value)}>
                            <option>
                                Filter By Month
                            </option>
                            {Array.from({ length: 12 }, (_, index) => (
                                <option key={index + 1} value={index + 1}>
                                    {index + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='transactionFilterJour'>
                    <div className='transactionFilterJourSel'>
                       <select name="day" value={jour} onChange={(e) => setJour(e.target.value)}>
                            <option>
                                Filter By Day
                            </option>
                            {Array.from({ length: 31 }, (_, index) => (
                                <option key={index + 1} value={index + 1}>
                                    {index + 1}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='transactionFilterStatus'>
                    <div className='transactionFilterStatusSel'>
                       <select name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option>
                                Filter By Status
                            </option>
                            <option value='Encours'>Encours</option>
                            <option value='Fraud'>Fraud</option>
                            <option value='Verified'>Verified</option>
                        </select>
                    </div>
                </div>
                <div className='transactionFilterStation'>
                    <div className='transactionFilterStationInp'>
                       <input type='text' placeholder='Filter By Station' value={station} onChange={(e) => setStation(e.target.value)}/> 
                    </div>
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
                        <th>Points</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    {transactions.map((transaction,index) => (
                        <tr key={index}>
                            <td>
                                <div className='transactionOwner'>
                                    <img className='transactionOwner-Img' src={TaxIcon} alt='TaxIcon'/>
                                    <div className='transactionOwner-Info'>
                                        <span className='transactionOwner-Name'>{transaction.nomComplet}</span>
                                        <span className='transactionOwner-Job'>Taxi Driver</span>
                                    </div>
                                </div>
                            </td>
                            <td><span>{formatDate(transaction.createdAt)}</span></td>
                            <td><span>{transaction.station}</span></td>
                            <td><span>DH {transaction.ca}</span></td>
                            <td><span>{transaction.qte}L</span></td>
                            <td><span>{transaction.produitAcheter}</span></td>
                            <td><span>{transaction.points}</span></td>
                                <td>
                                    {(() => {
                                        let className, svgContent;

                                        switch (transaction.status) {
                                            case 'Fraud':
                                                className = 'statusDvFrd';
                                                svgContent = (
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#740505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-triangle">
                                                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                                        <line x1="12" y1="9" x2="12" y2="13"></line>
                                                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                                    </svg>
                                                );
                                                break;
                                            case 'Verified':
                                                className = 'statusDv';
                                                svgContent = (
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#034b03" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle">
                                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                    </svg>
                                                );
                                                break;
                                            case 'Encours':
                                                className = 'statusDvenCours';
                                                svgContent = (
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0b3f6c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-loader">
                                                        <line x1="12" y1="2" x2="12" y2="6"></line>
                                                        <line x1="12" y1="18" x2="12" y2="22"></line>
                                                        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                                                        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                                                        <line x1="2" y1="12" x2="6" y2="12"></line>
                                                        <line x1="18" y1="12" x2="22" y2="12"></line>
                                                        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                                                        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                                                    </svg>
                                                );
                                                break;
                                        }

                                        return (
                                            <div className={className}>
                                                {svgContent}
                                                <span>{transaction.status}</span>
                                            </div>
                                        );
                                    })()}
                            </td>
                            <td>
                                <div className='ActionsInfo'>
                                    <div className='ActionDelIcon' onClick={()=> deleteTransaction(transaction._id)}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                        </svg>
                                    </div>
                                    <div className='ActionUpdIcon' onClick={() => handelClickUpdateTransaction(transaction._id)}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3">
                                            <path d="M12 20h9"></path>
                                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                        </svg>
                                    </div>
                                    <div className='ActionMoreInfoIcon' onClick={()=> handelClickImgTransaction(transaction._id)}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="12" y1="16" x2="12" y2="12"></line>
                                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                                        </svg>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                    {/* <tr>
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
                        <td><span>3</span></td>
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
                    </tr> */}
                </table>
            </div>
        </div>
        {newTransaction && <><QrCodeScanner handleClose={handelClickCloseIcon}/></>}
        {updateTransaction && <><UpdateTransaction handleClose={handelClickCloseIcon} transactionId={transactionId}/></>}
        {imgTransaction && <ImgTransaction handleClose={handelClickCloseIcon} transactionId={transactionId}/>}
    </div>
  )
}

export default TransactionUI