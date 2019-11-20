import {IPhotos} from "../types/profile-types";
import {usersApi} from "../api/api";


export const SET_USERS = 'usersReducer/SET_USERS';
export const SET_TOTAL_COUNT = 'usersReducer/SET_TOTAL_COUNT';

interface ISetUsersAction {
    type: typeof SET_USERS
    users: Array<IUser>
}

interface ISetTotalCountAction {
    type: typeof SET_TOTAL_COUNT
    totalCount: number
}

export interface IUser {
    id: number
    name: string
    status: string
    followed: boolean
    photos: IPhotos
}

interface IInitialUsersState {
    users: Array<IUser>,
    totalCount: number,
    count: number
    currentPage: number
}

const initialState: IInitialUsersState = {
    users: [],
    totalCount: 0,
    count: 4,
    currentPage: 1
};

export const usersReducer = (state=initialState, action: any) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            };
        default: return state
    }
};

const setUsers = (users: Array<IUser>):ISetUsersAction => {
    return {type: SET_USERS, users}
};

const setTotalCount = (totalCount: number): ISetTotalCountAction => {
    return {type: SET_TOTAL_COUNT, totalCount}
};

export const getUsers = (count: number, currentPage: number) => async(dispatch: any) => {
    let res = await usersApi.getUsers(count, currentPage);
    debugger
    if(!res.data.error) {
        dispatch(setUsers(res.data.items));
        dispatch(setTotalCount(res.data.totalCount))
    }
};