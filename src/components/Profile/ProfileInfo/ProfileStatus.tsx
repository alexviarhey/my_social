import React, {useEffect, useState} from 'react'
import s from "../Profile.module.css";
import {useDispatch} from "react-redux";
import { updateStatus } from '../../../redux/profile-reducer';



interface IProps {
    status: string
    userId: number
    authorizedUserId: number | null
}

const ProfileStatus = ({status, userId, authorizedUserId}: IProps) => {
    const [title, setTitle] = useState('');
    const [editMode, setEditMode] = useState(false);
    useEffect(() => {
        setTitle(status)
    }, [status]);
    let dispatch = useDispatch();
    const activateEM = () => {
        (userId === authorizedUserId) && setEditMode(true)
    };
    const deactivateEM = () => {
        setEditMode(false);
        dispatch(updateStatus(title))
    };

    return (
        <div className={s.status}>
            {editMode ?
                <input
                    value={title} onChange={(e) => setTitle(e.currentTarget.value)}
                    onBlur={deactivateEM} autoFocus={true} className={s.statusInput}
                /> :
                <div onClick={activateEM}>{status}</div>}
        </div>
    )
};


export default ProfileStatus