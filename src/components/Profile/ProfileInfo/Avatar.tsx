import React, {ChangeEvent, FormEvent, useState} from 'react'
import s from "../Profile.module.css";
import ava from "../../../img/ava.png";
import {useDispatch} from "react-redux";
import { changePhoto } from '../../../redux/profile-reducer';



interface IProps {
    photo: string
}


const Avatar = ({photo}: IProps) => {
    let dispatch = useDispatch();
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      if(e.target.files) {
          dispatch(changePhoto(e.target.files[0]))
      }
    };
    return (
        <div>
            <div className={s.avaWrap}>
                <img className={s.ava} src={photo || ava}/>
            </div>
            <div className={s.avaForm}>
                <label className={s.changePhoto} htmlFor='files'>Change Photo</label>
                <input className={s.photoInput} type="file" id='files' onChange={(e) => onInputChange(e)}/>
            </div>
        </div>


    )
};

export default Avatar