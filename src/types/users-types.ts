import {IPhotos} from "./profile-types";
import {
    SET_CURRENT_PAGE,
    SET_TOTAL_COUNT,
    SET_USERS,
    TOGGLE_IS_FETCHING,
} from "../redux/users-reducer";


export interface IUser {
    id: number
    name: string
    status: string
    followed: boolean
    photos: IPhotos
}

export interface IInitialUsersState {
    users: Array<IUser>,
    totalCount: number,
    count: number
    currentPage: number,
    isFetching: boolean
}



export interface ISetUsersAction {
    type: typeof SET_USERS
    users: Array<IUser>
}

export interface ISetTotalCountAction {
    type: typeof SET_TOTAL_COUNT
    totalCount: number
}

export interface ISetCurrentPageAction {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}

export interface IToggleIsFetchingAction {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export type CommonUsersAction = ISetUsersAction | ISetTotalCountAction | ISetCurrentPageAction | IToggleIsFetchingAction