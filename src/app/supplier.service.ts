import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  
  constructor(private httpClient: HttpClient) { }
  
}
