import React, { Component } from 'react'
import Title from '../cmps/sections/Title.jsx'
import ImageCaousel from '../cmps/sections/ImageCaousel.jsx';

export default class DynamicCmp extends Component {

    DynamicCmp = () => {
        switch (this.props.cmpName) {
            case 'title':
                return <Title style={this.props.style}/>
            case 'imageCarousel':
                return <ImageCaousel style={this.props.style}/>
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
