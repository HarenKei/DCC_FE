import React from "react";
import styled from "styled-components";

interface Props {
    title: string
   };

const TsMemberList = ({data} : any) => {
    const {name} = data;
    return(
        <div>
            <MemberStyle>
                {name}
            </MemberStyle>
        </div>
    );
};

const MemberStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 11px;
    margin-top: 8px;

    font-size : 18px;
    font-weight: 300;
`;

export default TsMemberList;