import React from 'react'
import './About.css'
import logo from '../../../assets/IEI_logo.svg'

const About = () => {
  return (
    <div className='about' id="about" >
        <div className='about-left'>
            <img  src={logo} alt='IEI_logo' />
            <div>
                <div>
                <img src= "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg" alt='FIC' />
                <p>Faculty-In-Charge</p>
                </div>
                <div>
                <img src= "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg" alt='Pesident' />
                <p>President</p>
                </div>
                <div>
                <img src= "https://res.cloudinary.com/ddr1kuyb3/image/upload/v1704184396/aiony-haust-3TLl_97HNJo-unsplash_nolun5.jpg" alt='GS' />
                <p>General Secretary</p>
                </div>
            </div>
        </div>
        <div className='about-right'>
            <span>ABOUT US</span>
            <h1>IEI Students Chapter</h1>
            <h3>National Institute of Technology, Silchar</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, contll uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, contll uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
    </div>
  )
}

export default About