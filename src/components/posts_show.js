import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPost} from '../actions'


class PostsShow extends Component {

  render() {

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

function mapStateToProps({posts}, ownProps) {
  return {post: posts[ownProps.match.params.id]}
}
export default connect(mapStateToProps, {fetchPost}) (PostsShow)
