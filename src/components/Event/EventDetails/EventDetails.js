import React from 'react'
import './EventDetails.css'
import { Modal } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";

const EventDetails = ({ role = "user" }) => {
    const [open, setOpen] = React.useState(false);
    
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const event ={
        "image": {
            "public_id": "imageID",
            "url": "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1703942862/WhatsApp_Image_2023-10-24_at_08.22.30_k3owjx.jpg"
        },
        "_id": "659010691adb1bf83308bd91",
        "title": "Arduino Workshop",
        "caption": "sdfghjklkhjgfdschjkiuytfrdsfghioiufgdxhjhgghhjhgff",
        "link": "https://youtube.com",
        "status": "upcoming",
        "date": "17 july 2023",
        "photos": [
            {
                "public_id": "1",
                "url": "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1698591907/jwshol8oo7yy28vbzzym.jpg",
                "_id": "65905d3e1f3b6352266d5250"
            },
            {
                "public_id": "2",
                "url": "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1698591907/jwshol8oo7yy28vbzzym.jpg",
                "_id": "65905d421f3b6352266d5255"
            },
            {
                "public_id": "3",
                "url": "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1698591907/jwshol8oo7yy28vbzzym.jpg",
                "_id": "65905d461f3b6352266d525c"
            },
            {
                "public_id": "4",
                "url": "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1698591907/jwshol8oo7yy28vbzzym.jpg",
                "_id": "65905d4a1f3b6352266d5265"
            },
            {
                "public_id": "5",
                "url": "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1698591907/jwshol8oo7yy28vbzzym.jpg",
                "_id": "65905d4e1f3b6352266d5270"
            },
            {
                "public_id": "6",
                "url": "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1698591907/jwshol8oo7yy28vbzzym.jpg",
                "_id": "65905d531f3b6352266d527d"
            }
        ],
        "createdAt": "2023-12-30T12:43:21.104Z",
        "updatedAt": "2023-12-30T18:11:31.948Z",
        "__v": 0
    };

  return (
    <div className='event-details'>
        <div className='event-details-upper'>
             <img src={event.image.url} alt={event.title} />
             <div>
             {event.status !== "past" && <h3 className='blink'>{event.status.toUpperCase()}</h3>}
             <h1>{event.title}</h1>
             <textarea readOnly>{event.caption}</textarea>
             {event.status === "upcoming" && 
             <div>
                <div>
                    <h4>Registration Link</h4>
                    <a href={event.link} target='_'>{event.link}</a>
                </div>
                <div>
                    <h4>Last Date to apply</h4>
                    <p>{event.date}</p>
                </div>
             </div>
             }
             </div>
        </div>
        <div className='event-details-lower'>
            <span>Event Photos</span>
            <div>
            { event.photos.length > 0 ?
                event.photos.map((photo)=>(
                    <div>
                        <img src={photo.url} alt={event.title} onClick={handleOpen} />
                        {role === "admin" && (
                            <i>
                        <DeleteIcon />
                        </i>
                        )}
                        <Modal
                        open={open}
                        onClose={handleClose}
                        >
                        <div className="gallery-card-modal">
                        <img src={photo.url} alt={photo.public_id} />
                    </div>
                    </Modal>
                    </div>
                ))
            :
            <p>No Photos Available</p>}
            </div>
        </div>
    </div>
  )
}

export default EventDetails