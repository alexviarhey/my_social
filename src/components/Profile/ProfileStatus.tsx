import React, {useEffect, useState} from 'react'
import s from "./Profile.module.css";
import {useDispatch} from "react-redux";
import { updateStatus } from '../../redux/profile-reducer';


interface IProps {
    status: string
}

const ProfileStatus = (props: IProps) => {
    const [status, setStatus] = useState('');
    const [editMode, setEditMode] = useState(false);
    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);
    let dispatch = useDispatch();
    const activateEM = () => {
        setEditMode(true)
    };
    const deactivateEM = () => {
        setEditMode(false);
        dispatch(updateStatus(status))
    };

    return (
        <div className={s.status}>
            {editMode ?
                <input
                    value={status} onChange={(e) => setStatus(e.currentTarget.value)}
                    onBlur={deactivateEM} autoFocus={true} className={s.statusInput}
                /> :
                <div onClick={activateEM}>{status}</div>}
        </div>
    )
};


export default ProfileStatus