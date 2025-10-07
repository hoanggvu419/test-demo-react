import React from 'react';
import './DisplayInfo.scss';
import logo from './../logo.svg';

class DisplayInfo extends React.Component {
    render() {
        //destructuring object/array
        const {listUsers} = this.props;
        // console.log(listUsers)
        //props: properties
        // console.log(this.props);
        return (
            <div className='display-info-container'>
                <img src = {logo} alt="logo"/>
                { listUsers.map((users, index) => {
                    return (

                        <div key = {users.id} className = {users.age >18 ? 'green' :'red'}>
                            <div>
                                <div>My name: {users.name} </div>
                                <div>My age: {users.age} </div>
                            </div>
                            <div>
                                <button onClick = {() => this.props.handleDeleteUser(users.id)}>Delete</button>
                            </div>
                            <hr/>
                        </div>
                        
                    )
                })}
                {/* <div>My name: {this.props.name} </div>
                <div>My age: {this.props.age}</div> */}
            </div>
        )
    }
}
export default DisplayInfo;