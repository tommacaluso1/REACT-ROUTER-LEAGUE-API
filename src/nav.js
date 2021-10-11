import React from 'react';
import "./app.css";
import {Link} from "react-router-dom";




export default function Nav() {
    return (
        <nav class="bg-darkgold text-4x1 flex justify-around items-center   ">
            <Link to={"/"} > <img src="./lolLogo.png" class="w-60 h-auto hover:bg-gold rounded-full p-5" alt="League Of Legends logo"/> </Link>
            <ul class="w-2/4 flex justify-around items-center list-none p-5">
                <Link  to="/register">
                  <li class="hover:bg-gold rounded-lg p-5">Register</li>
                </Link>
                <Link  to="/login">
                  <li class="hover:bg-gold rounded-lg p-5">Login</li>
                </Link>
                <Link  to="/shop">
                  <li class="hover:bg-gold rounded-lg p-5" >Shop</li>
                </Link>
                
            </ul>
            
        </nav>
    )
}
