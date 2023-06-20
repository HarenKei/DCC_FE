import React, { useState, useEffect, use } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../Google2/fbconfig";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import MainTeamSpaceCard from "@/src/Common/MainTeamSpaceCard";

const dummyDataArray = [
  {
    id: "ws1",
    emoji: "🚙",
    teamName: "융합 전공",
    masterName: "김미점",
  },
  {
    id: "ws2",
    emoji: "👥",
    teamName: "리액트 스터디",
    masterName: "육영현",
  },
  {
    id: "ws3",
    emoji: "👨‍💻",
    teamName: "웹 앱 전공 1반",
    masterName: "정호일",
  },
  {
    id: "ws4",
    emoji: "👨‍💻",
    teamName: "웹 앱 전공 2반",
    masterName: "정호일",
  },
  {
    id: "ws5",
    emoji: "📖",
    teamName: "앱 전공",
    masterName: "김지예",
  },
  {
    id: "ws6",
    emoji: "🏀",
    teamName: "슬램덩크",
    masterName: "김경석",
  },
  {
    id: "ws7",
    emoji: "🤡",
    teamName: "지하철 공익",
    masterName: "이승명",
  },
];

const settings = {
  arrows: false,
  dots: false,
  draggable: true,
  adaptiveHeight: true,
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
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const MainTeamSpace = () => {
  const [tsData, setTsData] = useState(dummyDataArray);
  const tsCollectionRef = collection(db, `TeamSpace`);

  const getTsList = async () => {
    try {
      const data = await getDocs(tsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTsData(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(()=> {
    getTsList();
  },[])

  return (
    <MainTeamSpaceContainer>
      <MainTeamSpaceTitleH1>팀 스페이스</MainTeamSpaceTitleH1>
      <MainTeamSpaceIntroLink>
        <MainTeamSpaceIntroP>
          스터디, 프로젝트, 카풀... 컴정에 팀이 필요한 순간, 팀 스페이스 🤝
        </MainTeamSpaceIntroP>
        <Link href="/TeamSpace/TeamSpaceLoby/Tsmain">전체 팀 스페이스 보기 &gt;&gt;</Link>
      </MainTeamSpaceIntroLink>

      <SliderContainer>
        <Slider {...settings}>
          {tsData.map((items) => (
            <MainTeamSpaceCard
              key={items.id}
              data={items}
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
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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

  a {
    font-weight: 100;
    text-decoration-line: underline;
    text-decoration-style: dotted;

  }
`;

export default MainTeamSpace;
