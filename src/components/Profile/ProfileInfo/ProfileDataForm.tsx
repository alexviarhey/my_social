import React from 'react'
import { Formik, Form } from 'formik';
import { MyTextInput } from '../../common/FormControl';

const contacts = {
    vk: '',
    facebook: '',
    instagram: '',
    twitter: '',
    website: '',
    youtube: '',
    mainLink: ''
};

const ProfileDataForm = () => {
    return (
        <>
            <Formik
                initialValues={{
                lookingForAJob: false,
                lookingForAJobDescription: '',
                fullName: '',
                github: '',
                vk: '',
                facebook: '',
                instagram: '',
                twitter: '',
                website: '',
                youtube: '',
                mainLink: ''
            }}
                onSubmit={(values) => console.log(values)}
            >
            <Form>
                <MyTextInput type='text' name='fullName' label='fullName' />
                <MyTextInput type='text' name='lookingForAJobDescription' label='lookingForAJobDescription'/>
                {Object.keys(contacts).map(key => (
                     <MyTextInput type='text' name={`contacts.${key}`} label={key}/>))}
                     <button type='submit'>Send</button>
            </Form>
            </Formik>
        </>
    )
};


export default ProfileDataForm