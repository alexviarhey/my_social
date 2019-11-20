import React from 'react'
import s from './Users.module.css'
import ava from '../../img/ava.png'
import { IUser } from '../../redux/users-reducer';
import {NavLink} from "react-router-dom";


interface IProps {
    user: IUser
}

const User = ({user}: IProps) => {
    return (
        <div className={s.user}>
            <NavLink to={`/profile/${user.id}`} className={s.userPhoto}>
                <img src={user.photos.small || ava} alt=""/>
            </NavLink>
            <div className={s.userInfo}>
                <div className={s.userName}>{user.name}</div>
                <div className={s.follow}><button>follow</button></div>
            </div>
        </div>
    )
};


export default User