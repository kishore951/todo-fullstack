import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  email=""
  pass=""

  readValue=()=>{
    let data={
      "email":this.email,
      "pass":this.pass
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
