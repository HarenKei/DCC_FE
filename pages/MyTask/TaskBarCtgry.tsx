import React from "react";
import styled from "styled-components";

const TaskBarCtgry = (props: any) => {
  return (
    <CtgryContainer>
      <TaskStyle>{props.title}</TaskStyle>
    </CtgryContainer>
  );
};

const CtgryContainer = styled.div`
  display: flex;

  justify-content: center;
  align-item: center;
`;
const TaskStyle = styled.p`
  align-self: center;
  font-size : 15pt;
  font-weight: 100;
`;

export default TaskBarCtgry;