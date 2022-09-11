// creating the posts reducer
// state is immutable so we must create a new object on each state change
// the most reliable way to do this is using Object.assign({}, state, newData)
// builds an object from left to right overwrighting existing properties
import { Action, createReducer, on } from '@ngrx/store';
import * as PostActions from '../actions/post.actions';
import { Post } from '../models/post.model';

//get action types
// export type Action = PostActions.All;


//create default state
// const defaultState: Post = {
//   text: 'Hello, I am a deafult Post',
//   likes: 0
// }

// helper method to create new state Object
// const newState = (state: any, newData: any) => {
//   return Object.assign({}, state, newData)
// }

//Reducer
// export function postReducer(state: Post = defaultState, action: Action) {
//   console.log(action.type, state) // show the state in the console

//   switch(action.type) {
//     case PostActions.EDIT_TEXT:
//       return newState(state, { text: action.payload });
//     case PostActions.UPVOTE:
//       return newState(state, { likes : state.likes - 1 });
//     case PostActions.DOWNVOTE:
//       return newState(state, { likes: state.likes - 1 });
//     case PostActions.RESET:
//       return defaultState
//     default:
//       return state;
//   }
// }

// export function postReducer(state: Post = defaultState, action: Action): Post {
//   console.log(action.type, state)

// 	switch (action.type) {
//   		case PostActions.EDIT_TEXT:
//   			return newState(state, { text: action.payload });

      // case PostActions.UPVOTE:
        // return newState(state, { likes: state.likes + 1 });

  		// case PostActions.DOWNVOTE:
  		// 	return newState(state, { likes: state.likes - 1 });

  		// case PostActions.RESET:
  		// 	return defaultState;

//   		default:
//   			return state;

// 	}
// }

const defaultState: Post = {
  text: "Hello, World",
  likes: 0
}

export const postReducer = createReducer(
  defaultState,
  on(PostActions.editText, (state, { post }) => ({...state, text: post }))
)
