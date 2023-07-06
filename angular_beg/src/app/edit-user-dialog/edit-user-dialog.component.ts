import { Component, Inject } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

//matdialog refrece will be used to open and close the dialog box refrece .
//mat_dialog_data will be useed to pass the information among the dialog and the app component

@Component({
  selector: 'app-edit-user-dialog',
  templateUrl: './edit-user-dialog.component.html',
  styleUrls: ['./edit-user-dialog.component.css']
})
export class EditUserDialogComponent {
  editForm:FormGroup;
constructor(private formbuilder:FormBuilder, private dialogRef: MatDialogRef<EditUserDialogComponent>
  ,
  @Inject(MAT_DIALOG_DATA) public data : any
  ){
    this.editForm= formbuilder.group({
      name:[data.name,Validators.required],
      email:[data.email,[Validators.required,Validators.email]],
      password:[data.password,Validators.required]
    })
}

cancel(){
  //if users clicks on cancle button it will close the dialog component
  this.dialogRef.close();
}
//we use close() to send data to the main component.
saveChanges(){
  if(this.editForm.valid){
    //send this new value as observable to the app comp

    this.dialogRef.close(this.editForm.value)
  }
}
}
