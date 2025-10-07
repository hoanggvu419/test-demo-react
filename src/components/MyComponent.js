import React from 'react';
import AddUserInfo from './AddUserInfo'; 
import DisplayInfo from './DisplayInfo';

class MyComponent extends React.Component {
    state ={
        listUsers : [
            {id : 1, name: 'Hoang', age: 21},
            {id : 2, name: 'Bi', age: 12},
            {id : 3, name: 'Vu', age: 32},

        ]
    }

    handleAddNewUser = (userObj) => {
        console.log('>>> check data', userObj);
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })

    }
    handleDeleteUser = (userId) => {
        let listUserClone = this.state.listUsers;
        listUserClone = listUserClone.filter(item => item.id !== userId);
        this.setState({
            listUsers : listUserClone
        })
    }

    //JSX 
    render() {
        return (
    //Fragment
        <> 
            <div className='a'>
            <AddUserInfo 
                handleAddNewUser = {this.handleAddNewUser}
            />
            <br/>
            <DisplayInfo
                listUsers = {this.state.listUsers}
                handleDeleteUser = {this.handleDeleteUser}
            />   
            </div> 
            <div className='b'>

            </div>
        </>
        )
    }   
}

export default MyComponent;
