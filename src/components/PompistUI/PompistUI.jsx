import React, { useEffect, useState } from 'react'
import './PompistUI.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import PompistIcon from '../Assets/Pompist3d.png'
import axios from 'axios'
import NewPompist from '../NewPompist/NewPompist'
import UpdatePompist from '../UpdatePompist/UpdatePompist'
import { useSelector } from 'react-redux';
import Sopetrole from '../Assets/sopetrole12.png';
import Shell from '../Assets/shell_logo.png';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userRedux';
import { Link } from 'react-router-dom';

const PompistUI = () => {
    const [pompist, setPompist] = useState([]);
    const [stationActuel, setStationActuel] = useState('');
    const [name, setName] = useState("");
    const [searchMode, setSearchMode] = useState(false);
    const [newPompist, setnewPompist] = useState(false);
    const [updPompist, setUpdPompist] = useState(false);
    const [pompistId, setPompistId] = useState();

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSearchFocus = () => {
        setSearchMode(true);
        setStationActuel('');
    };

    const handleSearchBlur = () => {
        setSearchMode(false);
        setName('');
    };
    const handelClickNewPompist = () => {
        setnewPompist(true);
    }
    const handelClickMoreInfoCloseIcon = () => {
        setnewPompist(false);
        setUpdPompist(false);
    };
    const handelClickUpdPompist = (pompistId) => {
        setUpdPompist(true);
        setPompistId(pompistId);
    }

    const currentUser = useSelector((state) => state.user.currentUser);
    const isPompist = currentUser?.isPompist;
    const isSupervisor = currentUser?.isSupervisor;
    const isAdmin = currentUser?.isAdmin;

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!isPompist && !isSupervisor && searchMode && name) {
                    const res = await axios.get(`https://so-petrovisionapi.onrender.com/api/users/search/pompist?name=${name}`);
                    setPompist(res.data);
                } else if (isSupervisor && searchMode && name){
                    const res = await axios.get(`https://so-petrovisionapi.onrender.com/api/users/search/pompist?name=${name}&stationActuel=${currentUser.stationActuel}`);
                    setPompist(res.data);
                }else if ((isPompist || isSupervisor)){
                    const stationQueryParam = currentUser.stationActuel ? `?stationActuel=${currentUser.stationActuel}` : '';
                    const res = await axios.get(`https://so-petrovisionapi.onrender.com/api/users/pompists${stationQueryParam}`);
                    setPompist(res.data);
                }
                else {
                    const stationQueryParam = stationActuel ? `?stationActuel=${stationActuel}` : '';
                    const res = await axios.get(`https://so-petrovisionapi.onrender.com/api/users/pompists${stationQueryParam}`);
                    setPompist(res.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [searchMode, name, stationActuel, isPompist, currentUser.stationActuel]);

    const deletePomist = async (id) => {
        try {
          const res = await axios.delete(`https://so-petrovisionapi.onrender.com/api/users/${id}`);
          console.log(res)
        } catch(err){
            console.log(err)
        }
      };

    const dispatch = useDispatch();
   
    const handleLogoutClick = () => {
      dispatch(logout());
    };
  return (
    <div className='PompistUI'>
        <div className='headerIcons-Pompist'>
            {!isPompist && 
                <>
                    <div className="search-Pompist">
                        <FontAwesomeIcon  className="icon-search-Pompist" icon={faMagnifyingGlass} />
                        <input type='text' placeholder="Search For Pompist..."  id="name4" value={name} onChange={handleNameChange} onFocus={handleSearchFocus} onBlur={handleSearchBlur}/>
                    </div>
                    <div className="bell-Pompist">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                    </div>
                    <div className='addPompistIcon-Pompist' onClick={handelClickNewPompist}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <line x1="20" y1="8" x2="20" y2="14"></line>
                            <line x1="23" y1="11" x2="17" y2="11"></line>
                        </svg>
                    </div>
                </>
            }
            {isPompist && 
                <>
                    <div className='PompistHeaderPhone'>
                        <div className='pompistheaderimages'>
                            <div className='sopImg'>
                                <img src={Sopetrole} alt="sopImg"/>
                            </div>
                            <div className='shellImg'>
                                <img src={Shell} alt="sellImg"/>
                            </div>
                        </div>
                        <div className='navSoPompistMobile'>
                            <div className="addTransaction-Pomp">
                                <Link to='/addTransaction'>
                                    <svg className="pointsBtnPlusIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </Link>
                            </div>
                            <div className='logoutAccountPompist' onClick={handleLogoutClick}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                    <polyline points="16 17 21 12 16 7"></polyline>
                                    <line x1="21" y1="12" x2="9" y2="12"></line>
                                </svg>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
        <div className='filterPompist'>
            {!isPompist && 
                <>
                    <div className='titleFilter-Pompist'>
                        <h2>Filter By</h2>
                    </div>
                    <div className='filterPompistSt'>
                        <div className='titFilterPompistStation'>
                            <h3>Station:</h3>
                        </div>
                        <div className='titFilterPompistStatInp'>
                            <svg className="filterPompistIcon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter">
                                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                            </svg>
                            {isPompist || isSupervisor ? <input type='text' name='station' placeholder='Filter By Station' value={currentUser.stationActuel} disabled/> : <input type='text' name='station' placeholder='Filter By Station' value={stationActuel} onChange={(e)=> setStationActuel(e.target.value)}/>}
                        </div>
                    </div>
                </>
            }
            {isPompist && 
                <>
                    <div className='titleFilter-Pompist'>
                        <h2>Pompistes Station {currentUser.stationActuel}:</h2>
                    </div>
                </>
            }
        </div>
        <div className='cardsDsPompist'>
            {pompist.map((pompist,index)=> ( 
                <>
                    <div className='cardDesignPompist' key={index}>
                        <div className='cardPompisthead'>
                            <div className='cardPompistImg'>
                                <img src={PompistIcon} alt='PompistIcon'/>
                            </div>
                        </div>
                        <div className='cardPompistCt'>
                            <div className='cardPompistCin'>
                                <span>Cin</span>
                                <span>{pompist.cin}</span>
                            </div>
                            <div className='cardPompistTel'>
                                <span>Tel</span>
                                <span>{pompist.telephone}</span>
                            </div>
                        </div>
                        <div className='cardPompistIdentity'>
                            <h5>ST. {pompist.stationActuel}</h5>
                            <h3>{pompist.nomComplet}</h3>
                            <h4>Pompiste</h4>
                            <h4>{pompist.shift}</h4>
                        </div>
                        {!isPompist && 
                            <div className='cardPompistDelUpd'>
                                <div className='cardPompistUpd'>
                                    <svg onClick={() => handelClickUpdPompist(pompist._id)} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b3b3b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3">
                                        <path d="M12 20h9"></path>
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                    </svg>
                                </div>
                                <div className='cardPompistDel'>
                                    <svg onClick={() => deletePomist(pompist._id)} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b3b3b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                </div>
                            </div>
                        }
                    </div>
                </>
            ))}
        </div>
        {isPompist &&
            <div className="Gear">
                <Link to='/Setting'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                </Link>
            </div>
        }
        {newPompist && <><NewPompist handleClose={handelClickMoreInfoCloseIcon}/></>}
        {updPompist && <><UpdatePompist handleClose={handelClickMoreInfoCloseIcon} pompistId={pompistId}/></>}
    </div>
  )
}

export default PompistUI