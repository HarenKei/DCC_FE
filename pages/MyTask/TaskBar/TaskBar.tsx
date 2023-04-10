import React from "react";
import { useState } from 'react';
import TaskBarCtgry from "./TaskBarCtgry";
import styled from "styled-components";
import AddTaskButton from "../AddTask/AddTaskButton";
// import AddTaskModal from "./AddTaskModal"

const TaskBar = (props:any) => {
    return(
        <TaskHeaderContainer>
            <Container>
                <TaskBarCtgry title={"내 할 일"}/>
                <TaskBarCtgry title={"중요한 일"}/>
                <TaskBarCtgry title={"완료된 일"}/>
            </Container>
            <AddTaskButton > {/*AddTaskButton 클릭시 모달창 노출 */}
            
            </AddTaskButton>
        </TaskHeaderContainer>
    );
};

const TaskHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-around;
    aline-item: center;
    
    width: 40vw;
    height: 8vh;
    margin-right: 6vw;

    background-color: #d7d7d7;
    border-radius: 59px;

    box-shadow: 0px 1px 1px black;
`;

export default TaskBar;