import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatesupplierComponent } from './createsupplier/createsupplier.component';
import { EditsupplierComponent } from './editsupplier/editsupplier.component';
import { ProducttypeComponent } from './producttype/producttype.component';
import { SuppliermaintainComponent } from './suppliermaintain/suppliermaintain.component';
import { ViewsuppliersComponent } from './viewsuppliers/viewsuppliers.component';

const routes: Routes = [
  {path: '', redirectTo: '/addproducttype', pathMatch: 'full'},
  {path: 'addproducttype', component: ProducttypeComponent},
  {path: 'addsupplier', component: CreatesupplierComponent},
  {path: 'addsuppliernew', component: SuppliermaintainComponent},
  {path: 'viewsuppliers', component: ViewsuppliersComponent},
  {path: 'supplier/:suppliername', component: EditsupplierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingCmpArray = [ProducttypeComponent,
  CreatesupplierComponent, SuppliermaintainComponent,
   ViewsuppliersComponent, EditsupplierComponent];
