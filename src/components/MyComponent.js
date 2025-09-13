import React from 'react';

class MyComponent extends React.Component {
    state = {
        name: 'Vu Viet Hoang',
        age: 20,
        address: 'Hanoi'
    };

    //JSX 
    render() {
        return (
            <div>
                My name is {this.state.name} and im from {this.state.address}
            </div>
        )
    }
}

export default MyComponent;
