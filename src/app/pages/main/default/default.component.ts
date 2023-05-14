import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/api/services/DataService';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent {
  constructor(
    private dataService: DataService,
    private router: Router) {
  }

  navigateToGroups(courseName: string) {
    let courses = this.dataService.Courses;
    let course = courses.find(x => x.name.toLowerCase() == courseName.toLowerCase())
    this.dataService.CourseId = course!.id;
    this.router.navigate([courseName]);
  }
}
