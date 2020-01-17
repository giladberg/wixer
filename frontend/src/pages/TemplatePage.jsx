import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addWebsite } from '../actions/WebsiteActions.js';

import TemplateList from '../cmps/TemplateList.jsx'

class TemplatePage extends Component {
  state = {
    templates: [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11]
  }
  onSelectedTemplate = () => {
    this.props.addWebsite()
    this.props.history.push('/page/edit')
  }
  render() {
    return (
      <div className='header-padding'>
        <div className='template-page-title'>Pick your template</div>
        <TemplateList templates={this.state.templates} blankTemplate={this.onSelectedTemplate}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.review.reviews,
    users: state.user.users,
    loggedInUser: state.user.loggedInUser,
    websites: state.website.selectedWebsite
  };
};
const mapDispatchToProps = {
  addWebsite
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplatePage);
