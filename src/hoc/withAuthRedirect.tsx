import React from 'react'
import {AppStateType} from "../redux/store";
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';


interface IMapStateProps {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): IMapStateProps => {
    return {
        isAuth: state.authPage.isAuth
    }
}


export const withAuthRedirect = (Component: any) => {
        const ContainerComponent = (props: any) => {
        if(!props.isAuth) return <Redirect to='/login'/>;
        return <Component {...props}/>
    };

    return connect(mapStateToProps, null)(ContainerComponent)
};