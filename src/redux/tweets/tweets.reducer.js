import { tweetActionTypes } from "./tweets.types";

const INITIAL_STATE = {
    tweets: [],
    error: undefined
}

const tweetsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case tweetActionTypes.FETCH_TWEET_START:
            return state;
        case tweetActionTypes.FETCH_TWEET_SUCCESS:
            return {
                ...state,
                tweets: action.payload,
                error: undefined
            }
        case tweetActionTypes.FETCH_TWEET_FAILURE:
            return {
                ...state,
                error: action.payload,
                tweets: []
            }
        case tweetActionTypes.CREATE_TWEET_START:
            return {
                ...state,
                error: undefined
            }
        case tweetActionTypes.CREATE_TWEET_SUCCESS:
            return {
                ...state,
                tweets: state.tweets.concat(action.payload),
                error: undefined
            }
        case tweetActionTypes.CREATE_TWEET_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default tweetsReducer