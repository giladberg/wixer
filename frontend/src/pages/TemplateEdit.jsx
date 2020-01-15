import React, { Component } from 'react';
import Title from '../cmps/sections/Title.jsx'
import Paragraph from '../cmps/sections/Paragraph.jsx';
import Countdown from '../cmps/sections/CountDown.jsx';




export default class TemplateEdit extends Component {
    render() {
        return (
            <div>
                <h1>Template edit</h1>
                <Title></Title>
                <Paragraph></Paragraph>
                <Countdown timeTillDate={'01-16-2020'} timeFormat={"MM-DD-YYYY"}></Countdown>
            </div>
        )
    }
}
