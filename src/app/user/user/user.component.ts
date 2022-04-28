import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
name=""
email=""
phone=""
showSpinner=false;

detailsForm = this.fb.group({
  name:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
  email:['',[Validators.required,Validators.email]],
  phone:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10),Validators.maxLength(10)]]
})
  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }
  
submit(){
  
  var name=this.detailsForm.value.name
  var email=this.detailsForm.value.email
  var phone=this.detailsForm.value.phone
  
  
  if(this.detailsForm.valid){
    this.router.navigateByUrl("list/list") 
  }
  else{
    alert("Please fill form properly")
  }
  
}
}
