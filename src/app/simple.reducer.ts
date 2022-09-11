// use constants to define action names
// by convention they use all caps
// reducers are just functions that run a switch statment on the different actions
// and return a ne state depending on the case
import { Action } from '@ngrx/store';

//define default state
const STATE = "Hello World";

// give the reducer a default state and define the two types of data sent
export function simpleReducer(state: string = STATE, action: Action): string {
  switch(action.type) {
    case 'SPANISH':
      return state = 'Hola Mundo'
    case 'FRENCH':
      return state = 'Bonjour le monde'
    default:
      return state;
  }
}
