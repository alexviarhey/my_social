import React from 'react'
import s from "../Profile.module.css";
import ProfileStatus from "./ProfileStatus";
import {IProfileData} from "../../../types/profile-types";


interface IProps {
    profile: IProfileData
    status: string
    setEditMode: () => any
}

const ProfileData = ({profile, status, setEditMode}: IProps) => {
    return (
        <div className={s.description}>
            <div className={s.name}>{profile.fullName}</div>
            <ProfileStatus status={status} />
            <div><span className={s.title}>Looking for a job:</span> {profile.lookingForAJobDescription ? 'Yes' : 'No'}</div>
            <div><span className={s.title}>About me:</span> {profile.aboutMe}</div>
            <div className={s.contacts}>
                <span className={s.title}>Contacts:</span>
                <div className={s.items}>
                    <div>vk: {profile.contacts.vk}</div>
                    <div>facebook: {profile.contacts.facebook}</div>
                    <div>instagram: {profile.contacts.instagram}</div>
                    <div>twitter: {profile.contacts.twitter}</div>
                    <div>github: {profile.contacts.github}</div>
                </div>
                <div className={s.edit}>
                    <button onClick={setEditMode}>Edit</button>
                </div>
            </div>
        </div>
    )
};

export default ProfileData