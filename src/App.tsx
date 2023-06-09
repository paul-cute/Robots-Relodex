import './App.css';
import CardList from './components/cardList/CardList';
import SearchBox from './components/searchBox/SearchBox';

import React, { ChangeEvent, useEffect, useState } from 'react'
import { getData } from './utils/dataUtils';


export type Monster = {
  id: string,
  name: string,
  email: string
}

function App() {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filterMonster, setFilterMonster] = useState(monsters)

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users");
      setMonsters(users)
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    const filterMonsters = monsters.filter((monster) =>{
      return monster.name.toLowerCase().includes(searchField);
    })

    setFilterMonster(filterMonsters)
  }, [monsters, searchField])
  
  

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchField = event.target.value.toLowerCase();
    setSearchField(searchField)
  }
  

  return (
    <div>
      <h1 className='app-title'>
          Monsters Rolodex
      </h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder={'Search monsters'} className={'search-box'}/>
      <CardList monsters={filterMonster}/>
    </div>
  )
}


// class App extends Component  {

//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }


//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(() =>{
//         return {monsters: users}
//       }))
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
    
//     this.setState(() =>{
//       return {searchField}
//     })
//   }

//   render() {
//       const {monsters, searchField} = this.state;
//       const {onSearchChange} = this
//       const filterMonsters = monsters.filter((monster) =>{
//         return monster.name.toLowerCase().includes(searchField);
//       })
//     return (
//       <div className="App">
//         <h1 className='app-title'>
//           Monsters Rolodex
//         </h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder={'Search monsters'} className={'search-box'}/>
//         <CardList monsters={filterMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
