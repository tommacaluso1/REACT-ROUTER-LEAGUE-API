import React, {useState} from 'react'
import {Link} from "react-router-dom";
import champions from 'lol-champions';
import "./app.css";

const nameList = []
const idList = []
champions.map(item => {
  nameList.push(item.name)
})
champions.map(item => {
    idList.push(item.id)
  })



function Home(){
    const [searchTerm, setSearchTerm] = useState("");
    
    return (
        <div class="m-auto">
            <input class="h-10 w-100 focus:ring-2 focus:ring-blue "
              type="text"
              placeholder="Search..."
              onChange={(event) => {
                  setSearchTerm(event.target.value)
              }} 
            />
            
            {nameList.filter((champ) =>{
                if (searchTerm === ""){  
                    return champ
                }else if (champ.toLowerCase().includes(searchTerm.toLowerCase())){
                return champ
                }
            }).map((champ, key) => {
                return (
            <div >   
                <div class="text-3xl grid justify-items-center  ">
                  <Link to={`/champ/${nameList.indexOf(champ)}`} >

                  <div class="pt-4 grid justify-items-center hover:scale-100">
                    <img  src={champions[nameList.indexOf(champ)].icon} alt={"champImage"}></img>
                  </div>  

                  <div class="py-4 justify-self-center bg-lightgold hover:bg-darkgold rounded-md">
                    <h1 key={key} >
                    {champ}</h1> 
                  </div>

                  </Link>  
                  
                </div>
            </div>
                );
            })}
        </div>
    )
}


export default Home;
