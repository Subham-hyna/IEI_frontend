import React from 'react'
import './Overview.css'
import { Modal } from '@mui/material';

const Overview = ({ user  }) => {
    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div className='overview'>
        <div className='o-left'>
            <div>
                <p>Name</p>
                <span>{user.name}</span>
            </div>
            <div>
                <p>Email</p>
                <span>{user.email}</span>
            </div>
            <div>
                <p>Phone</p>
                <span>{user.phone}</span>
            </div>
            <div>
                <p>{user.scholarId && "Scholar ID"}</p>
                <span>{user.scholarId && user.scholarId }</span>
            </div>
            <div>
                <p>{user.year && "Year of Passing"}</p>
                <span>{user.year && user.year }</span>
            </div>
            <div>
                <p>{user.department && "Department"}</p>
                <span>{user.department && user.department}</span>
            </div>
            <div>
                <p>{user.semester && "Semester"}</p>
                <span>{user.semester && user.semester}</span>
            </div>
            <div>
                <p>{user.institute && "Institute"}</p>
                <span>{user.institute && user.institute}</span>
            </div>
            <div>
                <p>Joined On</p>
                <span>{user.createdAt.substr(0, 10) }</span>
            </div>
        </div>
        <div className='o-right'>
            <img src={user.avatar.url} alt='profile_pic' />
            <button onClick={handleOpen}>Edit Profile Pic</button>
            <Modal
        open={open}
        onClose={handleClose}
      >
        <div className='profile-modal'>
        <label>Choose Profile Photo</label>
        <input type='file' />
        <button>Update</button>
        </div>
      </Modal>
        </div>
    </div>
  )
}

export default Overview