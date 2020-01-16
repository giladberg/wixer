import React, { Component } from 'react'
import Title from '../cmps/sections/Title.jsx'
import ImageCarousel from './sections/ImageCarousel.jsx';

export default class DynamicCmp extends Component {

    DynamicCmp = () => {
        switch (this.props.cmpName) {
            case 'title':
                return <Title style={this.props.style}/>
            case 'imageCarousel':
                return <ImageCarousel style={this.props.style}/>
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
