import React from 'react'
import {Formik, Form} from 'formik';
import {MyTextInput, MyCheckbox} from '../../common/FormControl';
import s from './ProfileInfo.module.css'
import {useDispatch, useSelector} from "react-redux";
import { updateProfileData } from '../../../redux/profile-reducer';
import {AppStateType} from "../../../redux/store";
import {IProfileData} from "../../../types/profile-types";

const contacts = {
    vk: '',
    facebook: '',
    instagram: '',
    twitter: '',
    website: '',
    youtube: '',
    mainLink: ''
};

interface IProps {
    setEditMode: () => void
}

const ProfileDataForm = ({setEditMode}: IProps) => {
    const profile = useSelector((state: AppStateType): any => state.profilePage.profileData);
    debugger
    const dispatch = useDispatch();
    const sendNewProfileData = (profileData: any) => {
        setEditMode();
        dispatch(updateProfileData(profileData))
    };

    return (
        <>
            <Formik
                initialValues={{
                    aboutMe: profile.aboutMe,
                    lookingForAJob: false,
                    lookingForAJobDescription: profile.lookingForAJobDescription,
                    fullName: profile.fullName,
                    github: profile.contacts.github,
                    vk: profile.contacts.vk,
                    facebook: profile.contacts.facebook,
                    instagram: profile.contacts.instagram,
                    twitter: profile.contacts.twitter,
                    website: profile.contacts.website,
                    youtube: profile.contacts.youtube,
                    mainLink: ''
                }}
                onSubmit={(profileData) => sendNewProfileData(profileData)}
            >
                <Form>
                    <div className={s.formWrapper}>
                        <MyTextInput type='text' name='fullName' label='fullName'/>
                        <MyTextInput type='text' name='aboutMe' label='aboutMe'/>
                        < MyCheckbox name='lookingForAJob'>lookingForAJob</MyCheckbox>
                        <MyTextInput type='text' name='lookingForAJobDescription' label='lookingForAJobDescription'/>
                        {Object.keys(contacts).map(key => (
                            <MyTextInput type='text' name={`contacts.${key}`} label={key}/>))}
                        <button type='submit'>Send</button>
                    </div>
                </Form>
            </Formik>
        </>
    )
};


export default ProfileDataForm