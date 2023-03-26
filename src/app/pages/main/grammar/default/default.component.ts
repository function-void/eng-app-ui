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
    private groupTokenService: DataService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllGroups();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getAllGroups() {
    this.groupService.geAllGroups().pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      this.groups = x;
    })
  }

  navigateToLesson(group: Group) {
    this.groupTokenService.GroupToken = group.token;
    this.router.navigate([this.router.url, 'lesson']);
  }
}
