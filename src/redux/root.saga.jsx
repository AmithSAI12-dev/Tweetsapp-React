import { all, call } from "redux-saga/effects";
import { tweetsSaga } from "./tweets/tweets.sagas";
import { userSaga } from "./user/user.sagas";

export default function* rootSaga() {
    yield all([
      call(userSaga),
      call(tweetsSaga)
    ]);
  }