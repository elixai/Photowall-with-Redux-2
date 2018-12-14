import React from 'react';
import PropTypes from 'prop-types'
// S7.L47.27.
// import Connect to allow us to export every photo instance as a Connected
// Component (see S7.L47.28.).
//import { connect } from 'react-redux'

// S7.L48.13.
// removed 'props.onRemovePhoto(post)' from:
// '<button onClick={() => { ... }}> Remove </button >'
// S7.L48.16.
// ...we now have access to all the props we had in 'Main.js', meaning we can
// can emit actions inside 'Photo.js'. When we click on the 'Remove' button
// we are gong to emit props.removePost(1)
// S7.L49.2.
// ...we can pass 'index' as the psot to be removed (instead of the harcoded 
//  post of 1).
function Photo(props) {
  const post = props.post
  return <figure className="figure">
    <img className="photo" src={post.imageLink} alt={post.description} />
    <figcaption> <p> {post.description} </p> </figcaption>
    <div className="button-container">
      <button onClick={() => {
        props.removePost(props.index)
      }}> Remove </button>
    </div>
  </figure>
}

// S7.L47.26.
// Add mapStateToProps() to Connect up Photo and pass 'store' down to Photo we map the 'state' to props
// down to the desired Component.
/*function mapStateToProps(state) {
  return {
    posts: state
  }
}*/

Photo.propTypes = {
  post: PropTypes.object.isRequired,
// S7.L47.25.
  // remove isRquired method prop types
  //onRemovePhoto: PropTypes.func.isRequired
}

// S7.L47.28.
// instead of:
export default Photo
// export every instance of Photo as a Connected Component:
//export default connect(mapStateToProps)(Photo)