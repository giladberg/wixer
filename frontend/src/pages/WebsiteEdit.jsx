import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearCmps,changeBg } from '../actions/WebsiteActions.js';
import DynamicCmp from '../cmps/DynamicCmp.jsx';
import CmpBoxMenu from '../cmps/tools/CmpBoxMenu.jsx';
import AddSection from '../cmps/tools/AddSection.jsx';

const mode = {
    noMode: null,
    add: AddSection,
    edit: 'EDIT_MODE',
};

Object.freeze(mode);
class WebsiteEdit extends Component {
    state = {
        modeCmp: mode.noMode,
        currCmpToMove: null,
        currCmpToMovePos: null
    }

    onMoveElement = (event) => {
        if (this.state.currCmpToMove) {
            let x = event.nativeEvent.offsetX
            let y = event.nativeEvent.offsetY
            let pos = { x, y }
            this.setState({ currCmpToMovePos: pos })
        }
    }

    setCmpToMove = (cmp) => {
        this.setState({ currCmpToMove: cmp })
    }

    onChangeMode = (status) => {
        this.setState({ modeCmp: mode[status] })
    }

    onClearComp = () => {
        this.props.clearCmps();
    }

    onSetBg = () => {
        let websiteStyle = this.props.currWebsite.bodyCmp.style;
        let websiteBg = document.querySelector('.website-container');
        websiteBg.style.background = `url('${websiteStyle.bgImgUrl}') no-repeat center center fixed`;
        websiteBg.style.backgroundSize = `${websiteStyle.bgSize}`;
    }

    render() {
        const CurrentToolComp = this.state.modeCmp;
        const { currWebsite } = this.props
        if (!currWebsite) return <div>Loading...</div>

        return (
            <div className='header-padding  website-container'
                onMouseMove={this.onMoveElement}>
                {currWebsite.cmps.map((cmp, index) => {
                    return <DynamicCmp
                        key={index}
                        setCmpToMove={this.setCmpToMove}
                        cmp={cmp} />
                })}
                <CmpBoxMenu onChangeMode={this.onChangeMode} onClearComp={this.onClearComp} onSetBg={this.onSetBg} />
                {this.state.modeCmp &&
                    <CurrentToolComp onChangeMode={this.onChangeMode} />}

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        // reviews: state.review.reviews,
        // users: state.user.users,
        // loggedInUser: state.user.loggedInUser,
        currWebsite: state.website.selectedWebsite
    };
};

const mapDispatchToProps = {
    clearCmps,
    changeBg,
};

export default connect(mapStateToProps, mapDispatchToProps)(WebsiteEdit);
