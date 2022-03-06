import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root.reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./root.saga";


const sageMiddleware = createSagaMiddleware();
const middleware = [logger, sageMiddleware];
const store = createStore(rootReducer, applyMiddleware(...middleware));
sageMiddleware.run(rootSaga);
export default store;
