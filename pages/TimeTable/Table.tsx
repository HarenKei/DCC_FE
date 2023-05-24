import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Table = () => {
  const [mount, setMount] = useState<Boolean>(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <TimeTableContainer>
    </TimeTableContainer>
  );
};

const TimeTableContainer = styled.div`
  width: 45vw;
  display: flex;

`;

export default Table;
