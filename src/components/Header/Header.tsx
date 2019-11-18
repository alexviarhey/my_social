import React from "react";
import s from './Header.module.css'
import {useDispatch, useSelector} from "react-redux";
import { AppStateType } from "../../redux/store";
import { NavLink } from "react-router-dom";
import {logout} from "../../redux/auth-reducer";



const Header = () => {
    let isAuth = useSelector((state: AppStateType): boolean => state.authPage.isAuth);
    let login = useSelector((state: AppStateType): string | null => state.authPage.login);
    let dispatch = useDispatch()

    return (
        <div className={s.outer}>
            <div className={s.logo}>Snow Chat</div>
            {isAuth ?
                <div className={s.userName}>
                    <span className={s.login}>{login}</span>
                    <button className={s.logout} onClick={() => dispatch(logout())}>Logout</button>
                </div>:
                <div><NavLink to='/login'>Login</NavLink></div>
            }
        </div>
    )
};

export default Header