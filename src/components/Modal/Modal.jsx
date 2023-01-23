import { createPortal } from "react-dom";
import styled from "styled-components";

export const Modal = ({
  onClose,
  onSaveHandler,
  titleInputRef,
  urlInputRef,
  ratingInputRef,
  height,
  children,
}) => {
  return (
    <>
      {createPortal(
        <>
          {" "}
          <Backdrop onClick={onClose} />
          <StyledDiv style={{ height: height }}>{children}</StyledDiv>
        </>,
        document.getElementById("backdrop")
      )}
    </>
  );
};

const StyledDiv = styled.div`
  background-color: white;
  width: 400px;
  position: fixed;
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
  
  background-color: black;
  opacity: 0.8;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 4;
`;

export const StyledModalDiv = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
