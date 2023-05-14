import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { BaseService } from "../BaseService";
import { HttpClient } from '@angular/common/http';
import { Test } from '../model/Test';

@Injectable({
  providedIn: 'root'
})
export class TestService extends BaseService {
  public prefixUrl: string = "test";

  constructor(http: HttpClient) {
    super(http);
  }

  getAllTests(): Test[] {
    return tests;
  }

}

const tests: Test[] = [
  { id: 1, sortOrder: 1, levelName: "Beginner", levelCode: "Beginner", title: "Test", url: "https://docs.google.com/forms/d/e/1FAIpQLSehp6Ni-aIDVSHsUNaZORnwrdW0jMEmbaWBRqddnunbNyEFUg/viewform" },
  { id: 2, sortOrder: 2, levelName: "Elementary", levelCode: "Elementary", title: "Test", url: "https://docs.google.com/forms/d/e/1FAIpQLSehp6Ni-aIDVSHsUNaZORnwrdW0jMEmbaWBRqddnunbNyEFUg/viewform" },
  { id: 3, sortOrder: 3, levelName: "Pre-Intermediate", levelCode: "Pre-Intermediate", title: "Test", url: "https://docs.google.com/forms/d/e/1FAIpQLSfkcsod73lMJfhaDKrU3-hgnjMFpSqIOm-vFV4Sv6PbeOaznQ/viewform" },
]
