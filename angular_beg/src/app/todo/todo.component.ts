import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  userForm: FormGroup;
  editForm: FormGroup;
  users: any[] = [];
   editIndex: number =0;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.editForm = this.formBuilder.group({
      editName: ['', Validators.required],
      editEmail: ['', [Validators.required, Validators.email]],
      editPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.users.push(this.userForm.value);
      this.userForm.reset();
    }
  }

  editUser(user: any) {
    this.editIndex = this.users.indexOf(user);
    console.log(this.editIndex);
    
    const editUser = this.users[this.editIndex];
    this.editForm.setValue({
      editName: editUser.name,
      editEmail: editUser.email,
      editPassword: editUser.password
    });
  }

  onEditSubmit() {
    if (this.editForm.valid) {
      const editedUser = this.editForm.value;
      this.users[this.editIndex] = editedUser;
    }
  }

  deleteUser(user: any) {
   if(window.confirm('Are you sure you want to delete this user')){
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    }
   }
  }
}
