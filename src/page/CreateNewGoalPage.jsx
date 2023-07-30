// CreateNewGoalPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import TodayHeader from './../component/Today/TodayHeader';
import TodayNav from './../component/Today/TodayNav';
import TodayTitle from './../component/Today/TodayTitle';
import TodayButton from './../component/Today/TodayButton';
import TodayListButton from './../component/Today/TodayListButton';
import TodayGoalTitle from './../component/Today/TodayGoalTitle';
import TodayGoalButton from './../component/Today/TodayGoalButton';

const Container = styled.div`
  width: 360px;
  margin: 0 auto;
  position: relative;
`;

const TodayListWrap = styled.div`
  width: 330px;
  margin: 0 auto;
  display: ${props => (props.isVisible ? 'block' : 'none')};
  background-color: #F5F5F5;
  border-radius: 10px;
  border: 0.5px solid #B6B6B5;
  padding: 10px;
  box-sizing: border-box;
`;

const TodayGoalWrap = styled.div`
  margin: 15px auto 0 auto;
  width: 330px;
  background-color: #F5F5F5;
  border-radius: 10px;
  border: 0.5px solid #B6B6B5;
  padding: 15px 10px;
  box-sizing: border-box;
`

const TodayGoalButtonWrap = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`

const FixedTodayButton = styled(TodayButton)`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`

function CreateNewGoalPage() {
    const [showListWrap, setShowListWrap] = useState(true);
    const [activeButton, setActiveButton] = useState(null);
    const [activeGoal, setActiveGoal] = useState(null);
    const [activeCompleteButton, setActiveCompleteButton] = useState(false);
    const handleButtonClick = buttonContent => {
        if (activeButton === buttonContent) {
            setActiveButton(null);
            setActiveGoal(null);
        } else {
            setActiveButton(buttonContent);
            setActiveGoal(buttonContent);
        }
        if(activeButton !== ''){
            setActiveCompleteButton(true);
        }else{
            setActiveCompleteButton(false);
        }
    };

    return (
        <Container>
            <TodayHeader />
            <TodayNav />
            <TodayTitle content="오늘 나의 목표관리"/>
            <TodayListWrap isVisible={showListWrap}>
                <TodayGoalTitle content="목표 설정하기" width="120"/>
                <TodayListButton
                    content="물마시기"
                    isActive={activeButton === '물마시기'}
                    onClick={() => handleButtonClick('물마시기')}
                />
                <TodayListButton
                    content="금주하기"
                    isActive={activeButton === '금주하기'}
                    onClick={() => handleButtonClick('금주하기')}
                />
                <TodayListButton
                    content="금연하기"
                    isActive={activeButton === '금연하기'}
                    onClick={() => handleButtonClick('금연하기')}
                />
                <TodayListButton
                    content="운동하기"
                    isActive={activeButton === '운동하기'}
                    onClick={() => handleButtonClick('운동하기')}
                />
            </TodayListWrap>
            {activeButton === '운동하기' ?
                <TodayGoalWrap>
                <TodayGoalTitle content="하루 목표량" width="100"/>
                <TodayGoalButtonWrap>
                        <TodayGoalButton content="1시간"
                                         isActive={activeButton === '1시간'}
                                         onClick={() => handleButtonClick('1시간')}/>
                        <TodayGoalButton content="2시간"
                                         isActive={activeButton === '2시간'}
                                         onClick={() => handleButtonClick('2시간')}/>
                        <TodayGoalButton content="3시간"
                                         isActive={activeButton === '3시간'}
                                         onClick={() => handleButtonClick('3시간')}/>
                        <TodayGoalButton content="직접입력"
                                         isActive={activeButton === '입력한 값'}
                                         onClick={() => handleButtonClick('입력한 값')}/>
                    </TodayGoalButtonWrap>
                </TodayGoalWrap> : ''}
            {activeButton === '물마시기' ?
                <TodayGoalWrap>
                    <TodayGoalTitle content="하루 목표량" width="100"/>
                    <TodayGoalButtonWrap>
                        <TodayGoalButton content="0.5L"
                                         isActive={activeButton === '0.5L'}
                                         onClick={() => handleButtonClick('0.5L')}/>
                        <TodayGoalButton content="1L"
                                         isActive={activeButton === '1L'}
                                         onClick={() => handleButtonClick('1L')}/>
                        <TodayGoalButton content="1.5L"
                                         isActive={activeButton === '1.5L'}
                                         onClick={() => handleButtonClick('1.5L')}/>
                        <TodayGoalButton content="직접입력"
                                         isActive={activeButton === '입력한 값'}
                                         onClick={() => handleButtonClick('입력한 값')}/>
                    </TodayGoalButtonWrap>
                </TodayGoalWrap> : ''}

            <FixedTodayButton isActive={activeCompleteButton} onClick={() => setShowListWrap(!showListWrap)} content='목표 설정하기'>
            </FixedTodayButton>
        </Container>
    );
}

export default CreateNewGoalPage;
