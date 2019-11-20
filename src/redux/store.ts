import {authReducer} from "./auth-reducer";
import { combineReducers, applyMiddleware, createStore } from "redux";
import thunkMiddleware from 'redux-thunk'
import {appReducer} from "./app-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";


const reducers = combineReducers({
    authPage: authReducer,
    appPage: appReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export type AppStateType = ReturnType<typeof reducers>


export default store