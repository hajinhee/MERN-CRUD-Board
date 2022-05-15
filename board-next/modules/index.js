import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import {HYDRATE} from "next-redux-wrapper"
import  addBoard, { addBoardSaga } from './board/addBoard.js'
const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                console.log("HYDRATE", action);
                return {
                    ...state,
                    ...action.payload
                };
            default:
                return state;
        }
    },
    addBoard,
    
});
export function* rootSaga() {
    yield all([addBoardSaga()]);
}

export default rootReducer;