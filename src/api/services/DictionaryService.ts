import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { BaseService } from "../BaseService";
import { HttpClient } from '@angular/common/http';
import { EnglishLevel } from '../model/EnglishLevel';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService extends BaseService {
  public prefixUrl: string = "dictionary";

  constructor(http: HttpClient) {
    super(http);
  }

  getAllEnglishLevels(): Observable<EnglishLevel[]> {
    return this.get('level');
  }
}
