import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from  '../actions'
class PostsIndex extends Component {
  componentDidMount(props) {
    this.props.fetchPosts()
  }
  render() {
    return(
      <div>
        Posts Index yo...
      </div>
    )
  }
}

export default connect (null, {fetchPosts}) (PostsIndex)
