import React, { useState } from 'react'
import Avatar from "./Avatar";
import ProfileData from "./ProfileData";
import {IProfileData} from "../../../types/profile-types";
import s from './ProfileInfo.module.css'
import ProfileDataForm from "./ProfileDataForm";


interface IProps {
    profile: IProfileData,
    status: string
    userId: number
    authorizedUserId: number | null
}


const ProfileInfo = ({profile, status, userId, authorizedUserId}: IProps) => {
    const [editMode, setEditMode] = useState(false);
    return (
        <div className={s.info}>
            <Avatar photo={profile.photos.large}/>
            {!editMode && <ProfileData userId={userId} authorizedUserId={authorizedUserId} setEditMode={() => setEditMode(true)} profile={profile} status={status}/>}
            {editMode && <ProfileDataForm setEditMode={() => setEditMode(false)} />}
        </div>
    )
};


export default ProfileInfo