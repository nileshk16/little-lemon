import React from 'react'
// import { Link } from 'react-router-dom'
// import { BrowserRouter as Router } from 'react-router-dom'
import BannerImg from '../assets/restaurantfood.jpg'

const Header = () => {
  return (
    <header className='header'>
        <section>
            <div className='banner'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve Table</button>
            </div>
            <div className='banner-img'>
                <img src={BannerImg} alt="BannerImg"></img>
            </div>
        </section>

    </header>
  )
}

export default Header