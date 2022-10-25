import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }

  name=""
  email=""
  age=""
  mob=""
  gender=""
  pincode=""
  parentName=""
  pass=""

  readValue=()=>{
    let data={
      "name":this.name,
      "email":this.email,
      "age":this.age,
      "mob":this.mob,
      "gender":this.gender,
      "pincode":this.pincode,
      "parentName":this.parentName,
      "pass":this.pass
    }
    console.log(data)
  }


  ngOnInit(): void {
  }

}
