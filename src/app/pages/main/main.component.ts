import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseService } from '../../../api/services/CourseService';
import { Course } from '../../../api/model/Course';

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

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.currentYear = (new Date()).getFullYear();
    this.getAllCourse();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getAllCourse() {
    this.courseService.geAllCourse().pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      this.courses = x;
      this.isMenuLoad = true;
      console.log(this.courses)
    })
  }

  getIconName = ((courseName: string): string => {
    switch(courseName.toLowerCase()){
      case "grammar": return "form";
      case "vocabulary": return "book";
      case "listening": return "sound";
      case "speaking": return "comment";
      default: return "appstore";
    }
  })
}
