import React, { useState } from 'react';

// class AddUserInfo extends React.Component {
//     state = {
//         name: 'Vu Viet Hoang',
//         age: 20,
//         address: 'Hanoi'
//     };

//     handleOnChangeInput = (event) => {
//         this.setState({
//         name: event.target.value
//         })

//     }
//     handleOnChangeAge = (event) => {
//         this.setState({
//         age: event.target.value
//         })

//     }
//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 100) + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         }
//         );
//     }
//     render() {
//         return (
//         <div>
//             My name is {this.state.name} and im {this.state.age}
//                 <form onSubmit = {(event) => {this.handleOnSubmit(event)}}>
//                     <label>Your name:</label>
//                     <input
//                         value = {this.state.name}
//                         type = "text"
//                         onChange = {(event) => {this.handleOnChangeInput(event)}}
//                     />
//                     <button>Submit</button>
//                     <br/>
//                     <label>Your age:</label>
//                     <input
//                         value = {this.state.age}
//                         type = "number"
//                         onChange = {(event) => {this.handleOnChangeAge(event)}}
//                     />
//                     <button>Submit</button>
//                 </form>
                
//         </div>
//         )
//     }
// }

const AddUserInfo = (props) => {
    const [name, setName] = useState('Vu Viet Hoang');
    const [age, setAge] = useState('20');
    const [address, setAddress] = useState('Nam Dinh');
    const handleOnChangeInput = (event) => {
        setName(event.target.value);

    }
    const handleOnChangeAge = (event) => {
        setAge(event.target.value);
    }
    const handleOnSubmit = (event) => {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: name,
            age: age
        }
        );
    }
    return (
        <div>
            My name is {name} and im {age}
                <form onSubmit = {(event) => {handleOnSubmit(event)}}>
                    <label>Your name:</label>
                    <input
                        value = {name}
                        type = "text"
                        onChange = {(event) => {handleOnChangeInput(event)}}
                    />
                    <button>Submit</button>
                    <br/>
                    <label>Your age:</label>
                    <input
                        value = {age}
                        type = "number"
                        onChange = {(event) => {handleOnChangeAge(event)}}
                    />
                    <button>Submit</button>
                </form>
                
        </div>
        )
}

export default AddUserInfo;    