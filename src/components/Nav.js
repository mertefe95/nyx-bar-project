import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faInstagram, faYelp, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faBars, faBullhorn, faHome, faImages, faWarehouse } from '@fortawesome/free-solid-svg-icons';

library.add(fab)

function Nav() {

return(
<header className="header">

    <nav className="nav text-white uppercase h-40 pt-20">

            <span class="navbar-toggle" id="js-navbar-toggle">
                <FontAwesomeIcon icon={faBars} />
            </span>

            <a href="#" class="logo"><h2 className="mr-64">NYX BAR & COCKTAIL</h2></a>
        
            <ul className="menu-links main-nav">
                <li className="">
                    <a href="/">Home</a>
                </li>
                <li className="">
                    <a href="/about">About</a>
                </li>
                <li className="">
                    <a href="#">Contact</a>
                </li>
                <li className="">
                    <a href="#">Projects</a>
                </li>
            </ul>

            <ul className="icons-links main-nav-2">
                <li className="">       
                    <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                </li>
                <li className="">
                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                </li>
                <li className="">
                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                </li>
                <li className="">
                    <a href="#"><FontAwesomeIcon icon={faBullhorn} /></a>
                </li>
            </ul>

        
    </nav>
</header>
);
}


export default Nav;
