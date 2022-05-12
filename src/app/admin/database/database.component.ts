import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  name = new FormControl('');

  profile = new FormGroup({
    name: new FormControl(''),
    address:  new FormControl('') 
  })

  userProfile = this.fb.group({
    name: [''],
    address: ['']
  })

  onSubmit() {
    console.log(this.userProfile.value)
  }

}
