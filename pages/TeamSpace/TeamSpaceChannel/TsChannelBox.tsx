import React from "react";
import styled from "styled-components";


const TsChannelBox = ({ data, onClick }: any) => {

    const { teamName, id } = data;

    const handleClick = () => {
        onClick(id);
    };
    return (
        <ChannelStyle onClick={handleClick}>
            {teamName}
        </ChannelStyle>
    );
};

const ChannelStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;

    width: 62px;
    height: 62px;

    font-size : 20px;
    font-weight: 800;

    border-radius: 18px;

    background-color: #ADABAB;

    cursor: pointer;
`;

export default TsChannelBox;