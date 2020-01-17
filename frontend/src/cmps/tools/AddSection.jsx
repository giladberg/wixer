import React, { Component } from 'react';
import { connect } from 'react-redux';


class AddSection extends Component {
    state={
        sections:['title','paragraph','imageGrid','introduction','imageCarousel','calendar','locationMap','countdown']
    }

    close=()=>{
        this.props.onChangeMode('noMode')
    }

    onAddSection = (cpmName) => {
        console.log(cpmName)
    }

    render() {
        return (
            <div className="addSection-container flex column align-center">
                <button onClick={this.close}>X</button>
                {this.state.sections.map((cpmName,i) => {
                return <div key={i} onClick={()=>this.onAddSection(cpmName)}>{cpmName}</div>
                })}
            </div>

        )}
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

};

export default connect(mapStateToProps, null)(AddSection);