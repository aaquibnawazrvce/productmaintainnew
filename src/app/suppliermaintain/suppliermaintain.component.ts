import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-suppliermaintain',
  templateUrl: './suppliermaintain.component.html',
  styleUrls: ['./suppliermaintain.component.css']
})
export class SuppliermaintainComponent implements OnInit {

  suppliermaintainform: any;

  constructor(private formBuilder: FormBuilder) {

    this.suppliermaintainform = this.formBuilder.group({
      suppliername: ['', [Validators.required, Validators.minLength(5)]],
      supplierdesc: [''],
      address: this.formBuilder.group({
        country: [''],
        city: [''],
        state: [''],
        zipcode: [''],
        addressdesc: ['']
      })

    });
  }

  ngOnInit(): void {
  }

}
