import React from 'react';
function PokeList({cards}){
    const cardItems = cards.map(card => <li key={card.id} >{card.name}</li>)
    return(
        <ul>   
            {cardItems}
        </ul>
    )
}
export default PokeList;