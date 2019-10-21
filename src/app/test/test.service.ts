import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class TestService {
  private testUrl = "/api/test";
  constructor(private http: Http) {}

  getTest(): Promise<void | string> {
    return this.http
      .get(this.testUrl)
      .toPromise()
      .then(response => response.json() as string)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = error.message
      ? error.message
      : error.status
      ? `${error.status} - ${error.statusText}`
      : "Server error";
    console.log(errMsg); // log to console instead
  }
}
