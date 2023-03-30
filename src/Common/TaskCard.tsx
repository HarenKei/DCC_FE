import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  category: string;
  date: string;
  status: string;
}

const TaskCard = (props : Props) => {
  return (
    <TaskCardContainer>
      <TaskCardInfoContainer>
        <TaskTitleP>{props.title}</TaskTitleP>
        <TaskCategoryP>{props.category} | {props.date}</TaskCategoryP>
      </TaskCardInfoContainer>

      <TaskStatusBanner>
        <p>{props.status}</p>
      </TaskStatusBanner>
    </TaskCardContainer>
  );
};

const TaskCardContainer = styled.div`
  width: 40vw;
  height: 7vh;
  border-radius: 10px;

  background-color: grey;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;

  box-shadow: 0px 1px 1px black;
`;

const TaskCardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

const TaskTitleP = styled.p`
  font-size: 15pt;
  font-weight: 900;

`;

const TaskCategoryP = styled.p`
  font-weight: 100;
`;

const TaskDateP = styled.p`
  font-weight: 100;

`;

const TaskStatusBanner = styled.div`
  width: 80px;
  height: 30px;
  text-align: center;
  font-size: 12pt;
  font-weight: 900;
  background-color: yellow;
  border-radius: 10px;
  margin-right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export default TaskCard;
