import React,{Component} from 'react';
import Person from './Persons/Persons'

class PersonsIter extends Component{
    constructor(props) {
        super(props);
        console.log('[PersonsIter.js] Inside Constructor');
      }
    
      componentWillMount() {
        console.log('[PersonsIter.js] Inside componentWillMount');
      }
    
      componentDidMount() {
        console.log('[PersonsIter.js] Inside componentDidMount');
      }

      componentWillUpdate() {
        console.log('[PersonsIter.js] Inside componentWillUpdate');
      }

      componentDidUpdate() {
        console.log('[PersonsIter.js] Inside componentDidUpdate');
      }

    render() {
        console.log('PersonsIter Render Method');
        return this.props.mydata.map((p,index) =>
        {
            return <Person
            name={p.name}
            age={p.age}
            key={p.id}
            chintan={()=>this.props.clicked(index)} />
        });
    }
}

// const PersonsIter = (props) => props.mydata.map((p,index) =>
// {
//     return <Person
//     name={p.name}
//     age={p.age}
//     key={p.id}
//     chintan={()=>props.clicked(index)} />
// });

export default PersonsIter;