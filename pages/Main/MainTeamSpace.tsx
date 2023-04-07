import TeamSpaceCard from "@/src/Common/TeamSpaceCard";
import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from "next/link";

const dummyDataArray = [
  {
    id: "ws1",
    emoji: "🚙",
    title: "융합 전공",
    name: "김미점",
  },
  {
    id: "ws2",
    emoji: "👥",
    title: "리액트 스터디",
    name: "육영현",
  },
  {
    id: "ws3",
    emoji: "👨‍💻",
    title: "웹 앱 전공 1반",
    name: "정호일",
  },
  {
    id: "ws4",
    emoji: "👨‍💻",
    title: "웹 앱 전공 2반",
    name: "정호일",
  },
  {
    id: "ws5",
    emoji: "📖",
    title: "앱 전공",
    name: "김지예",
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
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};

const MainTeamSpace = () => {
  return (
    <MainTeamSpaceContainer>
      <MainTeamSpaceTitleH1>팀 스페이스</MainTeamSpaceTitleH1>
      <MainTeamSpaceIntroLink>
      <MainTeamSpaceIntroP>
        스터디, 프로젝트, 카풀... 컴정에 팀이 필요한 순간, 팀 스페이스 🤝
      </MainTeamSpaceIntroP>
      <Link href="/TeamSpace">전체 팀 스페이스 보기 &gt;&gt;</Link>
      </MainTeamSpaceIntroLink>

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  a{
    text-decoration-line: underline;
    text-decoration-style: dotted;
  }
`;

const MainTeamSpaceTitleH1 = styled.h1`
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

const MainTeamSpaceIntroLink = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a{
    font-weight: 100;
  }
`;

export default MainTeamSpace;
