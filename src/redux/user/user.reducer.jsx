import { userActionTypes } from "./user.types"

const INITIAL_STATE = {
    currentUser: "",
    successMessage: "",
    errorMessage: ""
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SET_CURRENT_LOGGEDIN_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case userActionTypes.LOGIN_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                errorMessage: "",
                successMessage: ""
            }
        case userActionTypes.REGISTER_USER_SUCCESS:
            return {
                ...state,
                successMessage: action.payload,
                errorMessage: ""
            }
        case userActionTypes.LOGIN_USER_FAILURE:
        case userActionTypes.REGISTER_USER_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                successMessage: ""
            }
        case userActionTypes.REGISTER_USER_START:
        case userActionTypes.LOGIN_USER_START:
            return {
                ...state,
                errorMessage: "",
                successMessage: "",
                currentUser: ""
            }    
        default:
            return state;
    }
}

export default userReducer;