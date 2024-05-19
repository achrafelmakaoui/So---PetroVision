import React, { useEffect, useState } from 'react'
import './PompistUI.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import PompistIcon from '../Assets/Pompist3d.png'
import axios from 'axios'
import NewPompist from '../NewPompist/NewPompist'
import UpdatePompist from '../UpdatePompist/UpdatePompist'

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (searchMode && name) {
                    const res = await axios.get(`http://localhost:5000/api/users/search/pompist?name=${name}`);
                    setPompist(res.data);
                } else {
                    const stationQueryParam = stationActuel ? `?stationActuel=${stationActuel}` : '';
                    const res = await axios.get(`http://localhost:5000/api/users/pompists${stationQueryParam}`);
                    setPompist(res.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [searchMode, name, stationActuel]);

    const deletePomist = async (id) => {
        try {
          const res = await axios.delete(`http://localhost:5000/api/users/${id}`);
          console.log(res)
        } catch(err){
            console.log(err)
        }
      };

  return (
    <div className='PompistUI'>
        <div className='headerIcons-Pompist'>
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
        </div>
        <div className='filterPompist'>
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
                    <input type='text' name='station' placeholder='Filter By Station' value={stationActuel} onChange={(e) => setStationActuel(e.target.value)}/>
                </div>
            </div>
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
                            <h4>Pompist</h4>
                            <h4>{pompist.shift}</h4>
                        </div>
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
                    </div>
                </>
            ))}
        </div>
        {newPompist && <><NewPompist handleClose={handelClickMoreInfoCloseIcon}/></>}
        {updPompist && <><UpdatePompist handleClose={handelClickMoreInfoCloseIcon} pompistId={pompistId}/></>}
    </div>
  )
}

export default PompistUI