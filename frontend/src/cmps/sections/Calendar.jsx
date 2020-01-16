import React from 'react';

export default function Calendar(props) {

    return <DatePicker
        showPopperArrow={false}
        selected={startDate}
        onChange={date => setStartDate(date)}
    />
}
