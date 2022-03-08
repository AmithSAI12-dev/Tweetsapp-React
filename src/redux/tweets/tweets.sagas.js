import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { createTweetFailure, createTweetSuccess, fetchTweetFailure, fetchTweetSuccess } from './tweets.actions';
import { tweetActionTypes } from './tweets.types'


export function* deleteTweet({payload: {email, id}}) {
    
}

export function* postTweet({payload: {id, tag, message, email}}) {
    try {
        const tweet = yield axios.post("http://localhost:8080/api/v1.0/tweets/add/", 
        {
            id: id,
            tags: tag,
            message: message,
            email: email
        },
        {
            params: {
                username: email
            }
        });

        yield put(createTweetSuccess(tweet.data));
    }catch(error) {
        yield put(createTweetFailure(error.response.data.message));
    }
}

export function* getAllTweets() {
    try {
        const tweets = yield axios.get("http://localhost:8080/api/v1.0/tweets/all", {
            params: {
                page: 0,
                size: 10
            }
        });
        yield put(fetchTweetSuccess(tweets.data));
    }catch(error) {
        yield put(fetchTweetFailure(error.response.data.message));
    }
}

export function* getMyTweets({payload: {email}}) {
    try {
        const tweets = yield axios.get("http://localhost:8080/api/v1.0/tweets/username", {
            params: {
                email: email 
            }
        });
        yield put(fetchTweetStart(tweets.data));
    }catch(error) {
        yield put(fetchTweetFailure(error.response.data.message));
    }
}

export function* postTweetStart() {
    yield takeLatest(tweetActionTypes.CREATE_TWEET_START, postTweet);
}

export function* fetchMyTweetStart() {
    yield takeLatest(tweetActionTypes.FETCH_MY_TWEET_START, getMyTweets);
}

export function* fetchTweetStart() {
    yield takeLatest(tweetActionTypes.FETCH_TWEET_START, getAllTweets);
}

export function* tweetsSaga() {
    yield all([
        call(fetchTweetStart),
        call(fetchMyTweetStart),
        call(postTweetStart)
    ])
}