import React, {useEffect} from 'react'
import Profile from "./Profile";
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from '../../redux/store';
import {getUserProfile, getStatus} from '../../redux/profile-reducer';
import {IProfileData} from "../../types/profile-types";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



const ProfileContainer = (props: any) => {
    //React-redux hooks
    const authorizedUserId = useSelector((state: AppStateType): number | null => state.authPage.id);
    let profile = useSelector((state: AppStateType): IProfileData | null => state.profilePage.profileData);
    let status = useSelector((state: AppStateType): string => state.profilePage.status);
    const dispatch = useDispatch();
    //userId definition
    let userId = props.match.params.userId;
    if (!userId) {
        userId = authorizedUserId
    }

    useEffect(() => {
        dispatch(getUserProfile(userId));
        dispatch(getStatus(userId))
    }, [userId]);

    return (
        <Profile profile={profile} status={status} userId={userId} authorizedUserId={authorizedUserId} />
    )
};


export default compose(withAuthRedirect, withRouter)(ProfileContainer)