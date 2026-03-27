import React from "react";
import * as globalActions from "../../store/modules/global/actions";
import { Container, GifClose, GifModal, ModalContent } from "./style";

const Modal = (gif) => {
  return (
    <Container onClick={() => globalActions.setOpen()}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <GifClose type="button" onClick={() => globalActions.setOpen()}>
          Fechar
        </GifClose>
        <GifModal src={gif.gif} alt="Prévia ampliada do projeto" />
      </ModalContent>
    </Container>
  );
};

export default Modal;
