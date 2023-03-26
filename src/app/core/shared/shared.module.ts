import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { SortByOrderPipe } from "./pipes/sort-by-order.pipe"
import { FilterPipe } from './pipes/filter.pipe';

const PIPES = [
  SortByOrderPipe,
  FilterPipe
];

const NG_ZORRO_MODULES = [
  NzMenuModule,
  NzLayoutModule,
  NzSwitchModule,
  NzIconModule,
  NzSkeletonModule,
  NzSpaceModule,
  NzGridModule,
  NzPageHeaderModule,
  NzBreadCrumbModule,
  NzDividerModule,
  NzBadgeModule,
  NzCardModule,
  NzTabsModule
];

@NgModule({
  declarations: [
    ...PIPES
  ],
  imports: [
    NG_ZORRO_MODULES,
  ],
  exports: [
    ...PIPES,
    NG_ZORRO_MODULES,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
