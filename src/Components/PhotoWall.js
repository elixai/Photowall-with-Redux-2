import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//anchor tag, href attribute
// S7.L48.12.
// removed 'onRemovePhoto={props.onRemovePhoto}' from:
// '.map((post, index) => <Photo key={index} post={post}'
// S7.L48.15.
// Pass the array of props (coming from {...this.props}) down to each <Photo />
// Component --> {...props}. And then in 'Photo.js'...
// S7.L49.1.
// Begin by telling the Reducer which post we want to remove. But need first 
// to pass in the 'index' to every <Photo /> Component (index={index}). Now 
// inside of our remove handler in 'Photo.js'...
function PhotoWall(props) {
  return <div>
    <Link className="addIcon" to="/AddPhoto"> </Link>
    <div className="photoGrid" >
      {props.posts
        .sort(function (x, y) {
          return y.id - x.id
        })
        .map((post, index) => <Photo key={index} post={post} {...props} index={index} />)}
    </div>
  </div>
}
PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
// S7.L47.24.
  // remove isRquired method prop types
  //onRemovePhoto: PropTypes.func.isRequired
}
export default PhotoWall