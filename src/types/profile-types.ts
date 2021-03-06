import {SET_NEW_PHOTO, SET_PROFILE_DATA, SET_STATUS} from "../redux/profile-reducer";

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

export interface IPhotos {
    small: string
    large: string
}

export interface IProfileData {
    aboutMe: string
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
}


export interface ISetProfileDataAction {
    type: typeof SET_PROFILE_DATA
    profileData: IProfileData
}

export interface ISetStatusAction {
    type: typeof SET_STATUS
    status: string
}

export interface ISetPhotoAction {
    type: typeof SET_NEW_PHOTO
    newPhoto: IPhotos
}

export type CommonActionsProfileType = ISetProfileDataAction | ISetStatusAction | ISetPhotoAction

