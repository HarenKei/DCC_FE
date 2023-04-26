import React from "react";
import styled from "styled-components";

const ScheduleCalender = () => {
    return(
    <Calender>
        <DayTableContainer>
            <DayContainer>일</DayContainer>
            <DayContainer>월</DayContainer>
            <DayContainer>화</DayContainer>
            <DayContainer>수</DayContainer>
            <DayContainer>목</DayContainer>
            <DayContainer>금</DayContainer>
            <DayContainer>토</DayContainer>
        </DayTableContainer>
        <DateTableContainer>
            <DateConatainer>1</DateConatainer>
            <DateConatainer>2</DateConatainer>
            <DateConatainer>3</DateConatainer>
            <DateConatainer>4</DateConatainer>
            <DateConatainer>5</DateConatainer>
            <DateConatainer>6</DateConatainer>
            <DateConatainer>7</DateConatainer>
        </DateTableContainer>
        <DateTableContainer>
            <DateConatainer>8</DateConatainer>
            <DateConatainer>9</DateConatainer>
            <DateConatainer>10</DateConatainer>
            <DateConatainer>11</DateConatainer>
            <DateConatainer>12</DateConatainer>
            <DateConatainer>13</DateConatainer>
            <DateConatainer>14</DateConatainer>
        </DateTableContainer>
        <DateTableContainer>
            <DateConatainer>15</DateConatainer>
            <DateConatainer>16</DateConatainer>
            <DateConatainer>17</DateConatainer>
            <DateConatainer>18</DateConatainer>
            <DateConatainer>19</DateConatainer>
            <DateConatainer>20</DateConatainer>
            <DateConatainer>21</DateConatainer>
        </DateTableContainer>
        <DateTableContainer>
            <DateConatainer>22</DateConatainer>
            <DateConatainer>23</DateConatainer>
            <DateConatainer>24</DateConatainer>
            <DateConatainer>25</DateConatainer>
            <DateConatainer>26</DateConatainer>
            <DateConatainer>27</DateConatainer>
            <DateConatainer>28</DateConatainer>
        </DateTableContainer>
        <DateTableContainer>
            <DateConatainer>29</DateConatainer>
            <DateConatainer>30</DateConatainer>
        </DateTableContainer>
    </Calender>
    );
};

const Calender = styled.div`
    padding: 1rem;
    background-color: white;
    margin: 1rem auto;
    width: 1100px;
    heigth: 290px; 

    box-shadow: 0px 1px 1px black;
    max-width: 99%;
    max-heigth: 99%;
    border: 8px solid #D9D9D9;
    border-radius: 50px;
`;

const DayTableContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-left: 67px;
    width: 910px;
    height: 80px;
    font-size: 15px;
`;

const DateTableContainer = styled.div`
    width: 910px;
    display: flex;
    flex-direction: row;
    margin-left: 67px;
`

const DayContainer = styled.div`
    display:flex;
    justify-content: center;
    width: 130px;
    height: 70px;
    font-size: 35px;
`;

const DateConatainer = styled.div`
    font-size: 20px;
    width: 130px;
    height: 105px;

    box-shadow: 0px 1px 1px black;
    border: 3px solid #D9D9D9;
    border-radius: 10px;
`;

export default ScheduleCalender;