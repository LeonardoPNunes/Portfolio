import store from "../../index";
import { TYPES } from "./types";

function dispatch(data) {
    data = { ...data }
    store.dispatch(data);
}

export function setOpen() {
    dispatch({
        type: TYPES.SET_OPEN
    })
}