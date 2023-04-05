import React from "react";
import styled from "styled-components";

const NoticeMajor = () => {
  return <form>
    <ContentMajor>
      <MajorContent>웹</MajorContent>
      <MajorContent>앱</MajorContent>
      <MajorContent>응용</MajorContent>
    </ContentMajor>
    </form>
};
const MajorContent = styled.div`
background-color: #81c7e8;
padding: 1rem;
width: 13rem;
max-width: 95%;
border-radius: 12px;
text-align: center;
box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`
const ContentMajor = styled.div`
justify-content: space-around;
display: flex;
border: solid 1px black;
padding: 1rem;
background-color: grey;
margin: 2rem auto;
width: 50rem;
max-width: 95%;
`
export default NoticeMajor;