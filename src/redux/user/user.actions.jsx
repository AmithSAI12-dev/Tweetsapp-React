import { userActionTypes } from "./user.types";


export const registerUserStart = (userObject) => ({
    type: userActionTypes.REGISTER_USER_START,
    payload: userObject
})

export const registerUserSuccess = message => ({
    type: userActionTypes.REGISTER_USER_SUCCESS,
    payload: message
})

export const registerUserFailure = error => ({
    type: userActionTypes.REGISTER_USER_FAILURE,
    payload: error
})

export const loginUserStart = (userObject) => ({
    type: userActionTypes.LOGIN_USER_START,
    payload: userObject
})

export const loginUserSuccess = email => ({
    type: userActionTypes.LOGIN_USER_SUCCESS,
    payload: email
})

export const loginUserFailure = error => ({
    type: userActionTypes.LOGIN_USER_FAILURE,
    payload: error
})