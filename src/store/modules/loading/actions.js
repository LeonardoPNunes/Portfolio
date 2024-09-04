import store from "../../index";
import { TYPES } from "./types";

function dispatch(data) {
    data = { ...data }
    store.dispatch(data);
}

export function setLoading(value) {
    dispatch({
        type: TYPES.SET_LOADING,
        value
    })
}