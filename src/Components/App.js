// S7.L47.14.
// Create this file, App.js, for Connecting our Components. This file
// satisfies a separation or concerns, as App acts as a container component --
// it doesn't have any DOM markup. It's only job is to provide the data to 
// the presentational Component (Main). The presentational component concerns 
// itself with DOM markup, how things work, and it's what receives the data
// via props.
// App.js will be used to connect our 'store' to our Main component.

// S7.L47.16.
// import connect
import { connect } from 'react-redux'

// S7.L48.7.
// import binding to Action Creators
import { bindActionCreators } from 'redux'

// S7.L50.2.
// A fix to Routing breaking when we connect a Redux 'store' via the Connect Component
import { withRouter } from 'react-router'

// S7.L47.18.
// import main
import Main from './Main'

// S7.L48.8.
// Also import our remove post function from 'Actions.js'
// S7.L50.4.
// import all Actions in one go...
//import { removePost } from '../redux/actions'
import * as actions from '../redux/actions'

// S7.L47.15.
// First argument is 'state' that is living inside our 'store' posts.
// Return 'posts' equaling our 'state'. It'll take our 'state', that's 
// living inside our 'store', and map it to props, props that can be accessed 
// inside of a component in the form of 'posts'. It allows us to specify 
// which data from the 'store' that you want to pass into your react component.
// We'll be passing in our 'posts' into Main.js. In Main.js we'll be able to
// access the 'state' 'posts' via 'this.props.posts', giving us acces to the 
// states.
function mapStateToProps(state) {
  return {
    posts: state
  }
}

// S7.L48.6.
// Map the Dispatch method to props.
// mapDispatchToProps() is normally used to provide a shorthand inside of our
// Component, such that, instead of writing 'this.props.dispatch(removePost(1))'
// you'd write this.props.removePost(1). This is important b/c the Presentational 
// Component should only be concerned with displaying information, that is why we 
// created the Container 'App.js'. It's the Container, not the Presentational Comp,
// that should know about Redux, Dispatch and all that stuff.
function mapDispatchToProps(dispatch) {
// S7.L48.9.
  // Simply return bindActionCreators with the removePost Action, and we'll emit 
  // that Action whenever it is called with a Dispatch. Then Connect this to our
  // top level Component, see S7.L48.10.
// S7.L50.5.
  // Instead of passing in just the remove Action, we pass in our multitude 
  // of Actions ('bindActionCreators({removePost}, dispatch)' to 
  // bindActionCreators({actions}, dispatch))
  return bindActionCreators(actions, dispatch)
}

// S7.L47.17.
// Connect up mapStateToProps, this returns a brand new function which takes as
// an argument the Component into which we are going to inject our 'state', that
// Component is the Main Component, so need to import it.
// S7.L48.10.
// Connect bindActionCreators to our top level Component via mapDispatchToProps, 
// then use it in the top level Component in componentDidMount() in 'Main.js', 
// see S7.L48.11.
// S7.L50.3.
// Wrap our Connect with withRouter() to fix broken routing
const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App