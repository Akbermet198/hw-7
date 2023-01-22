import { createPortal } from "react-dom";
import styled from "styled-components";
 

export const Modal = ({onClose, onSaveHandler,titleInputRef,urlInputRef,ratingInputRef, children }) => {
  return (
    <>
      {createPortal(
        <>
          {" "}
          <Backdrop onClick={onClose} />
          <StyledDiv>{children}</StyledDiv>
        </>,
        document.getElementById("backdrop")
      )}
    </>
  );
};

const StyledDiv = styled.div`
  background-color: white;
  width: 400px;
  height: 300px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 5;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: flex-start;
  justify-content: space-between;
`;


const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.9;
  position: absolute;
  z-index: 4;
`;