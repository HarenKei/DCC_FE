import React from "react";
import TaskBarCtgry from "./TaskBarCtgry";
import styled from "styled-components";

const TaskBar = () => {
    return(
        <Container>
            <TaskBarCtgry title={"내 할 일"}/>
            <TaskBarCtgry title={"중요한 일"}/>
            <TaskBarCtgry title={"완료된 일"}/>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-around;
    aline-item: center;
    
    width: 40vw;
    height: 5vw;

    background-color: grey;
    border-radius: 10px;
`;


export default TaskBar;