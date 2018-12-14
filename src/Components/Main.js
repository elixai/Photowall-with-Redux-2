import React, { Component } from 'react'
//import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import { Route, Link } from 'react-router-dom'
// S7.L48.3.
// We import the remove action into Main.js
//import { removePost } from '../redux/actions'

// S7.L47.13.
// Delete:
  // - this.state
  // - removePhoto binding
  // - methods -- removePhoto, addPhoto, componentDidMount, etc...
  // - comment out <Photowall> and AddPhoto Route
class Main extends Component {
  constructor() {
    super()
    /*this.state = {
      posts: [{
        id: "0",
        description: "beautiful landscape",
        imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
          "3919321_1443393332_n.jpg"
      }, {
        id: "1",
        description: "Aliens???",
        imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
          "08323785_735653395_n.jpg"
      }, {
        id: "2",
        description: "On a vacation!",
        imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
      }]
    }
    this.removePhoto = this.removePhoto.bind(this)*/
  }

  /*removePhoto(postRemoved) {
    this.setState((state) => ({
      posts: state.posts.filter(post => post !== postRemoved)
    }))
  }

  addPhoto(postSubmitted) {
    this.setState((state) => ({
      posts: state.posts.concat([postSubmitted])
    }))
  }

  componentDidMount() {
    const data = SimulateFetchFromDatabase()
    this.setState({
      posts: data
    })
  }
  componentWillMount() { }
  
  componentDidUpdate(prevProps, prevState) {
    //console.log('componentDidUpdate: prevState', prevState.posts)
    //console.log('componentDidUpdate: state', this.state)
  }*/

// S7.L48.4.
// emit the removePost() Action inside of a Component
  componentDidMount() {
// S7.L48.5.
    // There is a more concise way of writing the below statement --
    // go to App.js see S7.L48.6. Can then write 'this.props.removePost(1)'
    // instead of 'this.props.dispatch(removePost(1))'. This is important b/c the Presentational 
    // Component should only be concerned with displaying information, that is why we 
    // created the Container 'App.js'. It's the Container, not the Presentational Comp,
    // that should know about Redux, Dispatch and all that stuff.
// S7.L48.11.
    // Comment out the old way of Dispatching, and implement the new way, using bindActionCreators
    //this.props.dispatch(removePost(1)).
    // With this now in place we need to remove any props we had set from onRemovePhoto (ie. 
    // onRemovePhoto={props.onRemovePhoto}). Remove from 'PhotoWall.js' (see S7.L48.12.), 'Photo.js' 
    // (see S7.L48.13.)
// S7.L49.5.
    // We need to comment this out as this will remove the post without us clicking remove on a Post.
    //this.props.removePost(1)
  }

  render() {
// S7.L48.2.
  console.log(this.props)
// S7.L47.22.
// Boilerplate setup is now COMPLETE!
    // We can now access the 'store's data inside of Main's render() method. 
      // - this.props.posts
    //console.log(this.props.posts)
// S7.L47.23.
    // Re-instantiate our PhotoWall
      // - <PhotoWall />
    // Pass down an array of posts as props
      // - posts={this.props.posts}
    // We will be getting errors on the prop type b/c we are not passing the 
    // method onRemovePhoto() -- as we are using Redux we will be Dispatching 
    // an Action, and it's the Action that will go to the Reducer and update 
    // the 'state'. So remove isRquired method prop types (see S7.L47.24. and
    // S7.L47.25.)
// S7.L48.14.
    // Instead of passing our props down individually like for 'posts' 
    // ('posts={this.props.posts}') we can pass down everything in our props
    // using an ES6 Spread (ie. {...this.props}). So, change '<PhotoWall posts={this.props.posts} />'
    // to '<PhotoWall {...this.props} />'. So now we are passing in all of the 
    // props that we have in 'Main.js' down to 'PhotoWall.js'. This, ...this.props,
    // is equivalent to writing:
      // - posts=props.post, remove=props.remove......
    // Instead of putting all of the above into props individually, we can simply
    // put the entire array of props and destructure it into individual props.
    return (

      <div>
        <h1>
          <Link to="/">Photowall</Link>
        </h1>
        <Route exact path="/" render={() => (
          <div>
            <PhotoWall {...this.props} />
            {/*<PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate} />*/}
          </div>
        )} />
{
// S7.L50.1.
        // We uncomment the Route Component.
        // We don't have an addPhoto() method any more so we can remove 'this.addPhoto(addedPost)'.
        // Our button to change the page via Route no longer works when connecting a Redux 'store' 
        // via Connect the Component stops updating the location change. We fix this by importing 
        // a fix using 'withRouter', see // S7.L50.2. in 'App.js'...
        /*
        <Route path="/AddPhoto" render={({ history }) => (
            <AddPhoto onAddPhoto={(addedPost) => {

              history.push('/')
            }} />
          )} />
        */
}
{
// S7.L50.6.
        // Remove onAddPhoto prop with annonymous function and 'history.push'.
        // Add instead the spread of props (all of Main's props) '{...this.props}'.
        // Now we can emit an Action in 'AddPhoto.js', see S7.L50.7.
}
{
// S7.L50.9.
        // Add prop to pass the 'history', then access it via props in 'AddPhoto.js', see S7.L50.10.
}
        <Route path="/AddPhoto" render={({ history }) => (
          <AddPhoto {...this.props} onHistory={history} />
        )} />

      </div>
    )
  }
}
export default Main