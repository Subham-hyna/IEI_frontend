import React from 'react'
import './Activities.css'
import { Link } from 'react-router-dom';

const Activities = () => {
    // const upcomingEvents = [
    //     {
    //         "image": {
    //             "public_id": "imageID",
    //             url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1698591907/jwshol8oo7yy28vbzzym.jpg"
    //         },
    //         "_id": "6590109a1adb1bf83308bd9a",
    //         "title": "Web Hackathon",
    //         "caption": "sdfghjklkhjgfdschjkiuytfrdsfghioiufgdxhjhgghhjhgff",
    //         "link": "https://youtube.com",
    //         "status": "ongoing",
    //         "date": "17 Sept 2023",
    //         "photos": [],
    //         "createdAt": "2023-12-30T12:44:10.587Z",
    //         "updatedAt": "2023-12-30T12:44:10.587Z",
    //         "__v": 0
    //     },
    //     {
    //         "image": {
    //             "public_id": "imageID",
    //             "url": "https://youtube.com"
    //         },
    //         "_id": "659010881adb1bf83308bd97",
    //         "title": "Cyber Security Workshop",
    //         "caption": "sdfghjklkhjgfdschjkiuytfrdsfghioiufgdxhjhgghhjhgff",
    //         "link": "https://youtube.com",
    //         "status": "ongoing",
    //         "date": "17 Sept 2023",
    //         "photos": [],
    //         "createdAt": "2023-12-30T12:43:52.407Z",
    //         "updatedAt": "2023-12-30T12:43:52.407Z",
    //         "__v": 0
    //     },
    //     {
    //         "image": {
    //             "public_id": "imageID",
    //             "url": "https://youtube.com"
    //         },
    //         "_id": "6590106e1adb1bf83308bd94",
    //         "title": "Arduino Workshop",
    //         "caption": "sdfghjklkhjgfdschjkiuytfrdsfghioiufgdxhjhgghhjhgff",
    //         "link": "https://youtube.com",
    //         "status": "past",
    //         "date": "17 july 2023",
    //         "photos": [],
    //         "createdAt": "2023-12-30T12:43:26.840Z",
    //         "updatedAt": "2023-12-30T12:43:26.840Z",
    //         "__v": 0
    //     },
    //     {
    //         "image": {
    //             "public_id": "imageID",
    //             "url": "https://youtube.com"
    //         },
    //         "_id": "659010691adb1bf83308bd91",
    //         "title": "Arduino Workshop",
    //         "caption": "sdfghjklkhjgfdschjkiuytfrdsfghioiufgdxhjhgghhjhgff",
    //         "link": "https://youtube.com",
    //         "status": "past",
    //         "date": "17 july 2023",
    //         "photos": [
    //             {
    //                 "public_id": "1",
    //                 "url": "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1698591907/jwshol8oo7yy28vbzzym.jpg",
    //                 "_id": "65905d3e1f3b6352266d5250"
    //             },
    //             {
    //                 "public_id": "2",
    //                 "url": "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1698591907/jwshol8oo7yy28vbzzym.jpg",
    //                 "_id": "65905d421f3b6352266d5255"
    //             },
    //             {
    //                 "public_id": "3",
    //                 "url": "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1698591907/jwshol8oo7yy28vbzzym.jpg",
    //                 "_id": "65905d461f3b6352266d525c"
    //             },
    //             {
    //                 "public_id": "4",
    //                 "url": "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1698591907/jwshol8oo7yy28vbzzym.jpg",
    //                 "_id": "65905d4a1f3b6352266d5265"
    //             },
    //             {
    //                 "public_id": "5",
    //                 "url": "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1698591907/jwshol8oo7yy28vbzzym.jpg",
    //                 "_id": "65905d4e1f3b6352266d5270"
    //             },
    //             {
    //                 "public_id": "6",
    //                 "url": "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1698591907/jwshol8oo7yy28vbzzym.jpg",
    //                 "_id": "65905d531f3b6352266d527d"
    //             }
    //         ],
    //         "createdAt": "2023-12-30T12:43:21.104Z",
    //         "updatedAt": "2023-12-30T18:11:31.948Z",
    //         "__v": 0
    //     },
    //     {
    //         "image": {
    //             "public_id": "imageID",
    //             "url": "https://youtube.com"
    //         },
    //         "_id": "6590105f1adb1bf83308bd8e",
    //         "title": "Hackathon",
    //         "caption": "sdfghjklkhjgfdschjkiuytfrdsfghioiufgdxhjhgghhjhgff",
    //         "link": "https://youtube.com",
    //         "status": "upcoming",
    //         "date": "17 july 2023",
    //         "photos": [],
    //         "createdAt": "2023-12-30T12:43:11.823Z",
    //         "updatedAt": "2023-12-30T12:43:11.823Z",
    //         "__v": 0
    //     }
    // ];
    const upcomingEvents = [];
  return (
    <div className='activity'>
            <h1>
                {upcomingEvents.length > 0 ?
                    "Upcoming Events"
                    :
                    "EVENTS"
            } 
            </h1>
            <div>
            {upcomingEvents.length > 0 ?
                    upcomingEvents.map((event)=>(
                       <span>
                            <div>NEW</div>
                            <Link to={`/event/${event._id}`} >{event.title}</Link>
                        </span>
                    ))
                    :
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            } 
            </div>
            <Link to={`/events`} ><button>Explore More</button></Link>
    </div>
  )
}

export default Activities