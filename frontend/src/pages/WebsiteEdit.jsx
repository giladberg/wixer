import React, { Component } from 'react';
import { connect } from 'react-redux';
import DynamicCmp from '../cmps/DynamicCmp.jsx';

class WebsiteEdit extends Component {
    render() {
        const currWebsite = this.props.currWebsite
        if (!currWebsite) return <div>Loading...</div>
        console.log(currWebsite.cmps)
        return (
            <div>
                <h1>WebsiteEdit edit</h1>
                {currWebsite.cmps.map((cmp, index) => {
                    return  <DynamicCmp
                            key={index}
                            style={cmp.style}
                            cmpName={cmp.cmpName} />
                })}

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        reviews: state.review.reviews,
        users: state.user.users,
        loggedInUser: state.user.loggedInUser,
        currWebsite: state.website.selectedWebsite
    };
};
const mapDispatchToProps = {

};
export default connect(mapStateToProps, null)(WebsiteEdit);
