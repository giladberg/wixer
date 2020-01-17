import React, { Component } from 'react'
import SectionSelectList from './SectionToSelectList.jsx'
export default class AddSection extends Component {
    close=()=>{
        this.props.onChangeMode('noMode')
    }
    render() {
        return (
            <div 
             className="addSection-container flex column align-center">
                 <button onClick={this.close}>Close</button>
                <p>Add text</p>
                <p>Add shape</p>
                <p>Add section</p>
                <p>Add sticker</p>
                 <SectionSelectList/> 
            </div>
        )
    }
}
