import { combineReducers } from "redux";
import tweetsReducer from "./tweets/tweets.reducer";
import userReducer from "./user/user.reducer";



export const rootReducer = combineReducers({
    userReducer: userReducer,
    tweetsReducer: tweetsReducer
})