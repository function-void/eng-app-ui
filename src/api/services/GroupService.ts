import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { BaseService } from "../BaseService";
import { HttpClient } from '@angular/common/http';
import { Group } from '../model/Group';

@Injectable({
  providedIn: 'root'
})
export class GroupService extends BaseService {
  public prefixUrl: string = "group";

  constructor(http: HttpClient) {
    super(http);
  }

  getAllGroups(courseId?: number): Observable<Group[]> {
    return this.get('', { courseId });
  }
}
