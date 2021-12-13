import styled from "styled-components";
import { useEffect } from "react";
interface Modal {
  open: boolean;
  onClose(): any;
}
function Modal({ modal, unSetModal, modalConfig = {} }: any) {
  useEffect(() => {
    const bind = (e: any) => {
      if (e.keyCode !== 27) {
        return;
      }

      if (
        document.activeElement &&
        ["INPUT", "SELECT"].includes(document.activeElement.tagName)
      ) {
        return;
      }

      unSetModal();
    };

    document.addEventListener("keyup", bind);
    return () => document.removeEventListener("keyup", bind);
  }, [modal, unSetModal]);

  if (modalConfig?.isNude) {
    return (
      <NudeContainer onClick={unSetModal}>
        <div
          onClick={(e) => {
            e.stopPropagation(); //For stop click event on Wrapper
          }}
        >
          {modal}
        </div>
      </NudeContainer>
    );
  } else {
    return (
      <Container onClick={unSetModal}>
        <Wrapper
          onClick={(e) => {
            //For stop click event on Wrapper
            e.stopPropagation();
          }}
        >
          <UpperSection>
            <CloseIcon onClick={unSetModal}>&#10799;</CloseIcon>
          </UpperSection>
          {modal}
        </Wrapper>
      </Container>
    );
  }
}
const NudeContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(249, 250, 251, 0.6);
  top: 0;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  position: flex;
  flex-direction: column;
  min-width: 200px;
  min-height: 200px;
  background: white;
  border-radius: 10px;
`;
const UpperSection = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  padding-right: 10px;
  justify-content: flex-end;
`;
const CloseIcon = styled.text`
  font-size: 30px;
  cursor: pointer;
`;
export default Modal;
