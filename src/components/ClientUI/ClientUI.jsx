import React, { useEffect, useState } from 'react'
import './ClientUI.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import TaxIcon from '../Assets/txd3d.png'
import MoreInfoClient from '../MoreInfoClient/MoreInfoClient'
import axios from "axios";
import NewClient from '../newClient/NewClient'
import UpdateClient from '../updateClient/UpdateClient'

const ClientUI = () => {
    const [filterPoints, setFilterPoints] = useState(1);
    const [filterVisites, setFilterVisites] = useState(1);
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [moreInfoClient, setMoreInfoClient] = useState(false);
    const [name, setName] = useState("");
    const [client, setClient] = useState([]);
    const [cltNumeroBon, setcltNumeroBon] = useState();
    const [newClient, setnewClient] = useState(false);
    const [updClient, setupdClient] = useState(false);
    const [searchMode, setSearchMode] = useState(false);

    const handleCheckboxChange = (checkboxNumber) => {
        if (checkboxNumber === 1) {
            setIsChecked1(true);
            setIsChecked2(false);
        } else if (checkboxNumber === 2) {
            setIsChecked1(false);
            setIsChecked2(true);
        }
    };

    const handlePointsQuantity = (type) => {
        if (type === "dec") {
            setFilterPoints(prevPoints => (prevPoints > 1 ? prevPoints - 1 : prevPoints));
        } else {
            setFilterPoints(prevPoints => prevPoints + 1);
        }
    };

    const handleVisitesQuantity = (type) => {
        if (type === "dec") {
            setFilterVisites(prevVisits => (prevVisits > 1 ? prevVisits - 1 : prevVisits));
        } else {
            setFilterVisites(prevVisits => prevVisits + 1);
        }
    };

    const handelClickClient = (clientId) => {
        setMoreInfoClient(true);
        setcltNumeroBon(clientId);
    };
    const handelClickUpdClient = (clientId) => {
        setupdClient(true);
        setcltNumeroBon(clientId);
    }
    const handelClickMoreInfoCloseIcon = () => {
        setMoreInfoClient(false);
        setnewClient(false);
        setupdClient(false);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSearchFocus = () => {
        setSearchMode(true);
        setFilterPoints(1);
        setFilterVisites(1);
        setIsChecked1(false);
        setIsChecked2(false);
    };

    const handleSearchBlur = () => {
        setSearchMode(false);
        setName('');
    };
    const handelClickNewClient = () => {
        setnewClient(true);
    }
    
    useEffect(() => {
        const getClients = async () => {
            let url;
            if (searchMode && name) {
                url = `http://localhost:5000/api/clients/search?name=${name}`;
            } else {
                url = "http://localhost:5000/api/clients/multiFilter?";
                if (isChecked1) {
                    url += "proprietaire=oui&";
                } else if (isChecked2) {
                    url += "proprietaire=non&";
                }
                if (filterPoints !== 1) {
                    url += `totalPoints=${filterPoints}&`;
                }
                if (filterVisites !== 1) {
                    url += `freqVisiteParMois=${filterVisites}&`;
                }
            }

            try {
                const res = await axios.get(url);
                setClient(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getClients();
    }, [name, isChecked1, isChecked2, filterPoints, filterVisites, searchMode]);

    const deleteClient = async (id) => {
        try {
          const res = await axios.delete(`http://localhost:5000/api/clients/${id}`);
          console.log(res)
        } catch(err){
            console.log(err)
        }
      };

  return (
    <div className='clientUI'>
        <div className='headerIcons'>
            <div className="search">
                <FontAwesomeIcon  className="icon-search" icon={faMagnifyingGlass} />
                <input type='text' placeholder="Search For Client..." id="name" value={name} onChange={handleNameChange} onFocus={handleSearchFocus} onBlur={handleSearchBlur} />
            </div>
            <div className="bell">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
            </div>
            <div className='addClientIcon' onClick={handelClickNewClient}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                </svg>
            </div>
        </div>
        <div className='filterClient'>
            <div className='titleFilter'>
                <h2>Filter By</h2>
            </div>
            <div className='filterClientPropritaire'>
                <div className='titFilterCltProp'>
                    <h3>Proprietaire:</h3>
                </div>
                <div className='filterClientPropBtn'>
                    <div className="checkbox-wrapper-1">
                        <input id="example-1" className="substituted" type="checkbox"  checked={isChecked1} onChange={() => handleCheckboxChange(1)}  />
                        <label for="example-1">Oui</label>
                    </div>
                    <div className="checkbox-wrapper-2">
                        <input id="example-2" className="substituted2" type="checkbox"  checked={isChecked2} onChange={() => handleCheckboxChange(2)} />
                        <label for="example-2">Non</label>
                    </div>
                </div>
            </div>
            <div className='filterClientPoint'>
                <div className='titFilterCltPoint'>
                    <h3>TotalPoints:</h3>
                </div>
                <div className='filterClientPointChoice'>
                    <button type="button" className="pointsBtnMinis" onClick={() => handlePointsQuantity("dec")} >
                        <svg className="pointsBtnMinusIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                    <span className="quantityValue">{filterPoints}</span>
                    <button type="button" className="pointsBtnPlus" onClick={() => handlePointsQuantity("inc")} >
                        <svg className="pointsBtnPlusIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                </div>
            </div>
            <div className='filterClientVisite'>
                <div className='titFilterCltVisite'>
                    <h3>TotalVisites:</h3>
                </div>
                <div className='filterClientVistChoice'>
                    <button type="button" className="visitesBtnMinis" onClick={() => handleVisitesQuantity("dec")} >
                        <svg className="visitesBtnMinisIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                    <span className="VissitesValue">{filterVisites}</span>
                    <button type="button" className="visitesBtnPlus" onClick={() => handleVisitesQuantity("inc")} >
                        <svg className="visitesBtnPlusIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div className='cardsDs'>
            {client.map((client,index)=> ( 
                <>
                <div className='cardDesign' key={index}>
                    <div className='cardClienthead'>
                        <div className='cardClientImg'>
                            <img src={TaxIcon} alt='taxIcon'/>
                        </div>
                    </div>
                    <div className='cardClientScoore'>
                        <div className='ClientTotalPoints'>
                            <span>Points</span>
                            <span>{client.totalPoints}</span>
                        </div>
                        <div className='ClientFreqTotalVisite'>
                            <span>Visites</span>
                            <span>{client.freqVisiteParMois}</span>
                        </div>
                    </div>
                    <div className='cardClientIdentity'>
                        <h3>{client.nomComplet}</h3>
                        <h4>Taxi Driver</h4>
                    </div>
                    <div className='cardClientDelUpd'>
                        <div className='cardClientUpd'>
                            <svg width="22" height="22" onClick={() => handelClickUpdClient(client._id)} viewBox="0 0 24 24" fill="none" stroke="#b3b3b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3">
                                <path d="M12 20h9"></path>
                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                            </svg>
                        </div>
                        <div className='cardClientDel'>
                            <svg onClick={() => deleteClient(client._id)} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b3b3b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                        </div>
                        <div className='cardClientMrInfo'>
                            <svg width="22" height="22" onClick={() => handelClickClient(client._id)} viewBox="0 0 24 24" fill="none" stroke="#b3b3b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg>
                        </div>
                    </div>
                </div>
               </>
            ))}
        </div>
        {moreInfoClient && <><MoreInfoClient handleClose={handelClickMoreInfoCloseIcon} clientNumeroBon={cltNumeroBon}/></>}
        {newClient && <><NewClient handleClose={handelClickMoreInfoCloseIcon}/></>}
        {updClient && <><UpdateClient  handleClose={handelClickMoreInfoCloseIcon} clientId={cltNumeroBon}/></>}
    </div>
  )
}

export default ClientUI