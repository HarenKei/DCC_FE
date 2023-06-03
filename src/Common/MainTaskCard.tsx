import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

const MainTaskCard = ({ data, onUpdate }: any) => {
  const { id, taskName, taskGroup, importance, taskStatus } = data;

  const onUpdateClick = () => {
    onUpdate(id);
  }

  console.log(`taskStatus ; ${taskStatus} ${typeof taskStatus}`);

  return (
    <TaskCardContainer>
      {taskStatus === "wip" && (
        <TaskCardInfoContainer>
          <MainTaskContentsContainer>
            <TaskTitleP>{taskName}</TaskTitleP>
            <TaskCategoryP>
              {taskGroup}{" "}
              {importance == "true" && (
                <span>
                  | <FontAwesomeIcon icon={faFlag} />
                </span>
              )}
            </TaskCategoryP>
          </MainTaskContentsContainer>

          {taskStatus === "wip" && <button onClick={onUpdateClick}>완료</button>}
        </TaskCardInfoContainer>
      )}
    </TaskCardContainer>
  );
};

const TaskCardContainer = styled.div`
  width: 40vw;
  height: 7vh;
  border-radius: 20px;

  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;

  box-shadow: 0px 0px 10px black;

  button {
    width: 4vw;
    height: 3vh;
    margin-right: 2em;
    border: none;
    border-radius: 5px;

    font-size: 1em;
    font-weight: 900;

    color: #fff;
    background-color: #00ae68;
  }

  

  button:hover {
    background: #21825b;;
    color: #fff;
  }
`;

const MainTaskContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskCardInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  align-items: center;
  padding-left: 30px;
`;

const TaskTitleP = styled.p`
  font-size: 15pt;
  font-weight: 900;
`;

const TaskCategoryP = styled.p`
  font-weight: 100;
`;
export default MainTaskCard;
