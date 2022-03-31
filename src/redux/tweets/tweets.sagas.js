import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { createTweetFailure, createTweetSuccess, deleteTweetFailure, deleteTweetSuccess, fetchTweetFailure, fetchTweetSuccess, updateTweetFailure, updateTweetSuccess } from './tweets.actions';
import { tweetActionTypes } from './tweets.types'


export function* updateTweet({payload: {id, tag, message, email}}) {
    try {
        const tweet = yield axios.put("http://54.227.27.85:8080/api/v1.0/tweets/update", {
            id: id,
            tags: tag,
            message: message,
            email: email
        }, {
            params: {
                tweetId: id,
                username: email
            }
        })
        yield put(updateTweetSuccess(tweet.data));
    }catch(error) {
        yield put(updateTweetFailure(error.response.data.message));
    }
}

export function* deleteTweet({payload: {id, email}}) {
    try {
        const tweet = yield axios.delete("http://54.227.27.85:8080/api/v1.0/tweets/delete",
            {
                params: {
                    username: email,
                    tweetId: id
                }
            }
        );
        yield put(deleteTweetSuccess({id: id, message: tweet.data}));
    }
    catch(error) {
        yield put(deleteTweetFailure(error.response.data.message));
    }
}

export function* postTweet({payload: {id, tag, message, email}}) {
    try {
        const tweet = yield axios.post("http://54.227.27.85:8080/api/v1.0/tweets/add/", 
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
        const tweets = yield axios.get("http://54.227.27.85:8080/api/v1.0/tweets/all", {
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
        const tweets = yield axios.get("http://54.227.27.85:8080/api/v1.0/tweets/username", {
            params: {
                email: email 
            }
        });
        yield put(fetchTweetSuccess(tweets.data));
    }catch(error) {
        yield put(fetchTweetFailure(error.response.data.message));
    }
}

export function* deleteTweetStart() {
    yield takeLatest(tweetActionTypes.DELETE_TWEET_START, deleteTweet);
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

export function* updateTweetStart() {
    yield takeLatest(tweetActionTypes.UPDATE_TWEET_START, updateTweet)
}

export function* tweetsSaga() {
    yield all([
        call(fetchTweetStart),
        call(fetchMyTweetStart),
        call(postTweetStart),
        call(deleteTweetStart),
        call(updateTweetStart)
    ])
}
