import axios from 'axios'
import { call, put, takeLatest, all} from 'redux-saga/effects'
import { loginUserFailure, loginUserSuccess, registerUserFailure, registerUserSuccess } from './user.actions';
import { userActionTypes } from './user.types'


export function* register({payload: {email, password, name}}) {
    try {
        const user = yield axios.post("http://34.224.86.128:8080/api/v1.0/tweets/register", 
            {            
                email: email,
                name: name,
                password: password
            }
        )
        yield put(registerUserSuccess(user.data.message));
    }catch(error) {
        yield put(registerUserFailure(error.response.data.message));

    }
}

export function* onRegisterStart() {
    yield takeLatest(userActionTypes.REGISTER_USER_START, register);
}


export function* login({payload: {email, password}}) {
    try {
        const user = yield axios.post("http://34.224.86.128:8080/api/v1.0/tweets/login", 
            {            
                email: email,
                name: "",
                password: password
            }
        )
        yield put(loginUserSuccess(user.data.email));
    }catch(error) {
        yield put(loginUserFailure(error.response.data.message));

    }
}

export function* onLoginStart() {
    yield takeLatest(userActionTypes.LOGIN_USER_START, login);
}

export function* userSaga() {
    yield all([
        call(onRegisterStart),
        call(onLoginStart)
    ])
}
