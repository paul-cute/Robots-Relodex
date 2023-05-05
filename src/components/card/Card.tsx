import React from 'react'
import {Monster} from '../../App'


type CardProps = {
    monster: Monster
}

function Card({monster}: CardProps) {

    const {name, email, id} = monster
    return (
       <div className='card-container'>
            <img src={`https://robohash.org/${id}?set=set2}`} alt="monster" />
            <h2>{name}</h2>
            <p>{email}</p>
       </div>
   )
}

export default Card
