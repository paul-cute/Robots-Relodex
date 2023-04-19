import React from 'react'

function Card({monster}) {

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

// export default class Card extends Component {
//   render() {
//     const {name, email, id} = this.props
//     return (
//         <div className='card-container'>
//             <img src={`https://robohash.org/${id}?set=set2}`} alt="monster" />
//             <h2>{name}</h2>
//             <p>{email}</p>
//         </div>
//     )
//   }
// }
