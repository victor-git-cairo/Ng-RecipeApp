// Angular core and required components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// Angular Material elements
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
 
// app component section
import { AppComponent } from './app.component';
import { PostCreateComponent } from '../app/post/post-create/post-create.component';
import { HeaderComponent } from '../app/header/header.component';
import { PostListComponent } from '../app/post/post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent, 
    PostCreateComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
