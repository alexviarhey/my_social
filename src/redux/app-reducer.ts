import { getAuthUserData } from "./auth-reducer";

const INITIALIZE_SUCCESS = 'appReducer/INITIALIZE_SUCCESS';

interface IInitialApp {
    initialized: boolean
}

interface IInitializeSuccessAction {
    type: typeof INITIALIZE_SUCCESS
}


const initialState: IInitialApp = {
    initialized: false
};


export const appReducer = (state=initialState, action: any) => {
    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {
                ...state,
                initialized: true
            };

        default: return state
    }
};

const initializeSuccess = (): IInitializeSuccessAction => {
    return {type: INITIALIZE_SUCCESS}
};

export const initialize = () => async(dispatch: any) => {
    await dispatch(getAuthUserData());
    dispatch(initializeSuccess())
};


