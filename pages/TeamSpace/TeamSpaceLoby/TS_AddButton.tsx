import React from "react";
import styled from "styled-components";
import TS_AddModal from "./AddTaskModal";
import { useState } from "react";

function TS_AddButton(props:any) {
    // 모달창 노출 여부 state
    const [modalOpen, setModalOpen] = useState(false);
    // 모달창 노출
    const showModal = () => {
        setModalOpen(true);
    };
    return(
        <AddButtonContainer onClick={showModal}>
            {modalOpen && <TS_AddModal setModalOpen={setModalOpen} />} {/*AddTaskButton 클릭시 모달창 노출 */}
            <P>할 일 추가</P>
        </AddButtonContainer>
    );
    
};

const AddButtonContainer = styled.button`
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


export default TS_AddButton;