import React, { useState } from "react";
import "./Gallery.css";
import { Modal, Pagination } from "@mui/material";
import GalleryCard from "./GalleryCard/GalleryCard";

const Gallery = ({ role = "user" }) => {
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState();

  const onPageChange = (event, value) => {
    setPage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const resultPerPage = 9;
  const activitesFilteredCount = 150;
  const activites = [
    {
      image: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/salvatore-tonnara-_jUQyGhJWcI-unsplash_usyvws.jpg",
      },
      _id: "65859c9e306ef4a0bc6c6a69",
      title: "workshop",
      createdAt: "2023-12-22T14:26:38.373Z",
      updatedAt: "2023-12-22T14:26:38.373Z",
      __v: 0,
    },
    {
      image: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184399/image6_kotizm.jpg",
      },
      _id: "65859c9e306ef4a0bc6c6a69",
      title: "workshop",
      createdAt: "2023-12-22T14:26:38.373Z",
      updatedAt: "2023-12-22T14:26:38.373Z",
      __v: 0,
    },
    {
      image: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184399/image5_vsojvb.jpg",
      },
      _id: "65859c9e306ef4a0bc6c6a69",
      title: "workshop",
      createdAt: "2023-12-22T14:26:38.373Z",
      updatedAt: "2023-12-22T14:26:38.373Z",
      __v: 0,
    },
    {
      image: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1698591907/jwshol8oo7yy28vbzzym.jpg",
      },
      _id: "65859c9e306ef4a0bc6c6a69",
      title: "workshop",
      createdAt: "2023-12-22T14:26:38.373Z",
      updatedAt: "2023-12-22T14:26:38.373Z",
      __v: 0,
    },
    {
      image: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184398/image1_slvxnl.jpg",
      },
      _id: "65859c4ae41510a14c5ba3be",
      title: "robot",
      createdAt: "2023-12-22T14:25:14.400Z",
      updatedAt: "2023-12-22T14:25:14.400Z",
      __v: 0,
    },
    {
      image: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184398/image3_rre9hk.jpg",
      },
      _id: "65859c14e41510a14c5ba3bb",
      title: "arduino",
      createdAt: "2023-12-22T14:24:20.913Z",
      updatedAt: "2023-12-22T14:24:20.913Z",
      __v: 0,
    },
    {
      image: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/neom-CkOVB0H97kc-unsplash_gutpem.jpg",
      },
      _id: "65859c14e41510a14c5ba3bb",
      title: "arduino",
      createdAt: "2023-12-22T14:24:20.913Z",
      updatedAt: "2023-12-22T14:24:20.913Z",
      __v: 0,
    },
    {
      image: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184399/image4_ezmsk6.jpg",
      },
      _id: "65859c14e41510a14c5ba3bb",
      title: "arduino",
      createdAt: "2023-12-22T14:24:20.913Z",
      updatedAt: "2023-12-22T14:24:20.913Z",
      __v: 0,
    },
    {
      image: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184399/image6_kotizm.jpg",
      },
      _id: "65859c14e41510a14c5ba3bb",
      title: "arduino",
      createdAt: "2023-12-22T14:24:20.913Z",
      updatedAt: "2023-12-22T14:24:20.913Z",
      __v: 0,
    },
  ];

  return (
    <div className="gallery">
      <h1>GALLERY</h1>
      <p>
        Explore the achievements and milestones IEI student chapter NIT Silchar
        has achieved.
      </p>
      <div>
        <input
          type="text"
          value={keyword}
          placeholder="Search for Events"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button>Go</button>
        {role === "admin" && (
          <i>
            <button onClick={handleOpen}>Add Photo</button>
          </i>
        )}
        <Modal open={open} onClose={handleClose}>
          <form className="add-member" onSubmit={handleSubmit}>
            <div>
              <label>Title</label>
              <div>
                <input
                  type="text"
                  value={title}
                  placeholder="Enter tags"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label>Choose Profile Photo</label>
              <div>
                <input type="file" />
              </div>
            </div>
            <div>
              <input type="submit" value="Add" />
            </div>
          </form>
        </Modal>
      </div>
      <span className="activities">
        {activites.length > 0 ? (
          activites.map((activity) => (
            <GalleryCard activity={activity} />
          ))
        ) : (
          <p>No such Events</p>
        )}
      </span>
      <span>
        {activitesFilteredCount > resultPerPage && (
          <Pagination
            count={Math.ceil(activitesFilteredCount / resultPerPage)}
            page={page}
            onChange={onPageChange}
            color="secondary"
            size="large"
          />
        )}
      </span>
    </div>
  );
};

export default Gallery;
