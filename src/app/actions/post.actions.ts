// actions are managed by there own class and hold two things
// first they all have a type corresponding to a constant
// in some cases they also have payloads of data to send to the reducer
// use props to define to payload

export const EDIT_TEXT = '[POST] Edit';
export const UPVOTE    = '[POST] Upvote';
export const DOWNVOTE  = '[POST] Downvote';
export const RESET     = '[POST] Reset';

import { createAction, props } from "@ngrx/store";

export const EditText = createAction(EDIT_TEXT, props<{post: string}>());

export const Upvote = createAction(UPVOTE);

export const Downvote = createAction(DOWNVOTE);

export const Reset = createAction(RESET);
