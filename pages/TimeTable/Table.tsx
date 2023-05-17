import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTable } from "react-table";

const Table = () => {
  const [mount, setMount] = useState<Boolean>(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <TableContainer>
      {mount && (
        <TableStyle>
          <TrStyle>
            <ThStyle> </ThStyle>
            <ThStyle>월</ThStyle>
            <ThStyle>화</ThStyle>
            <ThStyle>수</ThStyle>
            <ThStyle>목</ThStyle>
            <ThStyle>금</ThStyle>
          </TrStyle>
          <TrStyle>
            <ThStyle>1교시</ThStyle>
            <TdStyle>문화와 역사2</TdStyle>
            <TdStyle> </TdStyle>
            <TdStyle>정보통신융합공학개론</TdStyle>
            <TdStyle>화일구조</TdStyle>
            <TdStyle>참삶의길</TdStyle>
          </TrStyle>
          <TrStyle>
            <ThStyle>2교시</ThStyle>
            <TdStyle> </TdStyle>
            <TdStyle> </TdStyle>
          </TrStyle>
          <TrStyle>
            <ThStyle>3교시</ThStyle>
            <TdStyle> </TdStyle>
            <TdStyle> </TdStyle>
            <TdStyle>프로그래밍언어구조론</TdStyle>
            <TdStyle>웹/xml프로그래밍</TdStyle>
            <TdStyle> </TdStyle>
          </TrStyle>
          <TrStyle>
            <ThStyle>4교시</ThStyle>
            <TdStyle> </TdStyle>
            <TdStyle> </TdStyle>
            <TdStyle> </TdStyle>
          </TrStyle>
          <TrStyle>
            <ThStyle>5교시</ThStyle>
            <TdStyle>웹/xml프로그래밍</TdStyle>
            <TdStyle>c++ </TdStyle>
            <TdStyle>임베디드프로그래밍실습</TdStyle>
            <TdStyle>리눅스컴퓨팅실무</TdStyle>
            <TdStyle> </TdStyle>
          </TrStyle>
          <TrStyle>
            <ThStyle>6교시</ThStyle>
            <TdStyle> </TdStyle>
          </TrStyle>
          <TrStyle>
            <ThStyle>7교시</ThStyle>
            <TdStyle> </TdStyle>
            <TdStyle> </TdStyle>
          </TrStyle>
          <TrStyle>
            <ThStyle>8교시</ThStyle>
            <TdStyle>프로그래밍언어구조론</TdStyle>
            <TdStyle> </TdStyle>
          </TrStyle>
        </TableStyle>
      )}
    </TableContainer>
  );
};

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TableStyle = styled.table`
  margin-left: 5vw;
  width: 90vw;
  border-radius: 10px;
  border: 3px solid #5e5e5e;
  empty-cells: show;
`;

const TrStyle = styled.tr``;

const ThStyle = styled.th`
  width: 5vw;
  height: 8vh;
	border-radius: 10px;
  border: 1px solid #5e5e5e;
	background-color: #5e5e5e;
	empty-cells: show;
`;

const TdStyle = styled.td`
  width: 5vw;
  height: 8vh;
	border-radius: 10px;
  border: 1px solid #5e5e5e;
	empty-cells: show;
`;

export default Table;
