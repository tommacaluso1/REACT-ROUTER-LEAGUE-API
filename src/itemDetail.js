import React, { useState, useEffect } from 'react'
import "./app.css";
import items from 'lol-items/items';







function ItemDetail({match}){
    
    const fetchItem = match.params.id;
    const item = items[fetchItem];
    console.log(item)
    const itemImage = item.icon;
     
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(item.price.total);
    useEffect(() => {
        setPrice(item.price.total * count ) 
    }, [count])
    function decrementCount(){
        setCount(prevCount => prevCount -1)   
    }
    function incrementCount(){
        setCount(prevCount => prevCount +1) 
    }



    return (
        <div class=" text-center bg-lightgold p-5" >
           <div class="grid">
           <h1  class="text-5xl">{item.name}</h1>
           <h2 class="text-4xl">{item.plaintext} </h2>
           <p class="text-3xl">{item.price.total} gold</p>
           <img class="justify-self-center w-40 h-auto  "  src={itemImage} alt={item.name}></img>
           <h2 class="text-2xl pt-4">{item.tags[0]}</h2>
           </div>
           
           <div class="text-center text-2xl">
           <button class="p-2 hover:bg-darkgold rounded-full" onClick={decrementCount}>-</button>
           <span class="p-2" >{count}   </span>
           <button class="p-2 hover:bg-darkgold rounded-full "  onClick={incrementCount}>+</button>
           </div>
           <span class="p-3 text-2xl" >{price} gold</span>
           
        </div>
    );
}


export default ItemDetail;
