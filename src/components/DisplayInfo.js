import React, {useState} from 'react';
import './DisplayInfo.scss';
import logo from './../logo.svg';

// class DisplayInfo extends React.Component {
//     render() {
//         //destructuring object/array
//         const {listUsers} = this.props;
//         // console.log(listUsers)
//         //props: properties
//         // console.log(this.props);
//         return (
//             <div className='display-info-container'>
//                 { listUsers.map((users, index) => {
//                     return (

//                         <div key = {users.id} className = {users.age >18 ? 'green' :'red'}>
//                             <div>
//                                 <div>My name: {users.name} </div>
//                                 <div>My age: {users.age} </div>
//                             </div>
//                             <div>
//                                 <button onClick = {() => this.props.handleDeleteUser(users.id)}>Delete</button>
//                             </div>
//                             <hr/>
//                         </div>
                        
//                     )
//                 })}
//                 {/* <div>My name: {this.props.name} </div>
//                 <div>My age: {this.props.age}</div> */}
//             </div>
//         )
//     }
// }

const DisplayInfo =(props) => {
    const {listUsers} = props; 
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }
        return (
            <div className='display-info-container'>
                <div>
                    <span onClick = {()=> handleShowHideListUser()}>{isShowHideListUser === true ? "hide list users" : "show list users"}</span>
                </div>
                {isShowHideListUser &&
                <>
                { listUsers.map((users, index) => {
                    return (

                        <div key = {users.id} className = {users.age >18 ? 'green' :'red'}>
                            <div>
                                <div>My name: {users.name} </div>
                                <div>My age: {users.age} </div>
                            </div>
                            <div>
                                <button onClick = {() => props.handleDeleteUser(users.id)}>Delete</button>
                            </div>
                            <hr/>
                        </div>
                        
                    )
                })}
                </>
            }
            </div>
        )
}

export default DisplayInfo;