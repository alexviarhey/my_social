import React, {useEffect} from 'react'
import Users from "./Users";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import { getUsers } from '../../redux/users-reducer';


const UsersContainer = () => {
    const dispatch = useDispatch();
    let users = useSelector((state: AppStateType) => state.usersPage.users);
    let count = useSelector((state: AppStateType): number => state.usersPage.count);
    let currentPage = useSelector((state: AppStateType): number => state.usersPage.currentPage);

    useEffect(() => {
        dispatch(getUsers(count, currentPage))
    }, []);

    return (
        <Users users={users}/>
    )
};


export default UsersContainer