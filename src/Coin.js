import React, { useState } from 'react'
import './Coin.css'
import { getRandomFace } from './helpers.js'
import headsImg from './heads.jpg'
import tailsImg from './tails.png'

function Coin(){
    const[count, setCount] = useState({"flips": 0, "heads": 0, "tails": 0});
    const[face, setFace] = useState(null);
    let CoinDisplay = null;
    let CountDisplay = (<p>Out of {count.flips} flips, there have been {count.heads} heads and {count.tails} tails.</p>)
    
    function flipCoin() {
        const randFace = getRandomFace()
        setFace(randFace);

        setCount(count => {
            let copy = { ...count }
            copy[randFace] = count[randFace] + 1
            copy["flips"] = count["flips"] + 1
            return copy
        });
    }

    

    if(face === "heads"){
        CoinDisplay = (<div className="Coin-image"><img src={headsImg}></img></div>)
    } else if (face === "tails"){
        CoinDisplay = (<div className="Coin-image"><img src={tailsImg}></img></div>)
    }


    return (
        <div>
            <h2>Let's flip a coin!</h2>
            {CoinDisplay}
            <div>
                <button className="flipme" onClick={flipCoin}>Flip Meee</button>
            </div>
            
            {CountDisplay}
        </div>
    )
}

export default Coin;