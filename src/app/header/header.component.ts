import { Component } from '@angular/core';

@Component({
  selector: 'header-app',
  templateUrl: './header.component.html',
  //  styleUrls: ['./post-create.component.css']
})
export class HeaderComponent {

  newPost = 'ssd';

  onAddPost(){
    this.newPost = "User clicked";
  }
  
}
