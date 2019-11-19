import React, { useState } from 'react'
import Avatar from "./Avatar";
import ProfileData from "./ProfileData";
import {IProfileData} from "../../../types/profile-types";
import s from './ProfileInfo.module.css'
import ProfileDataForm from "./ProfileDataForm";


interface IProps {
    profile: IProfileData,
    status: string
}


const ProfileInfo = ({profile, status}: IProps) => {
    const [editMode, setEditMode] = useState(false);
    return (
        <div className={s.info}>
            <Avatar photo={profile.photos.small}/>
            {!editMode && <ProfileData onClickCb={() => setEditMode(true)} profile={profile} status={status}/>}
            {editMode && <ProfileDataForm />}
        </div>
    )
};


export default ProfileInfo