import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-viewsuppliers',
  templateUrl: './viewsuppliers.component.html',
  styleUrls: ['./viewsuppliers.component.css']
})
export class ViewsuppliersComponent implements OnInit {

  supplierList = [];
  errorMsg: string;
  successMsg: string;
  baseurl = '';

  constructor(private supplierService: SupplierService) {
      this.baseurl = 'supplier/';
      this.getAllSuppliers();
   }

  ngOnInit(): void {
  }

  getAllSuppliers(): void{
    this.errorMsg = '';
    this.successMsg = '';
    this.supplierService.getAllSuppliers().
    subscribe(
      (response) => {
          console.log('Response' + response);
          if (response.status){
            this.successMsg = response.sucessMsg;
            this.supplierList = response.model;
          }else{
            this.errorMsg = response.errMessages[0].errMessage;
          }
      },
      (error) => {

      }
    );
  }

}
