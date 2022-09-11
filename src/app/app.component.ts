import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';

/*
we need a way to represent and change state using the UI

1. We need to create a TS interface to represent our Store (State)
1.1 The interface must be the same as the object we pass to NGModule
2. create an Observable Object for the pieces of state you wish to add into the Component
2.1 by convention these look like foo$
2.2 set this to the proper piece of state using this.store.select('foo')
3. dispatch any actions you wish to the reducer using this.store.dispatch('ACTION')
*/
interface AppState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NGRX_Sample';

  message$: Observable<string>;
  post$: Observable<Post>;

  text: string = ""; // val for our form input

  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('message');
    this.post$ = this.store.select('post');
  }

  // action creator for spanish
  spanishMessage() {
    this.store.dispatch({type: 'SPANISH'})
  }

  //action creator for french
  frenchMessage() {
    this.store.dispatch({type: 'FRENCH'})
  }

  // post action dispatchers
  editText() {
    this.store.dispatch(new PostActions.EditText(this.text))
  }

  // resetText() {
  //   this.store.dispatch(new PostActions.Reset())
  // }

  // upvote() {
  //   this.store.dispatch(new PostActions.Upvote())
  // }

  // downvote() {
  //   this.store.dispatch(new PostActions.Downvote())
  // }
}
