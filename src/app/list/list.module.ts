import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list/list.component';
import { MaterialModule } from '../material/material.module'



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class ListModule { }
