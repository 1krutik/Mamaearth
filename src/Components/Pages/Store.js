import { myReducer } from "./Reducer"
import { legacy_createStore as createSore } from "redux"

export const myStore=createSore(myReducer)