import React from 'react'
import s from './Users.module.css'
import Pagination from "./Pagination";
import {IUser} from "../../redux/users-reducer";
import User from './User';


interface IProps {
    users: Array<IUser>
}

const Users = ({users}: IProps) => {
    return (
        <div className={s.outer}>
            <Pagination/>
            <div className={s.users}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
        </div>
    )
};



export default Users