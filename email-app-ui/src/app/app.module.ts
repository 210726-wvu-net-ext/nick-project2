import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InboxComponent } from './inbox/inbox.component';
import { HomeComponent } from './home/home.component';

// the root module is responsible for bootstrapping a root component
// that will manage the entire page

@NgModule({
  // every component should be declared in exactly one module
  // that also applies to directives and pipes (aka declarables)
  declarations: [AppComponent, NavbarComponent, InboxComponent, HomeComponent],

  // if anything declared in this module needs anything from another module,
  // you have to import those other modules right here
  // be careful to distinguish angular modules & imports & exports
  //  from typescript modules & imports & exports
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],

  // if any other module needs something from this module,
  // those needed things (declarables) should be listed here
  exports: [],

  // this has to do with dependency injection
  // in angular, you can "register services" for DI in several ways,
  //   you need a "provider" for them, which implies a certain scope/lifetime for them.
  // so any services i provide here in the module - it'll be one instance per module
  providers: [],

  // here we indicate the root component (should be the one whose selector is in index.html)
  bootstrap: [AppComponent],
})
export class AppModule {}
