import { Component } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent {
postForm!:FormGroup;

constructor(private fb:FormBuilder){
  this.postForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(100)]],
    body: ['', [Validators.required, Validators.minLength(10)]],
    tags: this.fb.array([this.fb.control('')]),
    reactions: this.fb.group({
      likes: [0, Validators.required],
      dislikes: [0, Validators.required],
    }),
    views: [0, Validators.required],
    userId: [null, Validators.required]
  });
}
get tags() {
  return this.postForm.get('tags') as FormArray;
}

// Method to add a new tag field
addTag() {
  this.tags.push(this.fb.control(''));
}

// Method to remove a tag field
removeTag(index: number) {
  this.tags.removeAt(index);
}

// Submit form
onSubmit() {
  if (this.postForm.valid) {
    const postData = this.postForm.value;
    console.log('Post data:', postData);
    // Call a service to submit the post
  }
}
patchFormWithData() {
  const postData = {
    title: "His mother had always taught him",
    body: "His mother had always taught him not to ever think of himself as better than others.",
    tags: ["history", "american", "crime"],
    reactions: {
      likes: 192,
      dislikes: 25
    },
    views: 305,
    userId: 121
  };

  this.postForm.patchValue({
    title: postData.title,
    body: postData.body,
    reactions: postData.reactions,
    views: postData.views,
    userId: postData.userId
  });

  // Update the tags array dynamically
  this.tags.clear(); // First clear existing tags
  postData.tags.forEach(tag => this.tags.push(this.fb.control(tag)));
}

}
