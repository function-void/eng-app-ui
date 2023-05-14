import { Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Course } from '../../../api/model/Course';
import { Group } from '../../../api/model/Group';
import { CourseService } from '../../../api/services/CourseService';
import { DataService } from 'src/api/services/DataService';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();

  theme: boolean = false;
  isCollapsed: boolean = false;
  currentYear?: number;
  isMenuLoad: boolean = true;
  courses: Course[] = [];
  user: any;

  constructor(
    private courseService: CourseService,
    private dataService: DataService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit(): void {
    this.currentYear = (new Date()).getFullYear();
    this.getAllCourse();
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }

  getAllCourse() {
    this.courseService.getAllCourse().pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      this.courses = x;
      this.dataService.Courses = x;
      this.isMenuLoad = true;
    })
  }

  getIconName = ((courseName: string): string => {
    switch (courseName.toLowerCase()) {
      case "grammar": return "form";
      case "vocabulary": return "book";
      case "listening": return "sound";
      case "speaking": return "comment";
      default: return "appstore";
    }
  })

  navigateToLesson(courseName: string, courseid: number, group: Group) {
    this.dataService.GroupToken = group.token;
    this.dataService.CourseId = courseid;
    let currentUrl = `${this.document.location.origin}${this.router.url}`;
    let nextUrl = `${this.document.location.origin}/${courseName}/lesson`;
    if (currentUrl === nextUrl) {
      this.dataService.refreshLessons("refresh lessons")
    } else {
      this.router.navigate([courseName, 'lesson']);
    }
  }
}
