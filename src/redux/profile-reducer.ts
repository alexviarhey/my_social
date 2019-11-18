import {
    IInitialProfile,
    IProfileData,
    ISetProfileDataAction,
    CommonActionsProfileType,
    ISetStatusAction
} from "../types/profile-types";
import {profileApi} from "../api/api";

export const SET_PROFILE_DATA = 'profileReducer/SET_PROFILE_DATA';
export const SET_STATUS = 'profileReducer/SET_STATUS';


const initialState: IInitialProfile = {
    profileData: null,
    status: ''
};


export const profileReducer = (state = initialState, action: CommonActionsProfileType) => {
    switch (action.type) {
        case SET_PROFILE_DATA:
            return {
                ...state,
                profileData: action.profileData
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state
    }
};


const setProfileData = (profileData: IProfileData): ISetProfileDataAction => {
    return {type: SET_PROFILE_DATA, profileData}
};

const setStatus = (status: string): ISetStatusAction => {
    return {type: SET_STATUS, status}
};


export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let res = await profileApi.getUserProfile(userId);
    dispatch(setProfileData(res.data))
};

export const getStatus = (userId: number) => async (dispatch: any) => {
    let res = await profileApi.getStatus(userId)
    dispatch(setStatus(res.data))
};

export const updateStatus = (status: string) => async (dispatch: any)  => {
    let res = await profileApi.updateStatus(status);
    if(res.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
};
