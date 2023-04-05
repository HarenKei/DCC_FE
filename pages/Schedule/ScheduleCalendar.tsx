import React from "react";
import styled from "styled-components";

const ScheduleCalender = () => {
    return(
    <Calender>
    </Calender>
    );
};

const Calender = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;

    background-color : #fff;
    border-radius: 15px;
    box-shadow: 0px 1px 1px black;
`;

export default ScheduleCalender;