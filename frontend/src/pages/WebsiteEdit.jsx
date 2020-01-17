import React, { Component } from 'react';
import { connect } from 'react-redux';
import DynamicCmp from '../cmps/DynamicCmp.jsx';
import CmpBoxMenu from '../cmps/tools/CmpBoxMenu.jsx'
import AddSection from '../cmps/tools/AddSection.jsx'

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
            console.log(this.state.currCmpToMovePos)
            console.log(x)
            console.log(y)
        }
    }

    setCmpToMove = (cmp) => {
        this.setState({ currCmpToMove: cmp })
        console.log(cmp)
    }

    onChangeMode = (status) => {
        this.setState({ modeCmp: mode[status] })
    }

    render() {
        const CurrentToolComp = this.state.modeCmp;
        const { currWebsite } = this.props
        if (!currWebsite) return <div>Loading...</div>

        return (

            <div className='header-padding'
                onMouseMove={this.onMoveElement}
            >
                {currWebsite.cmps.map((cmp, index) => {
                    return <DynamicCmp
                        key={index}
                        setCmpToMove={this.setCmpToMove}
                        cmp={cmp} />
                })}
                <CmpBoxMenu onChangeMode={this.onChangeMode} />
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

// const mapDispatchToProps = {

// };

export default connect(mapStateToProps, null)(WebsiteEdit);
