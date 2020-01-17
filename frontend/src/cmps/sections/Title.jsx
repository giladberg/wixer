import React, { Component } from 'react';

<<<<<<< HEAD
export default class Title extends Component {

    render() {
        return <h1
            style={this.props.style}
        >title</h1>
    }

}

{/* <div className="title-container">
        <div className="main-title">Hello gentlemen</div>
        <div className="sub-title">welcome to shmuel's bachelor party</div>
        </div> */}
=======
export default function Title(props) {
    return <div className="title-container section-container">
        <div suppressContentEditableWarning={true}  contentEditable="true"  className="main-title">Hello gentlemen</div>
        <div suppressContentEditableWarning={true} contentEditable="true" className="sub-title">welcome to Lorem ipsums bachelor party</div>
        </div>
}



>>>>>>> shmuel2
