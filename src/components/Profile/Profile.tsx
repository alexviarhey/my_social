import React from 'react'
import s from './Profile.module.css'
import ava from '../../img/ava.png'
import {IProfileData} from "../../types/profile-types";
import Preloader from "../common/Preloader";
import ProfileStatus from "./ProfileStatus";


interface IProps {
    profile: IProfileData | null
    status: string
}


const Profile = (props: IProps) => {
    if(!props.profile) return <Preloader/>
    return (
        <div className={s.outer}>
            <div className={s.avaWrap}>
                <img className={s.ava} src={props.profile.photos.small || ava}/>
            </div>
            <div className={s.description}>
                <div className={s.name}>{props.profile.fullName}</div>
                <ProfileStatus status={props.status} />
                <div className={s.looking}>Looking for a job<input checked={props.profile.lookingForAJob} type="checkbox"/></div>
                <div className={s.contacts}>
                    <h4>Contacts:</h4>
                    <div className={s.items}>
                        <div>vk: {props.profile.contacts.vk}</div>
                        <div>facebook: {props.profile.contacts.facebook}</div>
                        <div>instagram: {props.profile.contacts.instagram}</div>
                        <div>twitter: {props.profile.contacts.twitter}</div>
                        <div>github: {props.profile.contacts.github}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};




export default Profile