import React from "react"

import * as globalActions from "../../store/modules/global/actions"
import {
    Container, GifClose, GifModal
} from "./style"

const Modal = (gif) =>{

    return(
        <Container onClick={() => globalActions.setOpen()}>
            <div>
            <GifClose onClick={() =>{}}>X</GifClose>
            </div>
            <GifModal src={gif.gif} alt="" />
            
        </Container>
    )
}
export default Modal