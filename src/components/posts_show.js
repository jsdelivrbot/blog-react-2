import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPost} from '../actions'


class PostsShow extends Component {

  render() {
    posts[this.props.match.params.id]
    return (
      <div>

      </div>
    )
  }
  componentDidMount() {
    const {id} = this.props.match.params.id
    this.props.fetchPost(id)
  }
}

function mapStateToProps({posts}) {
  return {posts}
}
export default connect(null, {fetchPost}) (PostsShow)
