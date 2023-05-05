import React from 'react'
import './CardList.css'
import Card from '../card/Card';
import { Monster } from '../../App';

type CardListProps = {
  monsters : Monster[]
}

function CardList({monsters}: CardListProps) {
  return (
    <div className='card-list'>
        {
        monsters.map((monster)=>{
          return (
            <Card key={monster.id} monster={monster}/>
          )})
      }
    </div>
  )
}

export default CardList
