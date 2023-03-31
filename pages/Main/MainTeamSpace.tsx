import TeamSpaceCard from "@/src/Common/TeamSpaceCard";
import React from "react";
import styled from "styled-components";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const dummyDataArray = [
  {
    id: "ws1",
    emoji: "🚙",
    title: "관악구 카풀",
    name: "정승민",
  },
  {
    id: "ws2",
    emoji: "🎤",
    title: "코노팟",
    name: "육영현",
  },
  {
    id: "ws3",
    emoji: "🍽️",
    title: "배달시켜요",
    name: "이정욱",
  },
  {
    id: "ws4",
    emoji: "👨‍💻",
    title: "리액트 프로젝트",
    name: "이재형",
  },
  {
    id: "ws5",
    emoji: "📖",
    title: "스프링 스터디",
    name: "김동건",
  },
  {
    id: "ws6",
    emoji: "🏀",
    title: "슬램덩크",
    name: "김경석",
  },
];

const settings = {

      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear"
};

const MainTeamSpace = () => {
  return (
    <MainTeamSpaceContainer>
      <MainTeamSpaceTitle>팀 스페이스</MainTeamSpaceTitle>
      <MainTeamSpaceIntroP>
        스터디, 프로젝트, 카풀... 컴정에 팀이 필요한 순간, 팀 스페이스 🤝
      </MainTeamSpaceIntroP>

      <SliderContainer>
        <Slider {...settings}>
          {dummyDataArray.map((items) => (
            <TeamSpaceCard
              key={items.id}
              emoji={items.emoji}
              title={items.title}
              name={items.name}
            />
          ))}
        </Slider>
      </SliderContainer>

    </MainTeamSpaceContainer>
  );
};

const MainTeamSpaceContainer = styled.div`
  width: 90vw;
  height: 60vh;
  margin-bottom: 100px;
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const MainTeamSpaceTitle = styled.h1`
  font-size: 30pt;
  font-weight: 900;
  letter-spacing: -3px;
`;

const MainTeamSpaceIntroP = styled.p`
  font-size: 12pt;
  font-weight: 100;
  letter-spacing: -1px;
`;

const SliderContainer = styled.div`
  width: 90vw;
  height: 48vh;
  margin-top: 2vh;

  slick-dots {
    .slick-active {
      button::before {
        color: red;
      }
    }
    button::before {
      color: white;
    }
  }
`;

export default MainTeamSpace;
