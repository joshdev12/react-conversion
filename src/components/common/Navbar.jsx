import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>

<div className="navbar-one">
        <div className="icon-group">
            <div className="icon-one">
                <i className="fas fa-shopping-cart"></i>
            </div>   
            <div className="nav-content">
                <h2 className='dally'>dally <span className="nav-shop">Shop</span></h2>
                <p>YOUR SHOPPING PARTHER</p>
            </div>
       </div>
        <div className="nav-search">
            <input type="search" name="search" placeholder="search product" size="30" />
            <i id="search-icon" className="fas fa-search"></i>
        </div>
        <section className="nav-right">
            <div className="icon-two">
                <i className="fas fa-shopping-basket"></i>
            </div>
            <div className="nav-right-content" >
                <p>SHOPPING CART</p>
            </div>
        </section>
   </div>

   <div className="second-nav">
        <nav className="second-nav-container">
            <ul className="second-nav-ul">
                <Link to='/home'>Home</Link>
                {/* <!-- <a href="">Men</a>
                <a href="">Women</a>
                <a href="">Kids</a>
                <a href="">Sports</a>
                <a href="">Digital</a>
                <a href="">Furniture</a> --> */}
                <Link to='/fashion'>Fashion</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/'>Index</Link>
            </ul>
        </nav>
   </div>
   
      
     {/* <nav>      
        <Link to='/'>Index</Link>
        <Link to='/Fashion'>Fashion</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/home'>Home</Link>       
     </nav> */}
    </div>
  )
}

export default Navbar
