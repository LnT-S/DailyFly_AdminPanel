import React, { useEffect, useState } from 'react'
import SideBar from '../sidebar/SideBar'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HamburgerIcon from '@mui/icons-material/Menu'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import '../../assets/css/layout.css'
import { useLocation } from 'react-router-dom'

const AuthenticatedLayout = (props) => {

    const Location = useLocation()
    const [showSidebar, setshowSideBar] = useState(false)
    const [route, setRoute] = useState('')
    const {
        children,
    } = props

    useEffect(() => {
        console.log(Location)
        const currentRoute = Location.pathname.split('/').pop();
        setRoute(currentRoute)
    }, [Location])

    return (
        <div className='layout-maincontainer '>

            {showSidebar ? (<div className='layout-SidePanel'>
                <SideBar />
            </div>) : ''}

            <div className='layout-Container'>

                <div className='layout-header'>
                    <div className='layout-img-container'>
                        <div className='layout-hamburgerIcon-container' onClick={() => setshowSideBar(!showSidebar)}>
                            {showSidebar ? <KeyboardArrowLeft className="hamburger-icon" style={{ fontSize: 30 }} />  :
                            <KeyboardArrowRight className="hamburger-icon" style={{ fontSize: 30 }} />}
                        </div>
                        <div className='layout-header-heading'>DailyFly DashBoard</div>
                    </div>
                    <div className='route-cont'>
                        {route ? route : 'Login Page'}
                    </div>

                    <div className='sign-out-cont'>
                        <ExitToAppIcon style={{ fontSize: 34, color: 'white', fontWeight: '800' }} />
                        <div>
                            Sign out
                        </div>
                    </div>
                </div>

                <div className='children-section'>
                    {children}
                </div>

            </div>
        </div>
    )
}

export default AuthenticatedLayout