import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.sass']
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  @Output() postCreated = new EventEmitter();

  // onAddPost(postInput: HTMLTextAreaElement) {
  //   console.dir(postInput);
  //   this.newPost = postInput.value;
  // }
  onAddPost() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent
    };
    this.postCreated.emit(post);
    this.enteredTitle = '';
    this.enteredContent = '';
  }
}
