import React from "react";
import styled from "styled-components";

const ScheduleInfo = () => {
    return(  
    <ScheduleInfoContainer>
        <ScheduleInfoCardContainer>
            start={"3월 20일"};
            end={"3월 22일"};
            index={"국가장학금신청"}
        </ScheduleInfoCardContainer>

        
    </ScheduleInfoContainer>
    );
};

const ScheduleInfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;

    background-color : #fff;
    border-radius: 15px;
    box-shadow: 0px 1px 1px black;
`;

const ScheduleInfoCardContainer = styled.div`

`;

export default ScheduleInfo;