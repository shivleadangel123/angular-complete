import { Component } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';
import { DialogRef } from '@angular/cdk/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user management'; 
  userForm: FormGroup;
  
  users:any[]=[
    {
      name:'shivsoni',email:'sonishiv309@gmail.com',password:'Shiv@3923'
    },{
      name:'james',email:'james123@gmail.com',password:'James123'
    },{
      name:'jenny',email:'jenny123@gmail.com',password:'Jenny123'
    }
  ]
  constructor(private formBuilder: FormBuilder , private dialog: MatDialog){
    this.userForm=this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
  onSubmit(){
    console.log(this.userForm.value);
    if(this.userForm.valid){ //when the userForm is valid
      this.users.push(this.userForm.value); //push the userForm value into users array
      this.userForm.reset(); //reset the userForm value
    }
  }
  deleteUser(user:any){
   let deleteuserIndex= this.users.indexOf(user);
    if(window.confirm('Are you sure you want to delete this user')){
      this.users.splice(deleteuserIndex,1);
    }
  }
  editUser(user:any){
    console.log(user);
  let editUserIndex=this.users.indexOf(user);
  console.log(editUserIndex);
  //sending user info to the dialog box
  //here we are making a request to open EditUserDialogComponent when i click on edit button
  //and we are sending users data to the dialog box component .
  const dialogRef=this.dialog.open(EditUserDialogComponent,{
    width:'400px',
    data:user
  })
  //now once we get the dialog box modified value we have to update the array of users.
  //this dialog box will returns the observable that can be accessed by .subscribe() that will
  //return the updated users data that can be 
  //dialogRef.afterClosed() will call when we close the dialox box dialog.
  dialogRef.afterClosed().subscribe(result=>{
    console.log(result);
    if(result){
      const updatedUsersIndex= this.users.findIndex(u=> u==user)
      if(updatedUsersIndex!=-1){
        console.log('updated index',updatedUsersIndex);
        
        this.users[updatedUsersIndex]=result;
      }
    }
  })
}

}
