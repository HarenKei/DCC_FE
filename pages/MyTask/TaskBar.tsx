import React from "react";
import TaskBarCtgry from "./TaskBarCtgry";
import styled from "styled-components";
import AddTaskButton from "./AddTaskButton";

const TaskBar = () => {
    return(
        <TaskHeaderContainer>
            <Container>
                <TaskBarCtgry title={"내 할 일"}/>
                <TaskBarCtgry title={"중요한 일"}/>
                <TaskBarCtgry title={"완료된 일"}/>
            </Container>
            <AddTaskButton/>
        </TaskHeaderContainer>
        
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-around;
    aline-item: center;
    
    width: 40vw;
    height: 8vh;
    margin-right: 6vw;

    background-color: grey;
    border-radius: 10px;
`;
const TaskHeaderContainer = styled.div`
    display: felx;
    flex-direction: row;

    justify-content: center;
`;


export default TaskBar;