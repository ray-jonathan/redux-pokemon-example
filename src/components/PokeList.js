import React from 'react';
function PokeList({cards, handleClick}){
    const cardItems = cards.map(card => {
        return(
        <li 
            key={card.id} 
            onClick={() => handleClick(card.id)} >
            {card.name}
        </li>
        )
    })
    return(
        <ul>   
            {cardItems}
        </ul>
    )
    
}
export default PokeList;