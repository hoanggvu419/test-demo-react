import React from 'react';
class AddUserInfo extends React.Component {
    state = {
        name: 'Vu Viet Hoang',
        age: 20,
        address: 'Hanoi'
    };

    handleOnChangeInput = (event) => {
        this.setState({
        name: event.target.value
        })

    }
    handleOnChangeAge = (event) => {
        this.setState({
        age: event.target.value
        })

    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        }
        );
    }
    render() {
        return (
        <div>
            My name is {this.state.name} and im {this.state.age}
                <form onSubmit = {(event) => {this.handleOnSubmit(event)}}>
                    <label>Your name:</label>
                    <input
                        value = {this.state.name}
                        type = "text"
                        onChange = {(event) => {this.handleOnChangeInput(event)}}
                    />
                    <button>Submit</button>
                    <br/>
                    <label>Your age:</label>
                    <input
                        value = {this.state.age}
                        type = "number"
                        onChange = {(event) => {this.handleOnChangeAge(event)}}
                    />
                    <button>Submit</button>
                </form>
                
        </div>
        )
    }
}

export default AddUserInfo;    