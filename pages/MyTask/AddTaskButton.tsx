import React from "react";
import styled from "styled-components";

const AddTaskButton = (props:any) => {
    return(
        <Container>
            <P>할 일 추가</P>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 8vw;
    height: 5vw;

    background-color: red;
    border-radius: 10px;
`;
const  P= styled.p`
    font-size: 20px;
`;


export default AddTaskButton;