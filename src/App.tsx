import React, {useEffect} from 'react'
import './App.css'
import Header from './components/Header/Header';
import Navigation from "./components/Navigation/Navigation";
import {Route} from 'react-router-dom';
import Users from './components/Users/Users';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import {useDispatch, useSelector} from "react-redux";
import {initialize} from './redux/app-reducer';
import {AppStateType} from './redux/store';
import Preloader from './components/common/Preloader';
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from './components/Login/Login';



const App = () => {
    let dispatch = useDispatch();
    let initialized = useSelector((state: AppStateType) => state.appPage.initialized);
    useEffect(() => {
        dispatch(initialize())
    }, []);



    if (!initialized) {
        return <Preloader/>
    }
    return (
        <div>
            <Header/>
            <div className='wrapper'>
                <Navigation/>
                <Route exact path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/users' render={() => <Users/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/setting' render={() => <Setting/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
        </div>
    )
};


export default App
