import React, { useState } from 'react'
import './TeamCard.css'
import insta from '../../../assets/insta_blackwhite.png'
import facebook from '../../../assets/facebook_blackwhite.png'
import linkedIn from '../../../assets/linkedin_blackwhite.png'
import { Modal } from '@mui/material'

const TeamCard = ({ member , role = "admin" }) => {
    const [open, setOpen] = useState(false);
    const [name , setName] = useState(member.name);
    const [post , setPost] = useState(member.post);
    const [memberYear , setMemberYear] = useState();
    const [fy , setFy] = useState();
    const [fblink , setFblink] = useState(member.facebook);
    const [instalink , setInsta] = useState(member.insta);
    const [linkedInlink , setLinkedIn] = useState(member.linkedIn);
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div className='team-card'>
        <img src={member.avatar.url} alt='member_pic' />
        <h1>{member.name}</h1>
        <h2>{member.post}</h2>
        <div>
            <a href={member.facebook}><img src={facebook} alt='fb_logo' /></a>
            <a href={member.linkedIn}><img src={linkedIn} alt='fb_logo' /></a>
            <a href={member.insta}><img src={insta} alt='fb_logo' /></a>
        </div>
        { role === "admin" && <span>
            <button onClick={handleOpen}>Edit</button>
            <Modal
        open={open}
        onClose={handleClose}
      >
        <div className='edit-member'>
      <div>
      <label>Name</label>
      <div>
          <input type='text' value={name} placeholder='Enter Member Name' onChange={(e)=>(setName(e.target.value))}/>
          <button>Update</button>
      </div>
      </div>
      <div>
      <label>Post</label>
      <div>
          <input type='text' value={post} placeholder='Enter Member Post' onChange={(e)=>(setPost(e.target.value))}/>
          <button>Update</button>
      </div>
      </div>
      <div>
      <label>Member Year</label>
      <div>
          <select value={memberYear} onChange={(e)=>(setMemberYear(e.target.value))}>
            <option value="" >Set Member Year</option>
            <option value="1" >1st</option>
            <option value="2" >2nd</option>
            <option value="3" >3rd</option>
            <option value="4" >4th</option>
          </select>
          <button>Update</button>
      </div>
      </div>
      <div>
      <label>Financial Year</label>
      <div>
          <select value={fy} onChange={(e)=>(setFy(e.target.value))}>
            <option value="" >Set Financial Year</option>
            <option value="22" >2022-23</option>
            <option value="23" >2023-24 </option>
            <option value="24" >2024-25</option>
          </select>
          <button>Update</button>
      </div>
      </div>
      <div>
      <label>Facebook Link</label>
      <div>
          <input type='text' value={fblink} placeholder='Enter Member facebook link' onChange={(e)=>(setFblink(e.target.value))}/>
          <button>Update</button>
      </div>
      </div>
      <div>
      <label>Instagram Link</label>
      <div>
          <input type='text' value={instalink} placeholder='Enter Member insta link' onChange={(e)=>(setInsta(e.target.value))}/>
          <button>Update</button>
      </div>
      </div>
      <div>
      <label>LinkedIn Link</label>
      <div>
          <input type='text' value={linkedInlink} placeholder='Enter Member linkedIn link' onChange={(e)=>(setLinkedIn(e.target.value))}/>
          <button>Update</button>
      </div>
      </div>
      <div>
      <label>Choose Profile Photo</label>
      <div>
          <input type='file' />
          <button>Update</button>
      </div>
      </div>
    </div>
      </Modal>
            <button>Delete</button>
            </span>}
    </div>
  )
}

export default TeamCard