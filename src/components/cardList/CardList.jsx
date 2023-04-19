import React from 'react'
import './CardList.css'
import Card from '../card/Card';

function CardList({monsters}) {
  return (
    <div className='card-list'>
        {
        monsters.map((monster)=>{
          const {id, name, email} = monster
          return (
            <Card name={name} email={email} key={id} id={id}/>
          )})
      }
    </div>
  )
}

export default CardList

// export default class CardList extends Component {
//   render() {

//     const {monsters} = this.props;

//     return (
//       <div className='card-list'>
//         {
//             monsters.map((monster)=>{
//               const {id, name, email} = monster
//               return (
//                 <Card name={name} email={email} key={id} id={id}/>
//               )})
//         }
//       </div>
//     )
//   }
// }
