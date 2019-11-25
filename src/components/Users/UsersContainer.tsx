import React, {useEffect} from 'react'
import Users from "./Users";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {getUsers, setCurrentPage} from '../../redux/users-reducer';
import Preloader from "../common/Preloader";


const UsersContainer = () => {
    const dispatch = useDispatch();
    const {users, count, currentPage, totalUserCount, isFetching} = useSelector((state: AppStateType) => {
        return {
            users: state.usersPage.users,
            count: state.usersPage.count,
            currentPage: state.usersPage.currentPage,
            totalUserCount: state.usersPage.totalCount,
            isFetching: state.usersPage.isFetching
        }
    });

    useEffect(() => {
        dispatch(getUsers(count, currentPage))
    }, [count, currentPage, dispatch]);

    const onPageChanged = (p: number) => {
        dispatch(setCurrentPage(p));
        dispatch(getUsers(count, p))
    };
    if(isFetching) return <Preloader/>
    return (
        <Users onPageChanged={onPageChanged} users={users} count={count} currentPage={currentPage} totalUserCount={totalUserCount}/>
        )
};


export default UsersContainer