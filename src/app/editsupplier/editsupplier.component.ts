import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-editsupplier',
  templateUrl: './editsupplier.component.html',
  styleUrls: ['./editsupplier.component.css']
})
export class EditsupplierComponent implements OnInit {

  suppliermaintainform: any;
  errorMsg: any;
  successMsg: any;
  constructor(private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private supplierService: SupplierService) {

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

    const supplierName = this.activatedRoute.snapshot.paramMap.get('suppliername');
    this.supplierService.getSpecificSupplier(supplierName).subscribe(
    (response) => {
      console.log('Response');
      console.log(response);

      if (response.status){
        const supplierInfo = response.model;
        this.suppliermaintainform.patchValue(supplierInfo);
      }else{
        this.errorMsg = response.errMessages[0].errMessage;
      }

    },
    (error) => {
      console.log('Error');
      console.log(error);
    }
    );

  }

  saveSupplier(): void{
    this.successMsg = '';
    this.errorMsg = '';
    const supplierData = this.suppliermaintainform.value;
    console.log(supplierData);
    this.supplierService.editSupplier(supplierData).
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
