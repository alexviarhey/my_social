import React, {useEffect, useState} from 'react'
import s from "../Profile.module.css";
import {useDispatch, useSelector} from "react-redux";
import { updateStatus } from '../../../redux/profile-reducer';
import {AppStateType} from "../../../redux/store";


interface IProps {
    status: string
}

const ProfileStatus = ({status}: IProps) => {
    const [title, setTitle] = useState('');
    const [editMode, setEditMode] = useState(false);
    useEffect(() => {
        setTitle(status)
    }, [status]);
    let dispatch = useDispatch();
    const activateEM = () => {
        setEditMode(true)
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