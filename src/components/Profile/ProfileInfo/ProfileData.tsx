import React, { useState } from 'react'
import s from "../Profile.module.css";
import ProfileStatus from "./ProfileStatus";
import {IProfileData} from "../../../types/profile-types";


interface IProps {
    profile: IProfileData
    status: string
    onClickCb: () => any
}

const ProfileData = ({profile, status, onClickCb}: IProps) => {
    return (
        <div className={s.description}>
            <div className={s.name}>{profile.fullName}</div>
            <ProfileStatus status={status} />
            <div></div>
            <div className={s.looking}>Looking for a job<input checked={profile.lookingForAJob} type="checkbox"/></div>
            <div className={s.contacts}>
                <h4>Contacts:</h4>
                <div className={s.items}>
                    <div>vk: {profile.contacts.vk}</div>
                    <div>facebook: {profile.contacts.facebook}</div>
                    <div>instagram: {profile.contacts.instagram}</div>
                    <div>twitter: {profile.contacts.twitter}</div>
                    <div>github: {profile.contacts.github}</div>
                </div>
            </div>
            <button onClick={onClickCb}>Править</button>
        </div>
    )
};

export default ProfileData