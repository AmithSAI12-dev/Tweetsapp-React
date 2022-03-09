import { createSelector } from "reselect";

const selectTweetReducer = state => state.tweetsReducer;

export const selectError = createSelector(
    [selectTweetReducer],
    tweet => tweet.error
)

export const selectTweets = createSelector(
    [selectTweetReducer],
    tweet => tweet.tweets
)

export const selectSuccess = createSelector(
    [selectTweetReducer],
    tweet => tweet.success
)