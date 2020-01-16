import React, { Component } from 'react'
export default class CmpBoxMenu extends Component {
    componentDidMount() {
     this.setButtons()
    }
    setButtons=()=>{
        const items = document.querySelectorAll('.circle div');
        for (let i = 0, l = items.length; i < l; i++) {
            // items[i].style.left = (50 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
            // items[i].style.top = (50 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
            items[i].style.top=(15+i*items.length*5)+"%"
            items[i].style.left=(20+i*items.length*5)+"%"
        }
        // document.querySelector('.menu-button').onclick = function (e) {
        //     e.preventDefault(); document.querySelector('.circle').classList.toggle('open');
        // }
    }
    toggleMenu=(event)=>{
        event.preventDefault();
        document.querySelector('.circle').classList.toggle('open');
    }
    onChangeMode=(status)=>{
        this.props.onChangeMode(status)
    }
    render() {
        return (
            <nav className="circular-menu">
                <div className="circle">
                    <div className="icon-paint-format"></div>
                    <div className="icon-bin"></div>
                    <div className="icon-plus" onClick={this.onChangeMode.bind(null,'add')}></div>
                </div>
                <div onClick={this.toggleMenu}
                className="menu-button icon-plus flex align-center justify-center">
                </div>
            </nav>
        )
    }
}
