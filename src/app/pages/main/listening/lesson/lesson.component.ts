import { Subject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from "../../../../../api/services/DataService";
import { LessonService } from "../../../../../api/services/LessonService";
import { DictionaryService } from 'src/api/services/DictionaryService';
import { Lesson } from 'src/api/model/Lesson';
import { EnglishLevel } from 'src/api/model/EnglishLevel';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit, OnDestroy {
  private unsubscribe = new Subject<void>();

  lessons: Lesson[] = [];
  englishLevels: EnglishLevel[] = [];

  constructor(
    private dataService: DataService,
    private lessonService: LessonService,
    private dictionaryService: DictionaryService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.getLessons();
    this.getAllLevels();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getLessons() {
    this.lessonService.getAllLessons(this.dataService.GroupToken).pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      this.lessons = x;
    })
  }

  getAllLevels() {
    this.dictionaryService.getAllEnglishLevels().pipe(takeUntil(this.unsubscribe)).subscribe(x => {
      this.englishLevels = x;
    })
  }

  navigateUnit(lesson: Lesson) {
    this.dataService.LessonId = lesson.id;
    this.router.navigate([this.router.url, 'unit']);
  }
}
