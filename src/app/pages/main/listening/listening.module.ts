import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../../core/shared/shared.module";
import { ListeningRoutingModule } from "./listening-routing.module";
import { ListeningComponent } from "./listening.component";
import { DefaultComponent } from './default/default.component';

@NgModule({
  declarations: [
    ListeningComponent,
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    ListeningRoutingModule,
    SharedModule
  ]
})
export class ListeningModule { }
