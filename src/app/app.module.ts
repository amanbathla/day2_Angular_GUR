import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { NewdemoComponent } from './components/newdemo/newdemo.component';
import { ActorlistComponent } from './component/actorlist/actorlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NewdemoComponent,
    ActorlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
