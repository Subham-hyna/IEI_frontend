import React from 'react'
import './Home.css'
import Button from '@mui/material/Button';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import IC from '../../assets/IC_pic.png'
import { motion } from 'framer-motion'
import Newsletter from './Newsletter/Newsletter';
import About from './About/About';
import Activities from './Activities/Activities';

const Home = () => {
    const options = {
        initial: {
          x: "-100%",
          opacity: 0,
        },
        whileInView: {
          x: 0,
          opacity: 1,
        },
      };
  return (
    <section>
    <div className='home'>
        <div className='h-title'><motion.h1 initial={{
                y: "+100%",
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}>THE INSTITUTE OF ENGINEERS</motion.h1></div>
        <div className='h-content'>
            <motion.h4
             initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                delay: 0.2,
              }}
            >Welcome to the official page of IEI Students chapter of National Institute of Technology, Silchar</motion.h4>
            <motion.p 
            initial={{
                y: "-100%",
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.4,
              }}
            >Lorem There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</motion.p>
        </div>
        <div className='h-button'><a href='#about'><Button variant="contained" sx={{ backgroundColor : "#5236ca" , width : "200px" , padding: "20px", borderRadius :"10px"}}>Get Started</Button></a></div>
        <div className='h-arrow'><ArrowDownwardOutlinedIcon sx={{ color : "#6846f8" , fontSize : "60px"}}/></div>
        <motion.img {...options} src={IC} className='h-icon' />
    </div>
        <About />     
        <Activities /> 
        <Newsletter />
    
    </section>
  )
}

export default Home