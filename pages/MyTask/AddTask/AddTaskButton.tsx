import React from "react";
import styled from "styled-components";
import AddTaskModal from "../TaskBar/AddTaskModal";
import { useState } from "react";

function AddTaskButton(props:any) {
    // 모달창 노출 여부 state
    const [modalOpen, setModalOpen] = useState(false);
    // 모달창 노출
    const showModal = () => {
        setModalOpen(true);
    };
    return(
        <Container onClick={showModal}>
            {modalOpen && <AddTaskModal setModalOpen={setModalOpen} />} {/*AddTaskButton 클릭시 모달창 노출 */}
            <P>할 일 추가</P>
        </Container>
    );
    
};

const Container = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 8vw;
    height: 8vh;

    background-color: red;
    border-radius: 20px;

    box-shadow: 0px 1px 1px black;
`;
const  P= styled.p`
    font-size: 1.3vw;
`;


export default AddTaskButton;