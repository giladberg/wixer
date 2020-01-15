import React, { Component } from 'react';
import DynamicCmp from '../cmps/DynamicCmp.jsx';

export default class TemplateEdit extends Component {

    render() {
        return (
            <div>
                <h1>Template edit</h1>
                <DynamicCmp ></DynamicCmp>
            </div>
        )
    }
}
