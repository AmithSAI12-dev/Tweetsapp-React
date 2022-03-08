import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { fetchTweetFailure, fetchTweetSuccess } from './tweets.actions';
import { tweetActionTypes } from './tweets.types'

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

export function* fetchMyTweetStart() {
    yield takeLatest(tweetActionTypes.FETCH_MY_TWEET_START, getMyTweets);
}

export function* fetchTweetStart() {
    yield takeLatest(tweetActionTypes.FETCH_TWEET_START, getAllTweets);
}

export function* tweetsSaga() {
    yield all([
        call(fetchTweetStart),
        call(fetchMyTweetStart)
    ])
}