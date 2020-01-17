import React, { Component } from 'react';
import TemplateList from '../cmps/TemplateList.jsx'
import { connect } from 'react-redux';
import { addWebsite } from '../actions/WebsiteActions.js';

class HomePage extends Component {
    state = {
        templates: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    }

    onSelectedTemplate = () => {
        this.props.addWebsite()
        this.props.history.push('/page/edit')
    }

    render() {
        return (
            <div className="homePage-container" >
                <div className="bg-img-container">
                <div className="bg-image parallax"></div>
                <div className='HomePage-title'>Your party starts here</div>
                </div>
                <div className='HomePage-sub-title'>Pick your party.</div>
                <TemplateList templates={this.state.templates} blankTemplate={this.onSelectedTemplate} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      loggedInUser: state.user.loggedInUser,
      websites: state.website.selectedWebsite
    };
  };
  const mapDispatchToProps = {
    addWebsite
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(HomePage);