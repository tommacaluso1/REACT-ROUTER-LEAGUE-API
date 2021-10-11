import React, { useState, useEffect } from 'react'
import "./app.css";
import champions from 'lol-champions';



function ChampDetail({match}){
    const fetchItem = match.params.id;
    const champion = champions[fetchItem];
    const championImage = champion.icon;
    const stats = champion.stats;
    const statsShow =  Object.keys(stats).map((key) => [key, stats[key]]);
     
    return (
      
        <div class="text-center pb-20" >
          <div class="grid">
           <h1 class="text-6xl ">{champion.name}</h1>
           <h2 class="text-3xl ">{champion.title}</h2>
           <img class="justify-self-center w-40 h-auto "  src={championImage} alt={"champImage"}></img>
           <h3 class="text-2xl mx-20 ">{champion.description}</h3>
           <h4 class="text-xl">This champion is a {champion.tags[0]} and a {champion.tags[1]} </h4>
          </div>
           <div>
            {statsShow.map((stat)=> {
                return(
                    <div class="text-l grid-cols-2">
                        <p>{stat[0]} -{'>'} {stat[1]}</p>
                    </div>    
                )
            })}
           </div>

           
           
        </div>

    );
}


export default ChampDetail;
