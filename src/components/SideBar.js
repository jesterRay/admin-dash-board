import React from 'react'
import './dashboard.css'
const SideBar = () => {
  return (
    <div className='side_bar_container'>
        <div className='toggle'>
            <div className='logo'>
                <img src="https://png.pngtree.com/png-vector/20210126/ourmid/pngtree-red-shark-mascot-logo-png-image_2834719.jpg" alt="error" />
                <h2>Admin<span>Board</span></h2>
            </div>
            <div className='btn_close'>
                <span class="material-icons-sharp">
                close
                </span>
            </div>
        </div>
        <div className='side_bar_list_container card'>
            <ul id='side_bar_list'>
                <li className="side_bar_item">
                    <a href="#">
                        <span class="material-icons-sharp">
                        space_dashboard
                        </span>
                        Dashboard
                    </a>
                </li>
                <li className="side_bar_item">
                    <a href="#">
                        <span class="material-icons-sharp">
                        person
                        </span>
                        Users
                    </a>
                </li>
                <li className="side_bar_item">
                    <a href="#">
                        <span class="material-icons-sharp">
                        history
                        </span>
                        History
                    </a>
                </li>
                <li className="side_bar_item">
                    <a href="#">
                        <span class="material-icons-sharp">
                        insights
                        </span>
                        Analytics
                    </a>
                </li>
                <li className="side_bar_item">
                    <a href="#">
                        <span class="material-icons-sharp">
                        report
                        </span>
                        Reports
                    </a>
                </li>
                <li className="side_bar_item">
                    <a href="#">
                        <span class="material-icons-sharp">
                        settings
                        </span>
                        Settings
                    </a>
                </li>
                <li className="side_bar_item">
                    <a href="#">
                        <span class="material-icons-sharp">
                        person_add
                        </span>
                        New Login
                    </a>
                </li>
                <li className="side_bar_item">
                    <a href="#">
                        <span class="material-icons-sharp">
                        logout
                        </span>
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideBar