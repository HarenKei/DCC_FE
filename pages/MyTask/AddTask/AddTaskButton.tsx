import React from "react";
import styled from "styled-components";

const AddTaskButton = (props:any) => {
    return(
        <Container>
            <P>{props.title}</P>
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