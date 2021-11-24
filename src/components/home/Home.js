import React from 'react'
import { Carousel } from 'antd';
import './Home.css'
import { SliderImg } from './SliderImg';
import 'antd/dist/antd.css';
import Footer from '../footer/Footer';


const Home = () => {
    return (
        <div className='Home'>
   
        <Carousel effect='fade'   autoplay>
        
        {SliderImg.map(el=><img   className="slider" key={el.image} src={el.image} />)}
        </Carousel>
        <div className="logo">    <h1  className="H-title">WE DO WHAT WE MUST  </h1>
        <img className="logo-img" src="LOGO.png" /></div>
    
        <Footer/>
        </div>
    )
}

export default Home
