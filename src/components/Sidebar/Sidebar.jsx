import React from 'react';
import './Sidebar.css';
import Sopetrole from '../Assets/sopetrole12.png';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { logout } from '../redux/userRedux';
import { useSelector } from 'react-redux';

const Sidebar = ({ onLogout }) => {

  const currentUser = useSelector((state) => state.user.currentUser);
  const isSupervisor = currentUser?.isSupervisor;

  const getRole = () => {
    if (currentUser.isAdmin) return "Admin";
    if (currentUser.isSupervisor) return "Supervisor";
    if (currentUser.isSupervisorShoop) return "Supervisor Shop";
    if (currentUser.isPompist) return "Pompist";
    return "Client";
  };

  // const dispatch = useDispatch();
   
  // const handleLogoutClick = () => {
  //   dispatch(logout());
  // };
  return (
      <div className="sidebar">
        <div class="head">
          <div class="user-img">
            <img src={Sopetrole} alt="" />
          </div>
          <div class="user-details">
            <p class="title">{getRole()}</p>
            <p class="name">{currentUser.nomComplet}</p>
          </div>
        </div>
        <div class="nav">
          <div class="menu">
            <ul>
              {!isSupervisor &&
                <li>
                  <Link to="/">
                    <svg  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span class="text">Dashboard</span>
                  </Link>
                </li>
              }
              <li>
                <Link to="/Client">
                  <svg  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <span class="text">Client</span>
                </Link>
              </li>
              <li>
                <Link to="/Superviseur">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <span class="text">Superviseur</span>
                </Link>
              </li>
              {!isSupervisor &&
                <li>
                  <Link to="/SuperviseurShop">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <span class="text">Superviseur Shop</span>
                  </Link>
                </li>
              }
              <li>
                <Link to="/Pompist">
                <svg fill="currentColor" height="16" width="16" version="1.1" id="Layer_1" viewBox="0 0 485 485">
                  <g>
                    <g>
                      <g>
                        <path d="M375.935,375.033c-10.498-5.408-22.442-10.275-35.512-14.472c-0.767-0.409-2.272-1.216-4.303-2.33
                          c-16.668-9.184-29.807-17.867-36.12-23.803v-24.286c30.385-17.372,51.163-48.542,57.804-86.695
                          C375.017,218.518,390,202.361,390,187.5c0-15.043-11.308-25.026-30-27.094V150h35v-7.5c0-9.655-8.382-46.807-27.002-47.469
                          C355.397,57.703,326.775,27.87,290,13.748V0h-95v13.748c-36.824,14.137-65.464,43.973-78.033,81.285
                          C98.372,95.74,90,132.851,90,142.5v7.5h35v10.406c-18.692,2.068-30,12.051-30,27.094c0,14.861,14.983,31.019,32.196,35.948
                          c6.647,38.167,27.429,69.336,57.804,86.695v24.285c-6.312,5.936-19.45,14.618-36.106,23.795c-2.06,1.13-3.577,1.943-4.338,2.349
                          c-13.408,4.401-25.363,9.341-35.485,14.658c-62.571,32.182-64.037,75.318-64.069,77.139L45,485h395v-32.537
                          C439.991,450.626,439.051,407.119,375.935,375.033z M340,376.218c9.011,3.058,17.38,6.448,25,10.127V430h-25V376.218z M375,187.5
                          c0,6.126-6.627,14.467-15.266,19.07c0.165-2.964,0.266-31.088,0.266-31.088C373.367,177.356,375,184.268,375,187.5z M290,29.958
                          C318.457,42.536,340.807,65.964,352.045,95H290V29.958z M210,15h65v80h-65V15z M195,29.956V95h-62.081
                          C144.134,65.976,166.5,42.545,195,29.956z M110,187.5c0-3.232,1.633-10.144,15-12.018c0,0,0.101,28.125,0.266,31.088
                          C116.627,201.966,110,193.626,110,187.5z M105.912,135c2.285-10.771,8.315-23.686,11.757-25h249.662
                          c3.442,1.314,9.472,14.229,11.757,25H105.912z M141.227,216.156C140.413,210.366,140,204.09,140,197.5V150h205v47.5
                          c0,6.59-0.413,12.866-1.229,18.674c-5.158,37.347-25.101,67.55-54.733,82.874C275.075,306.315,259.417,310,242.5,310
                          s-32.575-3.685-46.555-10.962C166.331,283.724,146.388,253.521,141.227,216.156z M285,317.299v17.312
                          C279.87,339.974,263.613,355,242.5,355c-20.977,0-37.346-15.055-42.5-20.404v-17.298c13.182,5.108,27.424,7.702,42.5,7.702
                          C257.579,325,271.824,322.405,285,317.299z M160,369.204c9.754-5.509,23.203-13.621,32.241-21.169
                          C200.885,356.174,219.023,370,242.5,370s41.615-13.826,50.259-21.966c9.035,7.546,22.48,15.656,32.241,21.169V430H160V369.204z
                          M120,386.509c7.426-3.641,15.798-7.078,25-10.258V430h-25V386.509z M90.2,470H60v-17.37c0.093-2.065,2.189-31.708,45-57.922
                          V430.2c-8.466,1.22-15,8.502-15,17.3v20C90,468.351,90.082,469.181,90.2,470z M380,467.5c0,1.355-1.145,2.5-2.5,2.5h-270
                          c-1.355,0-2.5-1.145-2.5-2.5v-20c0-1.355,1.145-2.5,2.5-2.5h270c1.355,0,2.5,1.145,2.5,2.5V467.5z M425,470h-30.2
                          c0.118-0.819,0.2-1.649,0.2-2.5v-20c0-8.798-6.534-16.081-15-17.3v-35.764c43.445,26.306,44.951,56.392,45,58.136V470z"/>
                        <path d="M242.5,255h20v-15H250v-32.5h-15v40C235,251.642,238.358,255,242.5,255z"/>
                      </g>
                    </g>
                  </g>
                  </svg>
                  <span class="text">Pompiste</span>
                </Link>
              </li>
              <li>
                <Link to="/Transaction">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                  <span class="text">Transaction</span>
                </Link>
              </li>
              {!isSupervisor &&
                <li>
                  <Link to="/Shop">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <span class="text">Shop</span>
                  </Link>
                </li>
              }
            </ul>
          </div>
          <div class="menu">
            <ul>
              {!isSupervisor &&
                <li>
                  <Link to="/PowerBIAccessToken">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                    <span class="text">PowerBI</span>
                  </Link>
                </li>
              }
              <li>
                <Link to="/Setting">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                  </svg>
                  <span class="text">Settings</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="menu">
          <ul>
            <li onClick={onLogout}>
              <Link to="/Logout">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                <span class="text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Sidebar