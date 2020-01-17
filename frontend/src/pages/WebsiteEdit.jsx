import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router';
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
        modeCmp: mode.noMode
    }

    onChangeMode = (status) => {
       this.setState({modeCmp:mode[status]})
    }
    render() {
        const CurrentToolComp = this.state.modeCmp;
        const { currWebsite } = this.props
        if (!currWebsite) return <div>Loading...</div>

        return (
            <div className='header-padding'>
                {currWebsite.cmps.map((cmp, index) => {
                    return <DynamicCmp
                        key={index}
                        style={cmp.style}
                        cmpName={cmp.cmpName} />
                })}
                <CmpBoxMenu onChangeMode={this.onChangeMode} />
                <AddSection />
                  {this.state.modeCmp && <CurrentToolComp/>}

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
