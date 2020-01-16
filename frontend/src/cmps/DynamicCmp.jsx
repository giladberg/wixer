import React, { Component } from 'react'
import Title from '../cmps/sections/Title.jsx'
import ImageCaousel from '../cmps/sections/ImageCaousel.jsx';
import Paragraph from './sections/Paragraph.jsx';
import Countdown from './sections/CountDown.jsx';
import DatePicker from './sections/DatePicker.jsx';
import LocationMap from './sections/LocationMap.jsx';
import Introduction from './sections/Introduction.jsx';

export default class DynamicCmp extends Component {

    DynamicCmp = () => {
        switch (this.props.cmpName) {
            case 'title':
                return <Title style={this.props.style} />
            case 'imageCarousel':
                return <ImageCaousel style={this.props.style} />
            case 'paragraph':
                return <Paragraph style={this.props.style} />
            case 'countdown':
                return <Countdown timeTillDate={'01-29-2020'} timeFormat={"MM-DD-YYYY"} style={this.props.style} />
            case 'calendar':
                return <DatePicker />
            case 'locationMap':
                return <LocationMap />
            case 'introduction':
                return <Introduction />
            default:
                return
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.DynamicCmp()}
            </React.Fragment>
        )
    }
}
