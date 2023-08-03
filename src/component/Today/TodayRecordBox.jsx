import React, { useState } from 'react';
import styled from 'styled-components';
import Delete from './../../img/threeDot.svg';
import TodayDeleteModal from "./TodayDeleteModal";

const TodayRecordBoxWrap = styled.div`
  border-radius: 10px;
  border: 1px solid #B6B6B5;
  background-color: #F5F5F5;
  padding: 15px 10px;
  margin-bottom: 10px;
`

const TodayRecordBoxTitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
`

const TodayRecordBoxTitleSmallWrap = styled.div`
  display: flex;
  flex-direction: row;
`

const TodayRecordBoxTitle = styled.div`
  background-color: #6F02DB;
  border: 0;
  border-radius: 20px;
  color: white;
  padding: 2px 10px;
`

const TodayRecordBoxTime = styled.div`
  color: #787878;
  font-size: 13px;
  margin: 0 0 0 15px;
  padding-top: 3px;
`

const TodayRecordDelete = styled.img`
  cursor: pointer;
  position: relative;
`

const TodayRecordContent = styled.div`
  border-radius: 20px;
  border: 1px solid #B6B6B5;
  background-color: white;
  color: #414140;
  margin-top: 10px;
  padding: 5px 10px;
`

export default function TodayRecordBox({ type, date, content }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleThreedotClick = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <TodayRecordBoxWrap>
            <TodayRecordBoxTitleWrap>
                <TodayRecordBoxTitleSmallWrap>
                    <TodayRecordBoxTitle>{type}</TodayRecordBoxTitle>
                    <TodayRecordBoxTime>{date}</TodayRecordBoxTime>
                </TodayRecordBoxTitleSmallWrap>
                <TodayRecordDelete src={Delete} onClick={handleThreedotClick} />
                <TodayDeleteModal isOpen={isModalOpen} />
            </TodayRecordBoxTitleWrap>
            <TodayRecordContent>{content}</TodayRecordContent>
        </TodayRecordBoxWrap>
    );
}