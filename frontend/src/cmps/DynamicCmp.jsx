import React, { Component } from 'react'
import Title from '../cmps/sections/Title.jsx'
import Paragraph from './sections/Paragraph.jsx';
import Countdown from './sections/CountDown.jsx';
// import DatePicker from './sections/DatePicker.jsx';
import LocationMap from './sections/LocationMap.jsx';
import Introduction from './sections/Introduction.jsx';
//import ImageCarousel from './sections/ImageCarousel.jsx';
import ImageGrid from './sections/ImageGrid.jsx';

export default class DynamicCmp extends Component {
    onClickElement=(cmp)=>{
        this.props.setCmpToMove(cmp)
    }
    onLeaveElement=()=>{
        this.props.setCmpToMove(null) 
    }

    DynamicCmp = () => {
        switch (this.props.cmp.cmpName) {
            case 'title':
                return <Title style={this.props.style} />
            case 'paragraph':
                return <Paragraph style={this.props.style} />
            // case 'imageCarousel':
            //     return <ImageCarousel style={this.props.style} />
            case 'countdown':
                return <Countdown timeTillDate={'01-20-2020'} timeFormat={"MM-DD-YYYY"} style={this.props.style} />
            case 'locationMap':
                return <LocationMap />
            case 'introduction':
                return <Introduction />
            case 'imageGrid':
                return <ImageGrid />

            default:
                return
        }
    }

    render() {
        return (
            <span 
            onMouseUp={this.onLeaveElement}
            onMouseDown={this.onClickElement.bind(null,this.props.cmp)}>
                {this.DynamicCmp()}
            </span>
        )
    }
}
