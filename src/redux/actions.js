// all Actions of our application will be declared in this file

// S7.L48.1.
// First Action to implement is the Remove Action.
// Actions are just js objects.
// Need to be able to emit this Action inside of a Component (inside of Main).
// Must have a 'type', however this object is not portable, so to make it
// portable wrap it in a function. These functions are called Action Creators.
// Action Creators are merely just functions that return an Action.
 export function removePost(index) {
  return {
    type: 'REMOVE_POST',
    index: index
  }
}

// S7.L50.5.
// Create and export our Action Creator, this Action will take in a Post that
// was just submitted ('post' is the payload we are going to give our Action so
// that it can return that payload to the Reducer).
export function addPost(post) {
  return {
    type: 'ADD_POST',
    post: post
  }
}