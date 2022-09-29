import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  public form: FormGroup;

  public message:string="";

  public data:object={};

  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      name: this.formBuilder.control("", [Validators.required,Validators.maxLength(30)]),
      phone: this.formBuilder.control("", [Validators.required,Validators.maxLength(10)]),
      email: this.formBuilder.control("", [Validators.required, Validators.email]),
      message: this.formBuilder.control("", [Validators.required,Validators.maxLength(150)]),
      time:this.formBuilder.control("",[Validators.required]),
      date:this.formBuilder.control("",[Validators.required]),
      guests:this.formBuilder.control("",[Validators.required])
    });
   }

  ngOnInit(): void {
  }
  
  save(){
    if(this.form.valid){
      var data = "Reservation accepted";
      this.message=data;
      this.form.reset();
    }
    else{
      alert("Form is not valid!");
    }
  }

}
