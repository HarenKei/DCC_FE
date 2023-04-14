import React from "react";
import styled from "styled-components";

const SlideMenu = () => {
  return <SlideMenuContainer></SlideMenuContainer>;
};

const SlideMenuContainer = styled.div`
  background-color: red;
  position: fixed;
  left: 0;
  top: 0;
  transform: translated3d(-100vw, 0, 0);

  width: 100vw;
  height: 100vh;
`;

export default SlideMenu;
