import React from "react";
import styled from "styled-components";

import ClassInfoCard from "@/src/Common/ClassInfoCard";

const ClassInfoList = ({data, onDelete} : any) => {
  return (
    <ClassInfoListContainer>
      {data.map((items : any) => (
        <ClassInfoCard key={items.id} props={items} onDelete={onDelete} />
      ))}
    </ClassInfoListContainer>
  );
};

const ClassInfoListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ClassInfoList;