import { Component, PureComponent } from "react";
// import Person from "../components/PersonsIter/Persons/Persons";
import "./App.css";
import Radium from 'radium';
import PersonsIter from "../components/PersonsIter/PersonsIter";

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor');
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }

  componentWillUpdate() {
    console.log('[App.js] Inside componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('[App.js] Inside componentDidUpdate');
  }

  // shouldComponentUpdate(nextProps,nextState) {
  //   console.log('[Update PersonsIter.js] Inside shouldComponentUpdate',nextProps,nextState);
  //   return nextProps.mydata !== this.props.mydata;
  // }

  state = {
    person: [
      { id:1, name: 'Chintan', age: 42 },
      { id:2, name: 'Akshad', age: 40 },
      { id:3, name: 'Krunal', age: 44 },
      { id:4, name: 'Sachin', age: 38 },
      { id:5, name: 'Anupam', age: 50 }
    ],
    showPersons: false
  }



  switchNameHandler = (newName) => {
    console.log("Button is Clicked");
    //this.state.person[0].name = 'XYZ';
    this.setState({
      person: [
        { name: newName, age: 42 },
        { name: 'Akshad', age: 40 },
        { name: 'Krunal', age: 50 }
      ]
    })
  }


  nameChangeHandler = (event) => {
    this.setState({
      person: [
        { name: 'Chintan', age: 42 },
        { name: event.target.value, age: 40 },
        { name: 'Krunal', age: 50 }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const newPersons = this.state.person.slice();
    const newPersons = [...this.state.person]
    newPersons.splice(personIndex, 1);
    this.setState({ person:newPersons });
  }
  

  render() {
    console.log('Render Method');

    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor:'blue',
        color:'yellow'
      }
    };

    let persons = null;

    const classes = [];
    if(this.state.person.length <= 4) {
      classes.push('red');  //classes = ['red']
    }
    if(this.state.person.length < 3) {
      classes.push('bold'); // classes = ['red','bold']
    }

    if(this.state.showPersons) {
      persons = (
        <div>
          {
            <PersonsIter mydata={this.state.person}
            clicked={this.deletePersonHandler} />
          }
        </div>
      )
      style.backgroundColor='red';
      style[':hover']={
        backgroundColor:'yellow',
        color:'white'
      }
    }

    return (
      <div className='App'>
        <h1>My React App</h1>
        <p className={classes.join(' ')}> Working with dynamic class names </p>
        <button style={style} onClick={() => {this.togglePersonHandler(); }}>Click Here !!</button>
        {persons}
       
      </div>
    )
  }
}

export default Radium(App);