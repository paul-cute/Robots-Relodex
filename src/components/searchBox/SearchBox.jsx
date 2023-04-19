import React from 'react'
import './SearchBox.css' 

function SearchBox({className, placeholder, onChangeHandler }) {
  return (
    <input 
      type="search"
      className={`search-box ${className}`}
      placeholder={placeholder} 
      onChange={onChangeHandler}/>
  )
}

export default SearchBox

// export default class SearchBox extends Component {
//   render() {
//     return (
//         <input 
//             type="search" 
//             className={`search-box ${this.props.className}`} 
//             placeholder={this.props.placeholder} 
//             onChange={this.props.onChangeHandler}/>
//     )
//   }
// }
