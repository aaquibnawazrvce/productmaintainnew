import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  SAVE_SUPPLIER_ENDPOINT = 'https://glacial-hamlet-89841.herokuapp.com/supplier';

  EDIT_SUPPLIER_ENDPOINT = 'https://glacial-hamlet-89841.herokuapp.com/supplieredit';

  constructor(private httpClient: HttpClient) { }

  saveSupplier(supplierInfo: any): Observable<any>{
    return this.httpClient.post<any>(this.SAVE_SUPPLIER_ENDPOINT , supplierInfo);
  }

  getAllSuppliers(): Observable<any>{
    return this.httpClient.get(this.SAVE_SUPPLIER_ENDPOINT);
  }

  getSpecificSupplier(suppliername: string): Observable<any>{
    const modifiedUrl = this.SAVE_SUPPLIER_ENDPOINT + '/' + suppliername;
    return this.httpClient.get(modifiedUrl);
  }

  editSupplier(supplierInfo: any): Observable<any>{
    return this.httpClient.post<any>(this.EDIT_SUPPLIER_ENDPOINT , supplierInfo);
  }


}
