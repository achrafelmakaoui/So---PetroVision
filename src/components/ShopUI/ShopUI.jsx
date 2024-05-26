import React, { useEffect, useState } from 'react'
import './ShopUI.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import CoffeeIcon from '../Assets/coffee.png'
import FtourIcon from '../Assets/breakfast.png'
import OiIcon from '../Assets/oilicon3d.png'
import axios from 'axios'
import UpdateShop from '../UpdateShop/UpdateShop'
import NewShop from '../newShop/NewShop'
import RecipShoop from '../RecipShop/RecipShoop'

const ShopUI = () => {
    const [shops, setShops] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [mois, setMois] = useState();
    const [jour, setJour] = useState();
    const [station, setStation] = useState('');
    const [typeShoop, setTypeShoop] = useState('');
    const [numeroBon, setNumeroBon] = useState();
    const [shoopId, setShoopId] = useState();
    const [updateShoop, setUpdateShoop] = useState(false);
    const [searchMode, setSearchMode] = useState(false);
    const [newShop, setNewShop] = useState(false);
    const [recipShop, setRecipShop] = useState(false);

    const formatDate = (dateString) => {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    };

    const deleteShoop = async (id) => {
        try {
          const res = await axios.delete(`http://localhost:5000/api/shoop/${id}`);
          console.log(res)
        } catch(err){
            console.log(err)
        }
    };

    useEffect(() => {
        const getShops = async () => {
            let url;
            if (searchMode && searchQuery) {
                url = `http://localhost:5000/api/shoop/search?name=${searchQuery}`;
            } else {
                url = "http://localhost:5000/api/shoop/multiFilter?";
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
                if (typeShoop) {
                    queryParams.push(`typeShoop=${typeShoop}`);
                }
                
                if (queryParams.length > 0) {
                    url += queryParams.join('&');
                }
            }
            try {
                const res = await axios.get(url);
                setShops(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getShops();
    }, [searchQuery,mois,jour,station,numeroBon,typeShoop,searchMode]);

    const handelClickUpdateShoop = (ShoopId) => {
        setUpdateShoop(true);
        setShoopId(ShoopId)
    }
    const handelClickRecipShop = (shopId) => {
        setShoopId(shopId);
        setRecipShop(true);
    }
    const handelClickCloseIcon = () => {
        setNewShop(false);
        setUpdateShoop(false);
        setRecipShop(false);
    };
    const handleSearchFocus = () => {
        setSearchMode(true);
        setNumeroBon(false);
        setMois(false);
        setJour(false);
        setTypeShoop('');
        setStation('');
    };

    const handleSearchBlur = () => {
        setSearchMode(false);
        setSearchQuery('');
    };
    const handelClickNewShop = () => {
        setNewShop(true);
    };
  return (
    <div className='ShopUI'>
        <div className='headershopIcons'>
            <div className="search">
                <FontAwesomeIcon  className="icon-search" icon={faMagnifyingGlass} />
                <input type='text' placeholder="Search By Client..." id='name' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={handleSearchFocus} onBlur={handleSearchBlur} />
            </div>
            <div className="bell">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
            </div>
            <div className='shopBag' onClick={handelClickNewShop}>
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
            </div>
        </div>
        <div className='shopTable'>
            <div className='filtershop'>
                <div className="search-shop">
                    <div className='serachShoopByNumeroBon'>
                        <input type='number' placeholder="Filter By N° bon..." min={0} value={numeroBon} onChange={(e) => setNumeroBon(e.target.value)}/>
                    </div>
                </div>
                <div className='shopFilterMois'>
                    <div className='shopFilterMoisSel'>
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
                <div className='shopFilterJour'>
                    <div className='shopFilterJourSel'>
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
                <div className='shopFilterStatus'>
                    <div className='shopFilterStatusSel'>
                       <select name="status" value={typeShoop} onChange={(e) => setTypeShoop(e.target.value)}>
                            <option>
                                Filter By typeShoop
                            </option>
                            <option value='Shop'>Shop</option>
                            <option value='Gift'>Gift</option>
                        </select>
                    </div>
                </div>
                <div className='shopFilterStation'>
                    <div className='shopFilterStationInp'>
                       <input type='text' placeholder='Filter By Station' value={station} onChange={(e) => setStation(e.target.value)}/> 
                    </div>
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
                    {shops.map((shop,index) => (
                        <tr key={index}>
                            <td>
                                <div className='shopOwner'>
                                    {/* <img className='shopOwner-Img' src={CoffeeIcon} alt='itemShop'/>
                                    <img className='shopOwner-Img' src={FtourIcon} alt='itemShop'/> */}
                                    <img
                                        className='shopOwner-Img' 
                                        src={shop.shoop === 'Coffee' ? CoffeeIcon : shop.shoop === 'Ftour beldi' ? FtourIcon : shop.shoop === 'Shell Oil' ? OiIcon : CoffeeIcon} 
                                        alt='itemShop'
                                    />
                                    <div className='shopOwner-Info'>
                                        <span className='shopOwner-Name'>{shop.nomComplet}</span>
                                        <span className='shopOwner-Job'>{shop.shoop}</span>
                                    </div>
                                </div>
                            </td>
                            <td><span>{formatDate(shop.createdAt)}</span></td>
                            <td><span>{shop.station}</span></td>
                            <td><span>{shop.typeShoop}</span></td>
                            <td><span>{shop.pointShoop}</span></td>
                            <td>
                                <div className='ActionsInfo'>
                                    <div className='ActionDelIcon' onClick={()=> deleteShoop(shop._id)}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                        </svg>
                                    </div>
                                    <div className='ActionUpdIcon' onClick={() => handelClickUpdateShoop(shop._id)}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3">
                                            <path d="M12 20h9"></path>
                                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                        </svg>
                                    </div>
                                    <div className='ActionMoreInfoIcon' onClick={()=> handelClickRecipShop(shop._id)}>
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
                    </tr> */}
                </table>
            </div>
        </div>
        {newShop && <><NewShop handleClose={handelClickCloseIcon}/></>}
        {updateShoop && <UpdateShop handleClose={handelClickCloseIcon} shopId={shoopId}/>}
        {recipShop && <RecipShoop handleClose={handelClickCloseIcon} shopId={shoopId} />}
    </div>
  )
}

export default ShopUI