import React from 'react';
import {Calendar} from 'react-native-calendars';

const CalendarComponent = () => {

    return (
        <Calendar onDayPress={(day: any) => {
            console.log('selected day', day);
        }}
        />
    );
};

export default CalendarComponent;
