import { RegistroRoutingModule } from './registro.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RegistroComponent],
  exports: [RegistroComponent],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegistroModule { }
