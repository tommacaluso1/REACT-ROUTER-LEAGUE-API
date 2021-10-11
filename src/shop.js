import React, {useState, useEffect} from 'react'
import "./app.css";
import items from 'lol-items/items';
import {Link} from "react-router-dom";



const nameList = []
const idList = []
items.map(item => {
  nameList.push(item.name)
})
items.map(item => {
    idList.push(item.id)
  })


function Shop(){
    const [searchTerm, setSearchTerm] = useState("");
    
    return (
        <div class="m-auto">
            <input class="h-10 w-100 "
              type="text"
              placeholder="Search..."
              onChange={(event) => {
                  setSearchTerm(event.target.value)
              }} 
            />
            
            {nameList.filter((item) =>{
                if (searchTerm === ""){  
                    return item
                }else if (item.toLowerCase().includes(searchTerm.toLowerCase())){
                return item
                }
            }).map((item, key) => {
                return (
                <div class="text-3xl">
                <h1 key={key} class="py-4">
                <Link to={`/shop/${nameList.indexOf(item)}`} >{item}</Link>
                </h1>
                </div>
                );
            })}
        </div>
    )
}


export default Shop;

