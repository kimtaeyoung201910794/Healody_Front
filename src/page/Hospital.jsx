import React, {useState} from "react";
import TodayHeader from "../component/Today/TodayHeader";
import TodayNav from "../component/Today/TodayNav";
import CalendarNav from "../component/CalendarNav";
import CalendarComponent from "../component/CalendarComponent";
import TodayDropDown from "../component/Today/TodayDropDown";
import Select from "../component/Select";
import styled from 'styled-components';
import CalendarAddList from "../component/CalendarAddList";




function Hospital() {
    const optionsHome = ['나', '엄마', '아빠', '동생'];
    const optionsHome2 = ['고모', '고모부', '사촌형', '사촌동생'];
    const optionsHome3 = ['이모', '이모부', '사촌누나', '사촌동생'];
    const [choose, setChoose] = useState(null);

    const handleOptionChange = (option) => {
        setChoose(option);
    };

    const Container = styled.div`
        width: 360px;
        margin: 0 auto;
        position: relative;
        `;
    const styles={
        drop: {
            zIndex: 1,
        }
    }
    const [selectedDropDownValue, setSelectedDropDownValue] = useState('본가');
    
    return (
        <>
            <Container>
            <TodayHeader />
            <TodayNav />
            <CalendarNav />
            <CalendarComponent />
            <div style={styles.drop}>
                <TodayDropDown
                    selectedValue={selectedDropDownValue}
                    options={['본가', '친가', '외가']}
                    onClick={(value) => setSelectedDropDownValue(value)}
                />
            </div>

            {selectedDropDownValue === '본가' ? (
                <Container>
                    <Select options={optionsHome} onChange={handleOptionChange}/>
                    <CalendarAddList options={optionsHome} onChange={handleOptionChange}/>
                </Container>
            ) : selectedDropDownValue === '친가' ? (
                <Container>
                    <Select options={optionsHome2} onChange={handleOptionChange}/>
                    <CalendarAddList options={optionsHome2} onChange={handleOptionChange}/>
                </Container>
            ) : (
                <Container>
                    <Select options={optionsHome3} onChange={handleOptionChange}/>
                    <CalendarAddList options={optionsHome3} onChange={handleOptionChange}/>
                </Container>
            )}
            
            </Container>
        </>
    )
}

export default Hospital;