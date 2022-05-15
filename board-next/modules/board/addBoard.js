import {createAction, handleActions} from 'redux-actions';
import {call, delay, put, takeLatest, select, throttle} from 'redux-saga/effects';
import {HYDRATE} from "next-redux-wrapper"
import axios from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}
export const initialState = {
    isAdded: false
}
const ADD_REQUEST = 'board/ADD_REQUEST';
const ADD_SUCCESS = 'board/ADD_SUCCESS';
const ADD_FAILURE = 'board/ADD_FAILURE';

export const addRequest = createAction(ADD_REQUEST, data => data)

export function* addBoardSaga() {
    yield takeLatest(ADD_REQUEST, add);
}
function* add(action) {
    try {
        const response = yield call(addBoardAPI, action.payload)
        console.log(" 게시글 서버다녀옴: " + JSON.stringify(response.data))
        yield put({type: ADD_SUCCESS, payload: response.data})
        yield put(window.location.href = "/board/boardList")
    } catch (error) {
        yield put({type: ADD_FAILURE, payload: error.message})
    }
}
const addBoardAPI = payload => axios.post(`${SERVER}/board/addBoard`, payload, {headers})

const addBoard = handleActions({
    [HYDRATE]: (state, action) => 
    ({...state, ...action.payload})}, 
    initialState
)
export default addBoard
  