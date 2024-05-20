import React, { useEffect, useState } from 'react';
import Logo from '../../assets/images/DailyFlyLogo.png'
import Profile from '../../assets/images/Profile.png'
import '../../assets/css/sideBar.css'
import { Link } from 'react-router-dom';

const SideBar = () => {
    // const [showSubMenu, setShowSubMenu] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    const handleClick = (link) => {
        setActiveLink(link);
    };
    
    useEffect(() => {
        console.log(activeLink)
    }, [activeLink])
    return (
        
        <div className='side-container' 
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>

            <div className='layout-img-container' 
            style={{
                display: 'flex', flexDirection: 'row', justifyContent: 'center',
                alignItems: 'center', marginTop: 10
            }}>
                <img src={Logo} alt='LOGO' className='logo' />
                <div style={{ fontSize: 24, color: 'white', margin: 10, fontWeight: '600', fontFamily: 'sans-serif' }}>Admin Panel</div>

            </div>

            <ul style={{ margin: 0, textDecoration: 'none', listStyle: 'none', padding: 0, width: '100%' }}
            >
            {/*
                <li id="home"
                    className={activeLink === 'home' ? 'active' : 'listItem'}
                    onClick={() => {
                        handleClick('home');
                    }}
                >
                    <Link className='listItem-link' to="">
                        Home
                    </Link>
                </li>

                
                {showSubMenu && (
                    <ul
                        style={{ marginLeft: 15, textDecoration: 'none', listStyle: 'none', padding: 0 }}
                    >
                        <li className={activeLink === 'sublink1' ? 'active' : 'listItem'}
                            onClick={() => handleClick('sublink1')}>
                            Sublink 1
                        </li>
                        <li className={activeLink === 'sublink2' ? 'active' : 'listItem'}
                            onClick={() => handleClick('sublink2')}>
                            Sublink 2
                        </li>
                        <li className={activeLink === 'sublink3' ? 'active' : 'listItem'}
                            onClick={() => handleClick('sublink3')}>
                            Sublink 3
                        </li>
                    </ul>
                )}
            */}
            
            <li className={activeLink === 'up-cat' ? 'active' : 'listItem'}
            id="upload"
            >
            <Link className={activeLink === 'up-cat' ? 'active-link' : 'listItem-link'}
            to="/add-category" onClick={() => handleClick('up-cat')}>
            Upload Category
            </Link></li>
            
            <li className={activeLink === 'man-cat' ? 'active' : 'listItem'} id="upload" >
            <Link className={activeLink === 'man-cat' ? 'active-link' : 'listItem-link'} to="/manage-category" onClick={() => handleClick('man-cat')}>
            Manage Category</Link></li>
            
            <li className={activeLink === 'up-img' ? 'active' : 'listItem'}
                id="upload"
                
            ><Link className={activeLink === 'up-img' ? 'active-link' : 'listItem-link'} to="/upload-images" onClick={() => handleClick('up-img')}>
                    Upload Images
                </Link>
            </li>
            <li className={activeLink === 'man-img' ? 'active' : 'listItem'}
                id="upload"
                
            ><Link className={activeLink === 'man-img' ? 'active-link' : 'listItem-link'} to="/manage-images" onClick={() => handleClick('man-img')}>
                    Manage Images
                </Link>
            </li>
            <li className={activeLink === 'mng-user' ? 'active' : 'listItem'} id="manage_user" >
            <Link className={activeLink === 'mng-user' ? 'active-link' : 'listItem-link'} to="/manage-user" onClick={() => handleClick('mng-user')}>Manage Users</Link></li>
                    
                <li className={activeLink === 'mng-admin' ? 'active' : 'listItem'} id="manage_admin" >
                    <Link className={activeLink === 'mng-admin' ? 'active-link' : 'listItem-link'} to="" onClick={() => handleClick('mng-admin')}>Manage Admin</Link></li>
            </ul>

            <div className='img-cont' style={{
                display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
                alignItems: 'center', marginBottom: 25, borderTop: ' 2px solid #6426cd', width: '100%'
            }}>
                <img src={Profile} alt='Profile' className='logo' style={{ height: 50, width: 50, paddingTop: 10 }} />
                <div style={{ fontSize: 20, color: 'white', margin: 10, fontWeight: '600', fontFamily: 'sans-serif' }}>Your User Name</div>
            </div>
        </div>
    );
}

export default SideBar;