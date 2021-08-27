import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { ProductslistComponent } from './components/productslist/productslist.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '',
    component:NavComponent,
    children: [
      {
        path: 'create',
        component:ProductFormComponent
      },
      {
        path: 'table',
        component:TableComponent
      },
      {
        path: 'dashboard',
        component:DashboardComponent
      },
      {
        path: 'products',
        component:ProductslistComponent
      },
      {
        path: 'products/create',
        component:FormProductComponent
      },
      {
        path: 'products/edit/:id',
        component:EditProductComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
