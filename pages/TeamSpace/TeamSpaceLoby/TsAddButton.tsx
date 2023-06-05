import React from "react";
import styled from "styled-components";


const TsAddButton = ({setModalOpen} : any) => {
    // 모달창 노출 여부 state
    // 모달창 노출
    const modalHandler = () => {
        setModalOpen(true);
    };
    return(
        <AddBtnContainer>
            <button onClick={modalHandler}>팀 추가</button>
        </AddBtnContainer>
    );
    
};

const AddBtnContainer = styled.div`
    margin-left: 1vw;
    button{
        padding: 1rem;
        width: 8rem;

        background-color: red;
        border: none;
        border-radius: 10px;

        box-shadow: 0px 0px 3px black;
    }
`;


export default TsAddButton;