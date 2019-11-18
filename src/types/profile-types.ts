import { SET_PROFILE_DATA, SET_STATUS } from "../redux/profile-reducer";

interface IContacts {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

interface IPhotos {
    small: string
    large: string
}

export interface IProfileData {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: IContacts
    photos: IPhotos
}

export interface IInitialProfile {
    profileData: IProfileData | null,
    status: string
};


export interface ISetProfileDataAction {
    type: typeof SET_PROFILE_DATA
    profileData: IProfileData
}

export interface ISetStatusAction {
    type: typeof SET_STATUS
    status: string
}

export type CommonActionsProfileType = ISetProfileDataAction | ISetStatusAction

