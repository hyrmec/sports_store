import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './adminRouting.module';
import { AuthComponent } from './auth.component';
import { ProductTableComponent } from './product-table.component';
import { ProductEditorComponent } from './product-editor.component';
import { OrderTableComponent } from './order-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, AuthComponent, ProductTableComponent, ProductEditorComponent, OrderTableComponent]
})
export class AdminModule { }
