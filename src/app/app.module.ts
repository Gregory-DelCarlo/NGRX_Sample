import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ngrx brings redux patterns to angular
// instal using @ngrx/core @ngrx/store
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './simple.reducer';
import { postReducer } from './reducers/post.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // this is our root state object which handles global state
    StoreModule.forRoot({
      posts: postReducer, // reducer for our posts reducer state Object
      message: simpleReducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
