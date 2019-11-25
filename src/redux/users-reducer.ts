import {usersApi} from "../api/api";
import {
    IInitialUsersState,
    IUser,
    ISetUsersAction,
    ISetTotalCountAction,
    CommonUsersAction,
    ISetCurrentPageAction, IToggleIsFetchingAction
} from "../types/users-types";


export const SET_USERS = 'usersReducer/SET_USERS';
export const SET_TOTAL_COUNT = 'usersReducer/SET_TOTAL_COUNT';
export const SET_CURRENT_PAGE = 'usersReducer/SET_CURRENT_PAGE';
export const TOGGLE_IS_FETCHING = 'usersReducer/TOGGLE_IS_FETCHING';



const initialState: IInitialUsersState = {
    users: [],
    totalCount: 0,
    count: 4,
    currentPage: 1,
    isFetching: false
};

export const usersReducer = (state=initialState, action: CommonUsersAction) => {
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
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
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

export const setCurrentPage = (currentPage: number): ISetCurrentPageAction => {
    return {type: SET_CURRENT_PAGE, currentPage}
};

const setToggleIsFetching = (isFetching: boolean): IToggleIsFetchingAction => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
};



export const getUsers = (count: number, currentPage: number) => async(dispatch: any) => {
    debugger
    setToggleIsFetching(true);
    let res = await usersApi.getUsers(count, currentPage);
    if(!res.data.error) {
        setToggleIsFetching(false);
        dispatch(setUsers(res.data.items));
        dispatch(setTotalCount(res.data.totalCount))
    }
};