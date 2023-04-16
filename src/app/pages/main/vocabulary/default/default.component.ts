import { Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from "../../../../../api/model/Group";
import { GroupService } from "../../../../../api/services/GroupService";
import { DataService } from "../../../../../api/services/DataService";

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();

  groups: Group[] = [];

  constructor(
    private groupService: GroupService,
    private dataService: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllGroups(this.dataService.CourseId);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getAllGroups(courseId?: number) {
    this.groupService.getAllGroups(courseId).pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      this.groups = x;
    })
  }

  navigateToLesson(group: Group) {
    this.dataService.GroupToken = group.token;
    this.router.navigate([this.router.url, 'lesson']);
  }
}
