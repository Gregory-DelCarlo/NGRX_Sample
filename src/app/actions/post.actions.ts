// actions are managed by there own class and hold two things
// first they all have a type corresponding to a constant
// in some cases they also have payloads of data to send to the reducer
// make this using the constructor to define the type of the payload

import { Action } from '@ngrx/store';

export const EDIT_TEXT = '[POST] Edit';
// export const UPVOTE    = '[POST] Upvote';
// export const DOWNVOTE  = '[POST] Downvote';
// export const RESET     = '[POST] Reset';

export class EditText implements Action {
  readonly type = EDIT_TEXT;

  //sends a payload with the action of type string
  constructor(public payload: string) {}
}

// export class Upvote implements Action {
//   readonly type = UPVOTE;
// }

// export class Downvote implements Action {
//   readonly type = DOWNVOTE;
// }

// export class Reset implements Action {
//   readonly type = RESET;
// }

// export actions as a single type for easy adding when strong-typing
export type All = EditText
  // = Upvote
  // | Downvote
  // | Reset
  // | EditText;
