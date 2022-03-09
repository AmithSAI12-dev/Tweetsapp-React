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

export const createTweetStart = tweet => ({
    type: tweetActionTypes.CREATE_TWEET_START,
    payload: tweet
})


export const createTweetSuccess = tweet => ({
    type: tweetActionTypes.CREATE_TWEET_SUCCESS,
    payload: tweet
})

export const createTweetFailure = error => ({
    type: tweetActionTypes.CREATE_TWEET_FAILURE,
    payload: error
})

export const deleteTweetStart = (tweet) => ({
    type: tweetActionTypes.DELETE_TWEET_START,
    payload: tweet
})

export const deleteTweetSuccess = message => ({
    type: tweetActionTypes.DELETE_TWEET_SUCCESS,
    payload: message
})

export const deleteTweetFailure = error => ({
    type: tweetActionTypes.DELETE_TWEET_FAILURE,
    payload: error
})


export const updateTweetStart = tweet => ({
    type: tweetActionTypes.UPDATE_TWEET_START,
    payload: tweet
})


export const updateTweetSuccess = tweet => ({
    type: tweetActionTypes.UPDATE_TWEET_SUCCESS,
    payload: tweet
})

export const updateTweetFailure = error => ({
    type: tweetActionTypes.UPDATE_TWEET_FAILURE,
    payload: error
})
