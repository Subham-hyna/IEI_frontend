import React, { useState } from 'react'
import './Profile.css'
import Overview from './Overview/Overview'
import EditProfile from './EditProfile/EditProfile'
import ChangePassword from './ChangePassword/ChangePassword'
import DeleteAccount from './DeleteAccount/DeleteAccount'
import WestIcon from '@mui/icons-material/West';

const Profile = () => {

    const[activeLink , setActiveLink] = useState('overview');
    const[mobileProfileMenu, setMobileProfileMenu] = useState(false);


    const user = {
        "avatar": {
            public_id: "imageID",
            url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
        },
        "_id": "658d177a048ee58e5b7b3e1b",
        "name": "Swetangshu",
        "email": "test16@gmail.com",
        "phone": 936576523,
        "role": "user",
        "createdAt": "2023-12-28T06:36:42.711Z",
        "updatedAt": "2023-12-28T06:37:32.288Z",
        "__v": 0,
        "institute": "IIT Silchar",
        "semester": "8",
        "year": "2026",
        "department": "Electrical",
        "scholarId" : "2113049"
    }

    const setUpdateActiveLink = (value) => {
        setActiveLink(value);
        setMobileProfileMenu(false);
    }

    const logoutHandler = () => {

    }

  return (
    <section className='profile'>
        <div className='p-main'>
            <div className='p-left' style={{left: mobileProfileMenu ? '0px' : ''}}>
                <ul>
                    <li className={ activeLink === 'overview' ? 'active-link' : ''} onClick={()=>(setUpdateActiveLink('overview'))}>Overview</li>
                    <li className={ activeLink === 'edit Profile' ? 'active-link' : ''} onClick={()=>(setUpdateActiveLink('edit Profile'))}>Edit Profile</li>
                    <li className={ activeLink === 'change Password' ? 'active-link' : ''} onClick={()=>(setUpdateActiveLink('change Password'))}>Change Password</li>
                    <li className={ activeLink === 'delete Account' ? 'active-link' : ''} onClick={()=>(setUpdateActiveLink('delete Account'))}>Delete Account</li>
                    <li onClick={()=>logoutHandler}>Log out</li>
                </ul>
            </div>
            <div className='p-right'>
                <div className='p-upper'>
                    <div className='p-arrow'><WestIcon onClick={()=>{setMobileProfileMenu(true)}} /></div>
                    <span>{activeLink.toUpperCase()}</span>
                </div>
                    <div className='p-lower'>
                           { activeLink === 'overview' &&  <span><Overview user={user} /></span>}
                           { activeLink === 'edit Profile' &&  <span><EditProfile user={user} /></span>}
                           { activeLink === 'change Password' &&  <span><ChangePassword user={user} /></span>}
                           { activeLink === 'delete Account' &&  <span><DeleteAccount user={user} /></span>}
                        </div>
            </div>

        </div>
    </section>
  )
}

export default Profile