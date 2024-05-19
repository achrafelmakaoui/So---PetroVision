import React, { useEffect, useState } from 'react'
import './SuperviseurUI.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import SupIcon from '../Assets/sup3d.png'
import axios from "axios";
import NewSuperviseur from '../newSuperviseur/NewSuperviseur'
import UpdateSuperviseur from '../updateSuperviseur/UpdateSuperviseur'

const SupervisuerUI = () => {
    const [supervisor, setSupervisor] = useState([]);
    const [stationActuel, setStationActuel] = useState('');
    const [name, setName] = useState("");
    const [searchMode, setSearchMode] = useState(false);
    const [newSuperviseur, setnewSuperviseur] = useState(false);
    const [UpdSuperviseur, setUpdSuperviseur] = useState(false);
    const [superviseurId, setSuperviseurId] = useState();

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
    const handelClickNewSuperviseur = () => {
        setnewSuperviseur(true);
    }
    const handelClickMoreInfoCloseIcon = () => {
        setnewSuperviseur(false);
        setUpdSuperviseur(false);
    };
    const handelClickUpdSupervisor = (superviseurId) => {
        setUpdSuperviseur(true);
        setSuperviseurId(superviseurId);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (searchMode && name) {
                    const res = await axios.get(`http://localhost:5000/api/users/search?name=${name}`);
                    setSupervisor(res.data);
                } else {
                    const stationQueryParam = stationActuel ? `?stationActuel=${stationActuel}` : '';
                    const res = await axios.get(`http://localhost:5000/api/users/supervisors${stationQueryParam}`);
                    setSupervisor(res.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [searchMode, name, stationActuel]);

    const deleteSupervisor = async (id) => {
        try {
          const res = await axios.delete(`http://localhost:5000/api/users/${id}`);
          console.log(res)
        } catch(err){
            console.log(err)
        }
      };
    
  return (
    <div className='SupervisuerUI'>
        <div className='headerIcons-sup'>
            <div className="search-sup">
                <FontAwesomeIcon  className="icon-search-sup" icon={faMagnifyingGlass} />
                <input type='text' placeholder="Search For Superviseur..." id="name2" value={name} onChange={handleNameChange} onFocus={handleSearchFocus} onBlur={handleSearchBlur}/>
            </div>
            <div className="bell-sup">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
            </div>
            <div className='addSupIcon-sup' onClick={handelClickNewSuperviseur}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                </svg>
            </div>
        </div>
        <div className='filterSup'>
            <div className='titleFilter-sup'>
                <h2>Filter By</h2>
            </div>
            <div className='filterSupSt'>
                <div className='titFilterSupStation'>
                    <h3>Station:</h3>
                </div>
                <div className='titFilterSupStatInp'>
                    <svg className="filterSupervisorIcon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter">
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                    </svg>
                    <input type='text' name='station' placeholder='Filter By Station' value={stationActuel} onChange={(e) => setStationActuel(e.target.value)}/>
                </div>
            </div>
        </div>
        <div className='cardsDsSup'>
            {supervisor.map((supervisor,index)=> ( 
                <>
                <div className='cardDesignSup' key={index}>
                    <div className='cardSuphead'>
                        <div className='cardSupImg'>
                            <img src={SupIcon} alt='SupIcon'/>
                        </div>
                    </div>
                    <div className='cardSupCt'>
                        <div className='cardSupCin'>
                            <span>Cin</span>
                            <span>{supervisor.cin}</span>
                        </div>
                        <div className='cardSupTel'>
                            <span>Tel</span>
                            <span>{supervisor.telephone}</span>
                        </div>
                    </div>
                    <div className='cardSupIdentity'>
                        <h5>ST. {supervisor.stationActuel}</h5>
                        <h3>{supervisor.nomComplet}</h3>
                        <h4>Superviseur</h4>
                    </div>
                    <div className='cardSupDelUpd'>
                        <div className='cardSupUpd'>
                            <svg onClick={() => handelClickUpdSupervisor(supervisor._id)} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b3b3b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3">
                                <path d="M12 20h9"></path>
                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                            </svg>
                        </div>
                        <div className='cardSupDel'>
                            <svg onClick={() => deleteSupervisor(supervisor._id)} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b3b3b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
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
        {newSuperviseur && <><NewSuperviseur handleClose={handelClickMoreInfoCloseIcon}/></>}
        {UpdSuperviseur && <><UpdateSuperviseur handleClose={handelClickMoreInfoCloseIcon} superviseurId={superviseurId}/></>}
    </div>
  )
}

export default SupervisuerUI