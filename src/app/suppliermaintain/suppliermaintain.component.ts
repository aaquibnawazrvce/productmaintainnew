import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-suppliermaintain',
  templateUrl: './suppliermaintain.component.html',
  styleUrls: ['./suppliermaintain.component.css']
})
export class SuppliermaintainComponent implements OnInit {

  suppliermaintainform: any;
  errorMsg: any;
  successMsg: any;

  constructor(private formBuilder: FormBuilder,
              private supplierService: SupplierService) {

    this.suppliermaintainform = this.formBuilder.group({
      //suppliername: [''],
      //suppliername: ['', Validators.required],
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

  saveSupplier(): void{
    this.successMsg = '';
    this.errorMsg = '';
    const supplierData = this.suppliermaintainform.value;
    console.log(supplierData);
    this.supplierService.saveSupplier(supplierData).
    subscribe((response) => {
      console.log('Response Data');

      if (response.status){
          this.successMsg = response.sucessMsg;
      }else{
         this.errorMsg = response.errMessages[0].errMessage;
      }

    },
    (error) => {
      console.log('Error Data' + error);
    });

  }

}
