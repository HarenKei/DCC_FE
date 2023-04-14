import React from "react";
import styled from "styled-components";

const ScheduleCalender = () => {
    return(
    <Calender>
    </Calender>
    );
};

const Calender = styled.div`
    padding: 1rem;
    background-color: white;
    margin: 1rem auto;
    width: 1100px;
    heigth: 290px;

    border-radius: 50px;
    box-shadow: 0px 1px 1px black;
    max-width: 99%;
    max-heigth: 99%;
    border: 8px solid #D9D9D9;
    border-radius: 50px;
`;

export default ScheduleCalender;