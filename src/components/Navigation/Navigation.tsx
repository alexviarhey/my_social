import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Nav.module.css'


const Navigation = () => {
    return (
        <div className={s.outer}>
            <div className={s.navContainer}><NavLink className={s.nav} activeClassName={s.active} to='/profile'>Profile</NavLink></div>
            <div className={s.navContainer}><NavLink className={s.nav} activeClassName={s.active} to='/users'>Users</NavLink></div>
            <div className={s.navContainer}><NavLink className={s.nav} activeClassName={s.active} to='/music'>Music</NavLink></div>
            <div className={s.navContainer}><NavLink className={s.nav} activeClassName={s.active} to='/setting'>Setting</NavLink></div>
        </div>
    )
};

export default Navigation