import React, { useState } from "react";
import "./Team.css";
import TeamCard from "./TeamCard/TeamCard";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Tilt from 'react-parallax-tilt'
import { Modal } from "@mui/material";

const Team = ({ role = "user"}) => {
  const [year, setYear] = useState("23");
  const [open, setOpen] = useState(false);
  const [name , setName] = useState();
  const [post , setPost] = useState();
  const [memberYear , setMemberYear] = useState();
  const [fy , setFy] = useState();
  const [fblink , setFblink] = useState();
  const [instalink , setInsta] = useState();
  const [linkedInlink , setLinkedIn] = useState();
    
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const fourthYears = [
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b2a383f298e102b07e66",
      name: "Pranjal",
      post: "President",
      year: 4,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T16:00:35.579Z",
      updatedAt: "2023-12-22T16:00:35.579Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b2e183f298e102b07e69",
      name: "Rishishek",
      post: "General Secretary",
      year: 4,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T16:01:37.984Z",
      updatedAt: "2023-12-22T16:01:37.984Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b2e183f298e102b07e69",
      name: "Rishishek",
      post: "General Secretary",
      year: 4,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T16:01:37.984Z",
      updatedAt: "2023-12-22T16:01:37.984Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b2e183f298e102b07e69",
      name: "Rishishek",
      post: "General Secretary",
      year: 4,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T16:01:37.984Z",
      updatedAt: "2023-12-22T16:01:37.984Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b2e183f298e102b07e69",
      name: "Rishishek",
      post: "General Secretary",
      year: 4,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T16:01:37.984Z",
      updatedAt: "2023-12-22T16:01:37.984Z",
      __v: 0,
    },
  ];
  const thirdYears = [
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b22da9846b11aee92383",
      name: "Subham Dutta",
      post: "Technical Head",
      year: 3,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T15:58:37.792Z",
      updatedAt: "2023-12-22T15:58:37.792Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b22da9846b11aee92383",
      name: "Subham Dutta",
      post: "Technical Head",
      year: 3,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T15:58:37.792Z",
      updatedAt: "2023-12-22T15:58:37.792Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b22da9846b11aee92383",
      name: "Subham Dutta",
      post: "Technical Head",
      year: 3,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T15:58:37.792Z",
      updatedAt: "2023-12-22T15:58:37.792Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b22da9846b11aee92383",
      name: "Subham Dutta",
      post: "Technical Head",
      year: 3,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T15:58:37.792Z",
      updatedAt: "2023-12-22T15:58:37.792Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b22da9846b11aee92383",
      name: "Gyan Sanatan Hazarika",
      post: "Assistant General Secretary",
      year: 3,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T15:58:37.792Z",
      updatedAt: "2023-12-22T15:58:37.792Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b22da9846b11aee92383",
      name: "Subham Dutta",
      post: "Technical Head",
      year: 3,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T15:58:37.792Z",
      updatedAt: "2023-12-22T15:58:37.792Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b22da9846b11aee92383",
      name: "Subham Dutta",
      post: "Technical Head",
      year: 3,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T15:58:37.792Z",
      updatedAt: "2023-12-22T15:58:37.792Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b22da9846b11aee92383",
      name: "Subham Dutta",
      post: "Technical Head",
      year: 3,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T15:58:37.792Z",
      updatedAt: "2023-12-22T15:58:37.792Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b22da9846b11aee92383",
      name: "Subham Dutta",
      post: "Technical Head",
      year: 3,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T15:58:37.792Z",
      updatedAt: "2023-12-22T15:58:37.792Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b22da9846b11aee92383",
      name: "Subham Dutta",
      post: "Technical Head",
      year: 3,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T15:58:37.792Z",
      updatedAt: "2023-12-22T15:58:37.792Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b22da9846b11aee92383",
      name: "Subham Dutta",
      post: "Technical Head",
      year: 3,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T15:58:37.792Z",
      updatedAt: "2023-12-22T15:58:37.792Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b22da9846b11aee92383",
      name: "Subham Dutta",
      post: "Technical Head",
      year: 3,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T15:58:37.792Z",
      updatedAt: "2023-12-22T15:58:37.792Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b22da9846b11aee92383",
      name: "Subham Dutta",
      post: "Technical Head",
      year: 3,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T15:58:37.792Z",
      updatedAt: "2023-12-22T15:58:37.792Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b24fa9846b11aee92386",
      name: "Vikash Raj",
      post: "Technical Head",
      year: 3,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T15:59:11.104Z",
      updatedAt: "2023-12-22T15:59:11.104Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b27ca9846b11aee92389",
      name: "Shreya Goswami",
      post: "Vice President",
      year: 3,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T15:59:56.674Z",
      updatedAt: "2023-12-22T15:59:56.674Z",
      __v: 0,
    },
  ];
  const secondYears = [
    {
      avatar: {
        public_id: "imageID",
        url :"https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b46583f298e102b07e6c",
      name: "Bhargob",
      post: "junior technical",
      year: 2,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T16:08:05.185Z",
      updatedAt: "2023-12-22T16:08:05.185Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b46c83f298e102b07e6f",
      name: "sagar",
      post: "junior technical",
      year: 2,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T16:08:12.705Z",
      updatedAt: "2023-12-22T16:08:12.705Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b4b683f298e102b07e72",
      name: "vidhi",
      post: "content team",
      year: 2,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T16:09:26.052Z",
      updatedAt: "2023-12-22T16:09:26.052Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b4b683f298e102b07e72",
      name: "vidhi",
      post: "content team",
      year: 2,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T16:09:26.052Z",
      updatedAt: "2023-12-22T16:09:26.052Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b4b683f298e102b07e72",
      name: "vidhi",
      post: "content team",
      year: 2,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T16:09:26.052Z",
      updatedAt: "2023-12-22T16:09:26.052Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b4b683f298e102b07e72",
      name: "vidhi",
      post: "content team",
      year: 2,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T16:09:26.052Z",
      updatedAt: "2023-12-22T16:09:26.052Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b4b683f298e102b07e72",
      name: "vidhi",
      post: "content team",
      year: 2,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T16:09:26.052Z",
      updatedAt: "2023-12-22T16:09:26.052Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b4b683f298e102b07e72",
      name: "vidhi",
      post: "content team",
      year: 2,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T16:09:26.052Z",
      updatedAt: "2023-12-22T16:09:26.052Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b4b683f298e102b07e72",
      name: "vidhi",
      post: "content team",
      year: 2,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T16:09:26.052Z",
      updatedAt: "2023-12-22T16:09:26.052Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b4b683f298e102b07e72",
      name: "vidhi",
      post: "content team",
      year: 2,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T16:09:26.052Z",
      updatedAt: "2023-12-22T16:09:26.052Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b4b683f298e102b07e72",
      name: "vidhi",
      post: "content team",
      year: 2,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T16:09:26.052Z",
      updatedAt: "2023-12-22T16:09:26.052Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b4b683f298e102b07e72",
      name: "vidhi",
      post: "content team",
      year: 2,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T16:09:26.052Z",
      updatedAt: "2023-12-22T16:09:26.052Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b4b683f298e102b07e72",
      name: "vidhi",
      post: "content team",
      year: 2,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T16:09:26.052Z",
      updatedAt: "2023-12-22T16:09:26.052Z",
      __v: 0,
    },
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "6585b4b683f298e102b07e72",
      name: "vidhi",
      post: "content team",
      year: 2,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-22T16:09:26.052Z",
      updatedAt: "2023-12-22T16:09:26.052Z",
      __v: 0,
    },
  ];
  const fic = [
    {
      avatar: {
        public_id: "imageID",
        url: "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg"
      },
      _id: "658d8c26cadb0205c5e39b66",
      name: "Rajjev Dey",
      post: "Faculty-in-Charge",
      year: 5,
      FY: 23,
      insta: "https://www.youtube.com",
      facebook: "https://www.youtube.com",
      linkedIn: "https://www.youtube.com",
      createdAt: "2023-12-28T14:54:30.653Z",
      updatedAt: "2023-12-28T14:54:30.653Z",
      __v: 0,
    },
  ];
  return (
    <div className="team">
      <div className="t-upper">
        <span>Unity, Vision, Impact, Success</span>
        { role === "admin" &&<button onClick={handleOpen}>Add Member</button>}
        <Modal
        open={open}
        onClose={handleClose}
      >
        <form className='add-member' onSubmit={handleSubmit}>
      <div>
      <label>Name</label>
      <div>
          <input type='text' value={name} placeholder='Enter Member Name' onChange={(e)=>(setName(e.target.value))}/>
      </div>
      </div>
      <div>
      <label>Post</label>
      <div>
          <input type='text' value={post} placeholder='Enter Member Post' onChange={(e)=>(setPost(e.target.value))}/>
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
      </div>
      </div>
      <div>
      <label>Facebook Link</label>
      <div>
          <input type='text' value={fblink} placeholder='Enter Member facebook link' onChange={(e)=>(setFblink(e.target.value))}/>
      </div>
      </div>
      <div>
      <label>Instagram Link</label>
      <div>
          <input type='text' value={instalink} placeholder='Enter Member insta link' onChange={(e)=>(setInsta(e.target.value))}/>
      </div>
      </div>
      <div>
      <label>LinkedIn Link</label>
      <div>
          <input type='text' value={linkedInlink} placeholder='Enter Member linkedIn link' onChange={(e)=>(setLinkedIn(e.target.value))}/>
      </div>
      </div>
      <div>
      <label>Choose Profile Photo</label>
      <div>
          <input type='file' />
      </div>
      </div>
      <div>
          <input type='submit' value="Add" />
      </div>
    </form>
      </Modal>
        <div>
            <FormControl>
              <InputLabel sx={{ color: "rgb(63 41 175)" , fontWeight : "500" , fontSize : "1.2rem"}} >Sort by Year</InputLabel>
              <Select
                sx={{ padding: "0 22px 0 5px" , fontWeight : "500"}}
                value={year}
                label="Sort by Year"
                onChange={(e)=>{setYear(e.target.value)}}
              >
                <MenuItem value="23">2023-24</MenuItem>
                <MenuItem value="22">2022-23</MenuItem>
              </Select>
            </FormControl>
        </div>
      </div>
      <div className="t-lower">
        <div>
          <span>Core Members</span>
          <div>
          {fic.length > 0 &&
            fic.map((f) => (
                <Tilt><TeamCard key={f._id} member={f} /></Tilt>
            ))}
          </div>
        </div>
        <div>
          <span>4th Year Members</span>
          <div>
          {fourthYears.length > 0 &&
            fourthYears.map((f) => (
              <Tilt><TeamCard key={f._id} member={f} /></Tilt>
            ))}
          </div>
        </div>
        <div>
          <span>3rd Year Members</span>
          <div>
          {thirdYears.length > 0 &&
            thirdYears.map((f) => (
              <Tilt><TeamCard key={f._id} member={f} /></Tilt>
            ))}
          </div>
        </div>
        <div>
          <span>2nd Year Members</span>
          <div>
          {secondYears.length > 0 &&
            secondYears.map((f) => (
              <Tilt><TeamCard key={f._id} member={f} /></Tilt>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
