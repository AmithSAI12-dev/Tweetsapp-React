import { tweetActionTypes } from "./tweets.types";

const INITIAL_STATE = {
    tweets: [],
    error: undefined,
    success: undefined
}

const tweetsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case tweetActionTypes.FETCH_TWEET_START:
            return state;
        case tweetActionTypes.FETCH_TWEET_SUCCESS:
            return {
                ...state,
                tweets: action.payload,
                error: undefined,
                success: undefined
            }
        case tweetActionTypes.FETCH_TWEET_FAILURE:
            return {
                ...state,
                error: action.payload,
                tweets: [],
                success: undefined
            }
        case tweetActionTypes.CREATE_TWEET_START:
        case tweetActionTypes.UPDATE_TWEET_START:
            return {
                ...state,
                error: undefined,
                success: undefined
            }
        case tweetActionTypes.CREATE_TWEET_SUCCESS:
            return {
                ...state,
                tweets: state.tweets.concat(action.payload),
                error: undefined,
                success: undefined
            }
        case tweetActionTypes.CREATE_TWEET_FAILURE:
        case tweetActionTypes.UPDATE_TWEET_FAILURE:
            return {
                ...state,
                error: action.payload,
                success: undefined
            }
        case tweetActionTypes.UPDATE_TWEET_SUCCESS:
            let tweet = state.tweets.filter(i => i.id !== action.payload.id);
            tweet.concat({
                id: action.payload.id,
                message: action.payload.message,
                tags: action.payload.tags,
                email: action.payload.email
            })
            return {
                ...state,
                error: undefined,
                tweets: tweet,
                success: action.payload.successMessage
            }
        case tweetActionTypes.DELETE_TWEET_START:
            return {
                ...state,
                error: undefined,
                success: undefined
            }
        case tweetActionTypes.DELETE_TWEET_SUCCESS:
            return {
                ...state,
                tweets: state.tweets.filter(i => i.id !== action.payload.id),
                success: action.payload.message
            }
        case tweetActionTypes.DELETE_TWEET_FAILURE:
            return {
                ...state,
                error: action.payload,
                success: undefined
            }
        default:
            return state;
    }
}

export default tweetsReducer