import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  // styleUrls: ['./app.component.css']
})
export class PostCreateComponent {

  newPost = 'ssd';

  onAddPost(){
    this.newPost = "User clicked";
  }
  
}
