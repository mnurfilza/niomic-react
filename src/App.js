import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [personState, setPersonState] = useState({
    persons: [
      {name:"mixx", age: 27}
    ],
  });

  console.log(personState)

  const switchNameHandler =() =>{
    // console.log("was clicked")
    // this.state.persons[0].name ='Muhammad Nurfilza' jangan menggunakan kaya gini
    setPersonState({persons:
    [
      {name:"Filza", age: 27}
    ]  
    });
  }

  return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      </div>

    );
  
};

export default App;


