import React from 'react'
import s from './Users.module.css'
import Pagination from "./Pagination";
import User from './User';
import {IUser} from '../../types/users-types';



interface IProps {
    users: Array<IUser>
    count: number
    currentPage: number
    totalUserCount: number,
    onPageChanged: (p: number) => void
}

const Users = ({users, count, currentPage, totalUserCount, onPageChanged}: IProps) => {
    return (
        <div className={s.outer}>
            <Pagination onPageChanged={onPageChanged} count={count} currentPage={currentPage}
                        totalUserCount={totalUserCount}/>
            <div className={s.users}>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
        </div>
    )
};


export default Users