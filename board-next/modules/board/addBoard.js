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
// const DELETE_REQUEST = 'board/DELETE_REQUEST';
// const DELETE_SUCCESS = 'board/DELETE_SUCCESS';
// const DELETE_FAILURE = 'board/DELETE_FAILURE';

export const addRequest = createAction(ADD_REQUEST, data => data)
// export const deleteRequest = createAction(DELETE_REQUEST, data => data)

export function* addBoardSaga() {
    yield takeLatest(ADD_REQUEST, add);
    // yield takeLatest(DELETE_REQUEST, deleteBoard);
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

// function* deleteBoard(action) {
//     try {
//         console.log(`게시글 삭제`)   
//     } catch (error) {
//     }
// }

const addBoard = handleActions({
    [HYDRATE]: (state, action) => 
    ({...state, ...action.payload})}, 
    initialState
)
export default addBoard
  