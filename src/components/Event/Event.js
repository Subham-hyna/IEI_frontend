import React, { useState } from 'react'
import './Event.css'
import EventCard from './EventCard/EventCard'
import { FormControl, InputLabel, MenuItem, Modal, Pagination, Select } from '@mui/material'

const Event = ({ role = "user"}) => {
    const [status , setStatus] = useState("ALL");
    const [keyword , setKeyword] = useState("");
    const [page, setPage] = useState(1);
    const [open, setOpen] = React.useState(false);
    const [title , setTitle] = useState();
    const [caption , setcaption] = useState();
    const [link , setLink] = useState();
    const [date , setDate] = useState();
    const [addStatus , setAddStatus] = useState();
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onPageChange = (event, value) => {
        setPage(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const resultPerPage = 9;
    const activitesFilteredCount = 15;
    const events = [
        {
            "image": {
                "public_id": "imageID",
                "url": "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1703942853/WhatsApp_Image_2023-12-30_at_18.56.02_kfcxrt.jpg"
            },
            "_id": "6590109a1adb1bf83308bd9a",
            "title": "Web Hackathon",
            "caption": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            "link": "https://youtube.com",
            "status": "ongoing",
            "date": "17 Sept 2023",
            "photos": [],
            "createdAt": "2023-12-30T12:44:10.587Z",
            "updatedAt": "2023-12-30T12:44:10.587Z",
            "__v": 0
        },
        {
            "image": {
                "public_id": "imageID",
                "url": "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1703942862/WhatsApp_Image_2023-10-24_at_08.22.30_k3owjx.jpg"
            },
            "_id": "659010881adb1bf83308bd97",
            "title": "Cyber Security Workshop",
            "caption": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            "link": "https://youtube.com",
            "status": "ongoing",
            "date": "17 Sept 2023",
            "photos": [],
            "createdAt": "2023-12-30T12:43:52.407Z",
            "updatedAt": "2023-12-30T12:43:52.407Z",
            "__v": 0
        },
        {
            "image": {
                "public_id": "imageID",
                "url": "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1703942853/WhatsApp_Image_2023-12-30_at_18.56.02_kfcxrt.jpg"
            },
            "_id": "6590106e1adb1bf83308bd94",
            "title": "Arduino Workshop",
            "caption": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            "link": "https://youtube.com",
            "status": "past",
            "date": "17 july 2023",
            "photos": [],
            "createdAt": "2023-12-30T12:43:26.840Z",
            "updatedAt": "2023-12-30T12:43:26.840Z",
            "__v": 0
        },
        {
            "image": {
                "public_id": "imageID",
                "url": "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1703942862/WhatsApp_Image_2023-10-24_at_08.22.30_k3owjx.jpg"
            },
            "_id": "659010691adb1bf83308bd91",
            "title": "Arduino Workshop",
            "caption": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            "link": "https://youtube.com",
            "status": "upcoming",
            "date": "17 july 2023",
            "photos": [],
            "createdAt": "2023-12-30T12:43:21.104Z",
            "updatedAt": "2023-12-30T12:43:21.104Z",
            "__v": 0
        },
        {
            "image": {
                "public_id": "imageID",
                "url": "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1703942853/WhatsApp_Image_2023-12-30_at_18.56.02_kfcxrt.jpg"
            },
            "_id": "6590105f1adb1bf83308bd8e",
            "title": "Hackathon",
            "caption": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            "link": "https://youtube.com",
            "status": "upcoming",
            "date": "17 july 2023",
            "photos": [],
            "createdAt": "2023-12-30T12:43:11.823Z",
            "updatedAt": "2023-12-30T12:43:11.823Z",
            "__v": 0
        }
    ];
  return (
    <div className='event'>
        <div className='event-upper'>
            <h1>Innovate, Learn, Create Together</h1>
            <div>
            <FormControl>
              <InputLabel sx={{ color: "rgb(63 41 175)" , fontWeight : "500" , fontSize : "1.1rem"}} >Status</InputLabel>
              <Select
                sx={{ padding: "0 22px 0 5px" , fontWeight : "500"}}
                value={status}
                label="Status"
                onChange={(e)=>{setStatus(e.target.value)}}
              >
                      <MenuItem value="ALL">ALL</MenuItem>
                      <MenuItem value="upcoming">UPCOMING</MenuItem>
                      <MenuItem value="ongoing">ONGOING</MenuItem>
                      <MenuItem value="past">PAST</MenuItem>
                 </Select>
                </FormControl>
            </div>
            <span>
                 <input
                     type="text"
                     value={keyword}
                     placeholder="Search for Events"
                     onChange={(e) => setKeyword(e.target.value)}
                 />
                 <button>Go</button>
             </span>
             { role === "admin" &&<button onClick={handleOpen}>Add Member</button>}
        <Modal
        open={open}
        onClose={handleClose}
      >
        <form className='add-member' onSubmit={handleSubmit}>
      <div>
      <label>Title</label>
      <div>
          <input type='text' value={title} placeholder='Enter Event Title' onChange={(e)=>(setTitle(e.target.value))}/>
      </div>
      </div>
      <div>
      <label>Caption</label>
      <div>
          <textarea value={caption} placeholder='Enter Event Caption' onChange={(e)=>(setcaption(e.target.value))}>{caption}</textarea>
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
      </div>
      </div>
      <div>
      <label>Last Date to apply</label>
      <div>
          <input type='text' value={date} placeholder='Enter Last Date to apply' onChange={(e)=>(setDate(e.target.value))}/>
      </div>
      </div>
      <div>
      <label>Registration Link</label>
      <div>
          <input type='text' value={link} placeholder='Enter Registration link' onChange={(e)=>(setLink(e.target.value))}/>
      </div>
      </div>
      <div>
      <label>Choose Poster Image</label>
      <div>
          <input type='file' />
      </div>
      </div>
      <div>
          <input type='submit' value="Add" />
      </div>
    </form>
      </Modal>
        </div>
        <div className='event-lower'>
            <h1>{status.toUpperCase()} EVENTS</h1>
            <div>
                {events.length > 0 ? 
                events.map((event)=>(
                    <EventCard event={event} key={event._id}/>
                ))    
                :
                <p>No Events Found!!</p>
            }
            </div>
            {activitesFilteredCount > resultPerPage && (
          <Pagination
            count={Math.ceil(activitesFilteredCount / resultPerPage)}
            page={page}
            onChange={onPageChange}
            color="secondary"
            size="large"
          />
        )}
        </div>
    </div>
  )
}

export default Event