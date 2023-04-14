import React from 'react';
import styled from 'styled-components';

interface PropsType {
    setModalOpen : Function,
    id: string,
    title: string,
    content: string,
    writer: string
}

const ModalBasic = ({setModalOpen, id, title, content, writer}: PropsType) => { 
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <ModalContainer>
            <ModalCloseButton onClick={closeModal}>
            X
            </ModalCloseButton>
            <p>모달창입니다<div className=""></div></p>
        </ModalContainer>
    );
};

const ModalContainer = styled.div`
  width: 300px;
  height: 200px;
  z-index: 999;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);

  background-color: gray;
  border: 1px solid black;
  border-radius: 8px;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;  
`;

export default ModalBasic;