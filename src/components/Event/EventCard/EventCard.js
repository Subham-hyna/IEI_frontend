import React, { useState } from 'react'
import './EventCard.css'
import { Link } from 'react-router-dom'
import { Modal } from '@mui/material';

const EventCard = ({event , role="user"}) => {
    const [open, setOpen] = React.useState(false);
    const [title , setTitle] = useState();
    const [caption , setcaption] = useState("");
    const [link , setLink] = useState();
    const [date , setDate] = useState();
    const [addStatus , setAddStatus] = useState();
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div className='event-card'>
        <Link to = {`/event/${event._id}`} >
            <img src={event.image.url} alt={event.title.substr(0,6)} />
        </Link>
        <div>
            {event.status !== "past" && <h3 className='blink'>{event.status.toUpperCase()}</h3>}
            <h1>{event.title}</h1>
            <h2>{event.date}</h2>
            <p>{event.caption.substr(0,200)}...</p>
            <Link to = {`/event/${event._id}`}>Click here to view more</Link>
        </div>
        { role === "admin" && <span>
            <button onClick={handleOpen}>Edit</button>
            <Modal
        open={open}
        onClose={handleClose}
      >
        <div className='edit-member'>
      <div>
      <label>Title</label>
      <div>
          <input type='text' value={title} placeholder='Enter Event Title' onChange={(e)=>(setTitle(e.target.value))}/>
          <button>update</button>
      </div>
      </div>
      <div>
      <label>Caption</label>
      <div>
          <textarea value={caption} placeholder='Enter Event Caption' onChange={(e)=>(setcaption(e.target.value))}>{caption}</textarea>
          <button>update</button>
      </div>
      </div>
      <div>
      <label>Status</label>
      <div>
          <select value={addStatus} onChange={(e)=>(setAddStatus(e.target.value))}>
            <option value="" >Set Status of the Event</option>
            <option value="upcoming" >UPCOMING</option>
            <option value="ongoing" >ONGOING </option>
            <option value="past" >PAST</option>
          </select>
          <button>update</button>
      </div>
      </div>
      <div>
      <label>Last Date to apply</label>
      <div>
          <input type='text' value={date} placeholder='Enter Last Date to apply' onChange={(e)=>(setDate(e.target.value))}/>
          <button>update</button>
      </div>
      </div>
      <div>
      <label>Registration Link</label>
      <div>
          <input type='text' value={link} placeholder='Enter Registration link' onChange={(e)=>(setLink(e.target.value))}/>
          <button>update</button>
      </div>
      </div>
      <div>
      <label>Choose Poster Image</label>
      <div>
          <input type='file' />
          <button>update</button>
      </div>
      </div>
      <div>
      <label>Add Event Photo</label>
      <div>
          <input type='file' />
          <button>Add</button>
      </div>
      </div>
    </div>
      </Modal>
            <button>Delete</button>
            </span>}
    </div>
  )
}

export default EventCard