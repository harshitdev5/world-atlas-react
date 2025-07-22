import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom"; 

export default function HeroSection() {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World, One Country at a Time.
          </h1>
          <p className="paragraph">
            Discover the history, culture, and beauty of every nation. Sort, 
            search, and filter through countries to find the details you need.
          </p>

        
          <Link to="/country">
            <button className='btn btn-darken btn-inline bg-white-box'>
              Start Exploring <FaLongArrowAltRight />
            </button>
          </Link>

        </div>
        <div className="hero-image">
          <img src={new URL('/images/world.png', import.meta.url).href} alt="world beauty" className="banner-image"/>            
        </div>
      </div>
    </main>
  );
}