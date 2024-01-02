import React from "react";
import "./Contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-upper">
        <h1>Contact Us</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content
        </p>
      </div>
      <div className="contact-lower">
        <motion.div 
        initial={{
            y: "+100%",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
        className="contact-left">
          <div>
            <i>
              <LocationOnIcon />
            </i>
            <div>
              <h2>Address</h2>
              <h3>NIT SILCHAR, 788010, Assam</h3>
            </div>
          </div>
          <div>
            <i>
              <LocalPhoneIcon />
            </i>
            <div>
              <h2>Phone</h2>
              <h3>93657-65523</h3>
            </div>
          </div>
          <div>
            <i>
              <EmailIcon />
            </i>
            <div>
              <h2>Email</h2>
              <h3>subhamdutta460@gmail.com</h3>
            </div>
          </div>
        </motion.div>
        <Tilt><motion.div 
             initial={{
                x: "-100%",
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.2,
              }}
        className="contact-right">
          <div>
            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <label>Message</label>
              <textarea
              placeholder="Write Your Message"
              >
              </textarea>
            </div>
            <div>
              <button>Send</button>
            </div>
          </div>
        </motion.div>
        </Tilt>
      </div>
    </div>
  );
};

export default Contact;
