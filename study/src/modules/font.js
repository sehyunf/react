// 타입, 액션, 리듀서
import { createAction, handleActions } from 'redux-actions'
// type 생성
const INCREASE = "font/INCREASE"

// action 생성
export const increase = createAction(INCREASE)

// state 초기화
const initialState = {
  fontSize : "1rem"
}

// reducer 제작
const font = handleActions({
  [INCREASE] : () => ({fontSize : "3rem"})
}, initialState)
export default font;