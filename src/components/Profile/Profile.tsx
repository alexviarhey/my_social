import React, {useEffect} from 'react'
import s from './Profile.module.css'
import {IProfileData} from "../../types/profile-types";
import Preloader from "../common/Preloader";
import ProfileInfo from './ProfileInfo/ProfileInfo';



interface IProps {
    profile: IProfileData | null
    status: string
    authorizedUserId: number | null
    userId: number
}


const Profile = ({profile, status, userId, authorizedUserId}: IProps) => {
    if(!profile) return <Preloader/>
    return (
        <div className={s.outer}>
            <ProfileInfo userId={userId} authorizedUserId={authorizedUserId} profile={profile} status={status} />
        </div>
    )
};







export default Profile