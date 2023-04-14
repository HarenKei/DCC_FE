import React from "react";
import styled from "styled-components";

interface Props {
    title: string
   };

const TsChannelBox = (props: Props) => {
    return(
        <div>
            <ChannelStyle>
                {props.title}
            </ChannelStyle>
        </div>
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
`;

export default TsChannelBox;