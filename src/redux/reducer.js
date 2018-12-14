// S7.L46.7.
// import data to load the data onto the Store by returning it through the Reducer as 
// the initial value.
import posts from '../data/posts'

// S7.L46.3.
// A Reducer is just a function, that will take in 2 arguments
  // NOTE: can also be written as const reducer = (state = initialState,action) => {...}
  // - 1st argument is the current 'state' of our application
    // - the current 'state' must always be returned by the Reducer
    // - upon returning it we're specifying that this is the current 'state' that is 
    // going to live in our application (that is going to live inside our 'store').
  // - 2nd argument is the Action that when Dispatched describe that some event occured
  // in our application -- like a button event.
    // - on pressing the 'Remove' button we want to dispatch an Action that will remove
    // the photo. It is passed into the Reducer
  // - We need to Connect this to our Store
// S7.L46.8.
// As soon as our Reducer is mounted onto our Store we can give the 'state' an initial value
// (state = posts).
// Can use a 'function' or an annonymous arrow function:
//const postReducer = function thePosts(state = posts, action) {
const postReducer = (state = posts, action) => {
  console.log('action index', action.index)
// S7.L49.3.
  // Now, we never actually change our state here in the Reducer (like by using 'this.setState'), 
  // b/c a pure function never modifies an external value. So instead we declare a Switch statement:
  switch(action.type) {
// S7.L49.4.
    // We use the ES6 Spread Operator and slice() the array 'state' such that it starts from the 
    // 1st index (1) and stops at the index that we want to remove (action.index). This represents
    // all the elements in our state, all the posts in our state, BEFORE the one we clicked 
    // remove on. Then return the elements after the one we clicked remove on. To sum this up, we
    // are returning the entire arry of posts such that it doesn't include the post in which we 
    // pressed remove; therefore, updating the state without actually changing it! 
    case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
// S7.L50.8.
    // Add 'case for 'ADD_POST' that returns the current '...state' of our app such that it includes
    // the new photo. Return an Array that contains the current 'state' individualized ('...' using 
    // the spread operator), and then add the new post.
    case 'ADD_POST': return [...state, action.post]
    default: return state
  }
}

export default postReducer