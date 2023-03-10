import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { DefaultComponent } from './default/default.component'

@NgModule({
  declarations: [
    MainComponent,
    DefaultComponent,
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    NzMenuModule,
    NzLayoutModule,
    NzSwitchModule,
    NzIconModule,
    NzSkeletonModule,
    NzSpaceModule,
    NzGridModule,
    FormsModule
  ]
})
export class MainModule { }
