import React,{Component} from 'react';
import "./Person.css"

class Person extends Component{
    render(){
        return(
            <div className='Person'>
                <p onClick={this.props.chintan}>I am {this.props.name} and I am {this.props.age} years old</p> <p>{this.props.children}</p>
            <input type="text" onChange={this.props.chintanChanged}  defaultValue={this.props.name}/>
            </div>
        )
    }

}

// const Person = (props) => {
//     return (
//         <div className="Person">
//             <p onClick={props.chintan}>I am {props.name} and I am {props.age} years old</p> <p>{props.children}</p>
//             <input type="text" onChange={props.chintanChanged}  defaultValue={props.name}/>
//         </div>
//     )
// }

export default Person