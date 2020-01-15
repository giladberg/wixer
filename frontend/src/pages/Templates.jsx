import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWebsite} from '../actions/WebsiteActions.js';
import { Link } from 'react-router-dom';

 class Templates extends Component {
     onSelectedTemplate=()=>{
        this.props.addWebsite()
        this.props.history.push('/page/edit')
     }
     render() {
        return (
            <div>
                <h1>Templates</h1>
                <button onClick={this.onSelectedTemplate}>Edit</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      reviews: state.review.reviews,
      users: state.user.users,
      loggedInUser: state.user.loggedInUser,
      websites:state.website.selectedWebsite
    };
  };
  const mapDispatchToProps = {
    addWebsite
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Templates);
//<Link to={'/page/edit'}></Link>