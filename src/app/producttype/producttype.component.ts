import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-producttype',
  templateUrl: './producttype.component.html',
  styleUrls: ['./producttype.component.css']
})
export class ProducttypeComponent implements OnInit {

  producttypeform = new FormGroup({
    producttypename : new FormControl(''),
    producttypedesc: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  /*displayData(): void{
    console.log('Hi display');
    this.producttypeform.setValue({
     producttypename: 'Water Bottle'
     //,
     //producttypedesc: 'This can hold water'
  });*/

  displayData(): void{
    console.log('Hi display');
    this.producttypeform.patchValue({
     producttypename: 'Water Bottle'
     //,
     //producttypedesc: 'This can hold water'
  });

  }

}
