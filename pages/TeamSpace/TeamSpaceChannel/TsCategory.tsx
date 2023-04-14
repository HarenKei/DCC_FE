import React from "react";
import styled from "styled-components";

interface Props {
    title:String
   };

const TsCategory = (props: Props) => {
    return(
        <div>
            <TS_CategoryContent>
              <CategoryStyle>{props.title}</CategoryStyle>
            </TS_CategoryContent>
        </div>
    );
};

const TS_CategoryContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10vw;
    height: 10.8vh;
    border-radius: 20px 0px 0px 20px;
    border-width: 0px 2px 0px 0px;
    border-style: solid;

    background-color: #D9D9D9;
`;

const CategoryStyle = styled.div`
    align-self: center;
    font-size : 20px;
    font-weight: 400;
`;

export default TsCategory;