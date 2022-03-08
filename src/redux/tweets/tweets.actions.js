import { tweetActionTypes } from "./tweets.types";

export const fetchTweetStart = () => ({
    type: tweetActionTypes.FETCH_TWEET_START
})

export const fetchMyTweetStart = (email) => ({
    type: tweetActionTypes.FETCH_MY_TWEET_START,
    payload: email
})

export const fetchTweetSuccess = tweet => ({
    type: tweetActionTypes.FETCH_TWEET_SUCCESS,
    payload: tweet
})

export const fetchTweetFailure = error => ({
    type: tweetActionTypes.FETCH_TWEET_FAILURE,
    payload: error
})

