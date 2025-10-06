import React from 'react';
import './DisplayInfo.scss';
class DisplayInfo extends React.Component {
    render() {
        //destructuring object/array
        const {listUsers} = this.props;
        // console.log(listUsers)
        //props: properties
        // console.log(this.props);
        return (
            <div className='display-info-container'>
                { listUsers.map((users, index) => {
                    return (
                        <div key = {users.id}>
                            <div>My name: {users.name} </div>
                            <div>My age: {users.age} </div>
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