import React, { useEffect, useState } from 'react'
import { useContextData } from '../../screen/Screen'
import '../../assets/css/manageUser.css'
import { Link } from 'react-router-dom'
export default function ManageUser() {

    const server = process.env.REACT_APP_SERVER
    const { state, dispatch } = useContextData()

    const [user, setUser] = useState([])

    useEffect(() => {
        console.log('state User', state.user)
        setUser(state.user)
    }, [])
    return (
        <div className="man-cat">
            <h2 className='login'>Manage User</h2>
            <div style={{ display: 'flex', flexDirection: 'row',margin: 10, justifyContent: 'space-around' }}>
                <div>
                    <form action="" method="post">
                        <input type="email" name="email" placeholder="Search by Email" class="serach-bar uppercase" />
                        <button type="submit" className="serach-button" >Search</button>
                    </form>
                </div>
                <div class="searchBar">
                    <form action="" method="post">
                        <input type="number" name="phone" placeholder="Search by Phone" class="serach-bar uppercase" />
                        <button type="submit" className="serach-button" >Search</button>
                    </form>
                </div>
                <div class="searchBar">
                    <form action="" method="post">
                        <input type="text" name="name" placeholder="Search by Name" class="serach-bar uppercase" />
                        <button type="submit" className="serach-button" >Search</button>
                    </form>
                </div>
                <div class="searchBar">
                    <Link to=""><button type="submit" className="serach-button">Today's Birthday Client</button></Link>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                {user.length > 0 && user.map((el, i) => {
                    return <div className="User-Box" style={{}}>
                        <div style={{
                            display: 'flex', justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }}>
                            <img src={`${server}${el.avatar}`} style={{ height: 100, width: 100, margin: 5, borderRadius: 50 }} />

                            <div style={{ textAlign: 'left', margin: 15 }}>
                                <div className='text'>Name : <div className='subtext'>{el.name}</div></div>
                                <div className='text'>Email : <div className='subtext'>{el.email}</div></div>
                                <div className='text'>Phone Number : <div className='subtext'>{el.phoneNo}</div></div>
                                <div className='text'>Birth Date :<div className='subtext'>{el.bday.day}/{el.bday.month}/{el.bday.year}</div></div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div className='activity-content'>
                                    <div className='text'>No. of Likes</div>
                                    <div className='subtext'>{el.likes}</div>
                                </div>
                                <div className='activity-content'>
                                    <div className='text'>No. of Share</div>
                                    <div className='subtext'>{el.shared}</div>
                                </div>
                                <div className='activity-content'>
                                    <div className='text'>Sign Up Date</div>
                                    <div className='subtext'>{el.likes}</div>
                                </div>
                                <div className='activity-content'>
                                    <div className='text'>Last LogIn</div>
                                    <div className='subtext'>{el.likes}</div>
                                </div>
                                <div className='activity-content'>
                                    <div className='text'>Last LogOut</div>
                                    <div className='subtext'>{el.likes}</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div className='btn-container'>
                                    <button className="serach-button" type="submit">Unverify</button>
                                </div>
                                <div className='btn-container'>
                                    <button className="serach-button" type="submit">Delete</button>
                                </div>
                                <div className='btn-container'>
                                    <button className="serach-button" type="submit">Ban</button>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
