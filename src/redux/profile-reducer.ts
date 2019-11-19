import {
    IInitialProfile,
    IProfileData,
    ISetProfileDataAction,
    CommonActionsProfileType,
    ISetStatusAction,
    ISetPhotoAction,
    IPhotos
} from "../types/profile-types";
import {profileApi} from "../api/api";


export const SET_PROFILE_DATA = 'profileReducer/SET_PROFILE_DATA';
export const SET_STATUS = 'profileReducer/SET_STATUS';
export const SET_NEW_PHOTO = 'profileReducer/SET_NEW_PHOTO';


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
        /*case SET_NEW_PHOTO:
            return {
                ...state,
                profileData: {...state.profileData, photos: action.newPhoto}
            };*/
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

const setNewPhoto = (newPhoto: IPhotos): ISetPhotoAction => {
    return {type: SET_NEW_PHOTO, newPhoto}
}


export const getUserProfile = (userId: number) => async (dispatch: any) => {
    debugger
    let res = await profileApi.getUserProfile(userId);
    dispatch(setProfileData(res.data))
};

export const getStatus = (userId: number) => async (dispatch: any) => {
    let res = await profileApi.getStatus(userId);
    dispatch(setStatus(res.data))
};

export const updateStatus = (status: string) => async (dispatch: any) => {
    let res = await profileApi.updateStatus(status);
    if (res.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
};

export const changePhoto = (photoFile: any): Function => async (dispatch: any) => {
    let res = await profileApi.changePhoto(photoFile);
    debugger
    if (res.data.resultCode === 0) {
        debugger
        dispatch(setNewPhoto(res.data.data.photos))
    }
}
