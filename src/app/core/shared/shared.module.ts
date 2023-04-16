import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { SortByOrderPipe } from "./pipes/sort-by-order.pipe";
import { FilterPipe } from './pipes/filter.pipe';

import { YoutubeComponent } from './components/youtube/youtube.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { TaskComponent } from './components/task/task.component';
import { UnitComponent } from './components/unit/unit.component';
import { SourceComponent } from './components/source/source.component';


const COMPONENTS = [
  YoutubeComponent,
  TaskComponent,
  UnitComponent,
  SourceComponent
];

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
  NzTabsModule,
  NzTimelineModule,
  NzListModule,
  NzTypographyModule,
  NzButtonModule
];

@NgModule({
  declarations: [
    ...PIPES,
    ...COMPONENTS,
    TaskComponent,
  ],
  imports: [
    NG_ZORRO_MODULES,
    YouTubePlayerModule,
    CommonModule
  ],
  exports: [
    ...PIPES,
    NG_ZORRO_MODULES,
    ...COMPONENTS,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
