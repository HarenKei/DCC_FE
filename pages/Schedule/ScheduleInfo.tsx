import ScheduleInfoCard from "@/src/Common/ScheduleInfoCard";
import React from "react";
import styled from "styled-components";

const scheduleDummyDataArray = [
    {
      id: "s1",
      content: "삼일절",
      scheduleDate: "03월 01일",
      scheduleMonth: 3
    },
    {
      id: "s2",
      content: "1학기 개강",
      scheduleDate: "03월 02일",
      scheduleMonth: 3
    },
    {
      id: "s3",
      content: "1학기 수상신청 정정기간",
      scheduleDate: "03월 02일 ~ 03월 08일",
      scheduleMonth: 3
    },
    {
      id: "s4",
      content: "복학예정자 복학신청 마감",
      scheduleDate: "03월 22일",
      scheduleMonth: 3
    },
    {
      id: "s5",
      content: "1학기 중간고사",
      scheduleDate: "04월 20일 ~ 04월 26일",
      scheduleMonth: 4
    },
    {
      id: "s6",
      content: "근로자의 날",
      scheduleDate: "05월 01일",
      scheduleMonth: 5
    },
    {
      id: "s7",
      content: "어린이날",
      scheduleDate: "05월 05일",
      scheduleMonth: 5
    },
    {
      id: "s8",
      content: "임곡 축제",
      scheduleDate: "05월 12일",
      scheduleMonth: 5
    },
    {
      id: "s9",
      content: "석가탄신일 대체휴일",
      scheduleDate: "05월 29일",
      scheduleMonth: 5
    },
    {
      id: "s10",
      content: "현충일",
      scheduleDate: "06월 06일",
      scheduleMonth: 6
    },
    {
      id: "s11",
      content: "1학기 보강기간",
      scheduleDate: "06월 08일 ~ 06월 14일",
      scheduleMonth: 6
    },
    {
      id: "s12",
      content: "1학기 기말고사",
      scheduleDate: "06월 15일 ~ 06월 21일",
      scheduleMonth: 6
    },
    {
      id: "s13",
      content: "제 46주년 개교기념일",
      scheduleDate: "06월 24일",
      scheduleMonth: 6
    },
    {
      id: "s14",
      content: "1학기 성적입력",
      scheduleDate: "06월 21일 ~ 06월 27일",
      scheduleMonth: 6
    },
    {
      id: "s15",
      content: "1학기 성적 열람 및 수정",
      scheduleDate: "06월 28일 ~ 06월 30일",
      scheduleMonth: 6
    },
    {
      id: "s16",
      content: "하계 계절학기 수강신청",
      scheduleDate: "06월 28일 ~ 06월 30일",
      scheduleMonth: 6
    },
    {
      id: "s17",
      content: "하계 계절학기",
      scheduleDate: "07월 03일 ~ 07월 21일",
      scheduleMonth: 7
    },
    {
      id: "s18",
      content: "대학 휴무기간",
      scheduleDate: "07월 31일 ~ 08월 04일",
      scheduleMonth: 7
    },
    {
      id: "s19",
      content: "2학기 장학금 우선감면",
      scheduleDate: "08월 09일",
      scheduleMonth: 8
    },
    {
      id: "s20",
      content: "2학기 복학원서 접수",
      scheduleDate: "08월 14일",
      scheduleMonth: 8
    },
    {
      id: "s21",
      content: "광복절",
      scheduleDate: "08월 15일",
      scheduleMonth: 8
    },
    {
      id: "s22",
      content: "2학기 전과 신청 마감",
      scheduleDate: "08월 23일",
      scheduleMonth: 8
    },
    {
      id: "s23",
      content: "2022학년도 후기 학위 수여식",
      scheduleDate: "08월 25일",
      scheduleMonth: 8
    },
    {
      id: "s24",
      content: "2학기 재입학 마감",
      scheduleDate: "08월 25일",
      scheduleMonth: 8
    },
    {
      id: "s25",
      content: "2학기 재학생 수강신청",
      scheduleDate: "08월 21일 ~ 08월 25일",
      scheduleMonth: 8
    },
    {
      id: "s26",
      content: "2학기 재학생 및 복학생 등록",
      scheduleDate: "08월 14일 ~ 08월 25일",
      scheduleMonth: 8
    },
    {
      id: "s27",
      content: "2학기 개강",
      scheduleDate: "08월 28일",
      scheduleMonth: 8
    },
    {
      id: "s28",
      content: "2학기 수강신청 정정 기간",
      scheduleDate: "08월 28일 ~ 09월 01일",
      scheduleMonth: 8
    },
    {
      id: "s29",
      content: "복학 예정자 복학신청 마감",
      scheduleDate: "09월 15일",
      scheduleMonth: 9
    },
    {
      id: "s30",
      content: "수강신청 포기 마감",
      scheduleDate: "09월 22일",
      scheduleMonth: 9
    },
    {
      id: "s31",
      content: "추석연휴",
      scheduleDate: "09월 28일 ~ 09월30일",
      scheduleMonth: 9
    },
    {
      id: "s32",
      content: "개천절",
      scheduleDate: "10월 03일",
      scheduleMonth: 10
    },
    {
      id: "s33",
      content: "임곡체전",
      scheduleDate: "10월 06일",
      scheduleMonth: 10
    },
    {
      id: "s34",
      content: "2학기 중간고사",
      scheduleDate: "10월 16일 ~ 10월 20일",
      scheduleMonth: 10
    },
    {
      id: "s35",
      content: "대림테크페어",
      scheduleDate: "11월 09일 ~ 11월 10일",
      scheduleMonth: 11
    },
    {
      id: "s36",
      content: "2학기 보강기간",
      scheduleDate: "12월 04일 ~ 12월 08일",
      scheduleMonth: 12
    },
    {
      id: "s37",
      content: "2학기 기말고사",
      scheduleDate: "12월 11일 ~ 12월 15일",
      scheduleMonth: 12
    },
    {
      id: "s38",
      content: "2학기 성적입력",
      scheduleDate: "12월 15일 ~ 12월 21일",
      scheduleMonth: 12
    },
    {
      id: "s39",
      content: "성탄절",
      scheduleDate: "12월 25일",
      scheduleMonth: 12
    },
    {
      id: "s40",
      content: "동계 계절학기 수강신청",
      scheduleDate: "12월 22일 ~ 12월 27일",
      scheduleMonth: 12
    },
    {
      id: "s41",
      content: "2학기 성적 열람 및 수정",
      scheduleDate: "12월 22일 ~ 12월 27일",
      scheduleMonth: 12,
    },
    {
      id: "s42",
      content: "동계 계절학기",
      scheduleDate: "12월 26일 ~ 1월 13일",
      scheduleMonth: 1,
    },
    {
      id: "s43",
      content: "신정",
      scheduleDate: "1월 1일",
      scheduleMonth: 1,
    },
    {
      id: "s44",
      content: "설연휴",
      scheduleDate: "1월 21일 ~ 1월 24일",
      scheduleMonth: 1,
    },
    {
      id: "s45",
      content: "2023년도 1학기 장학금 우선감면",
      scheduleDate: "2월 1일 ~ 2월 3일",
      scheduleMonth: 2,
    },
    {
      id: "s46",
      content: "2022학년도 전기 졸업사정회",
      scheduleDate: "2월 8일",
      scheduleMonth: 2,
    },
    {
      id: "s47",
      content: "제44회 학위수여식",
      scheduleDate: "2월 14일",
      scheduleMonth: 2,
    },
    {
      id: "s48",
      content: "2022학년도 제 16회 교무 회의",
      scheduleDate: "2월 15일",
      scheduleMonth: 2,
    },
    {
      id: "s49",
      content: "2023학년도 입학식",
      scheduleDate: "2월 22일",
      scheduleMonth: 2,
    },
    {
      id: "s50",
      content: "재학생 및 복학생 등록",
      scheduleDate: "2월 13일 ~ 2월 24일",
      scheduleMonth: 2,
    },
    {
      id: "s51",
      content: "1학기 재입학 마감",
      scheduleDate: "2월 28일",
      scheduleMonth: 2,
    },
    {
      id: "s52",
      content: "신입생 및 재학생 수강 신청 기간",
      scheduleDate: "2월 22일 ~ 2월 28일",
      scheduleMonth: 2,
    },
];

const ScheduleInfo = ({ month }) => {
    return(  
    <ScheduleInfoContainer>
      <ScheduleInfoWrapper>
        {scheduleDummyDataArray.map((items) => (
          <ScheduleInfoCard
            key={items.id}
            content={items.content}
            scheduleDate={items.scheduleDate}
            scheduleMonth={items.scheduleMonth}
            currentMonth={month}
          />
        ))}
      </ScheduleInfoWrapper>
    </ScheduleInfoContainer>
    );
};

const ScheduleInfoContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1rem;
    margin: 1rem auto;
    margin-right: 80px;
    background-color: white;

    width: 400px;
    height: 695px;
    border: 8px solid #D9D9D9;
    border-radius: 50px;
    box-shadow: 0px 1px 1px black;

    overflow: auto;
`;

const ScheduleInfoWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  -webkit-margin-end: 6px;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #B3B3B3;
    border-radius: 3px;
  }
`;

export default ScheduleInfo;