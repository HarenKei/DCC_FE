import React from "react";
import styled from "styled-components";
import Header from "@/src/Common/Header";
import TsCategory from "./TsCategory";
import TsChannelBox from "./TsChannelBox";
import TsMemberList from "./TsMemberList";
import TsPostBox from "./TsPostBox";

const TeamSpace = () => {
    return(
        <div>
            <Header/>
            <GridContainer>
                    <TsMember>
                        <MemberLogo><p>멤버</p></MemberLogo>
                        <TsMemberList title={"이재형"}/>
                        <TsMemberList title={"이재형"}/>
                        <TsMemberList title={"이재형"}/>
                    </TsMember>

                    <TsHeaderContainer>
                        
                        <TsCategory title={"팀 프로젝트"}/>

                        <TsChannelContainer>
                            <TsChannelBox title={"자바"}/>
                            <TsChannelBox title={"리액트"}/>
                            <TsChannelBox title={"JS"}/>
                            <TsChannelBox title={"프젝"}/>
                        </TsChannelContainer>
                    </TsHeaderContainer>

                <TsPostBoxContainer>
                    <TsPostBox user={"이재형"} content={"집 가고싶다"} date={"2023-04-14"}/>
                </TsPostBoxContainer>
            </GridContainer>
        </div>
    );
};
const GridContainer = styled.div`
    margin: 10px 10px 10px 10px;
    width: 98vw;
    height: 86vh;
    display: grid;
    grid-Template-Rows: 1fr 7.5fr;
    grid-Template-Columns: 1fr 8.5fr;

    grid-template-areas: 
        "G_Member G_Header"
        "G_Member G_Content";
`;

const TsMember = styled.div`
    grid-area: G_Member;

    width: 9.5vw;
    height: 87vh;
    border-radius: 20px;
    margin-right: 19px;

    background-color: #C3C3C3;
`;

const MemberLogo = styled.div`
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 11px;
    margin-top: 8px;

    font-size : 20px;
    font-weight: 550;
`;

const TsHeaderContainer = styled.div`
    grid-area: G_Header;
    display: flex;
    flex-direction: row;
    width: 86vw;
    height: 10.8vh;
`;

const TsChannelContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 76vw;
    height: 10.8vh;
    border-radius: 0px 20px 20px 0px;

    background-color: #D9D9D9;
`;

const TsPostBoxContainer = styled.div`
    margin-top: 2vh;

    width: 86vw;
    height: 74vh;

    border-radius: 20px;

    background-color: #C3C3C3;
`;

export default TeamSpace;