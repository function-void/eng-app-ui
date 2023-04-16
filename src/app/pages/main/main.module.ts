import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { DefaultComponent } from './default/default.component'
import { SharedModule } from "../../core/shared/shared.module";

@NgModule({
  declarations: [
    MainComponent,
    DefaultComponent,
  ],
  imports: [
    MainRoutingModule,
    FormsModule,
    CommonModule,
    SharedModule
  ]
})
export class MainModule { }
