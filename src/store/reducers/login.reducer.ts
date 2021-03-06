import * as userActions from './../actions/actions';
import { User } from './../models/login.model';
import { Action } from 'rxjs/scheduler/Action';

export interface AppState {
    users: User[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: AppState = {
    users: [],
    loaded: false,
    loading: false
};

const newState = (state, newData) => {
    const updatedState = Object.assign({}, state, newData);
    return updatedState;
};

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case userActions.LOGIN_SUBMIT: {
            return {
                ...state,
                users: action.payload,
                loaded: false,
                loading: true
            };
        }

        case userActions.LOGIN_SUCESS: {
            const users = action.payload;
            return {
                ...state,
                // ,
                loaded: true,
                loading: false
            };
        }

        case userActions.LOGIN_FAIL: {
            return {
                ...state,
                loaded: false,
                loading: false
            };
        }

        default: {
            return state;
        }
    }
}

// export const getUsers = (state: AppState) => state.users;
