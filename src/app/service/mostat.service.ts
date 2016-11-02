import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs/Rx";
import {MoStat} from "./domain/mostat";

@Injectable()
export class MoStatService {
  constructor(private http:Http) {
  }

  private owUrl = 'https://masteroverwatchbot-surplus-cite.d.9rum.cc';

  getStat(query):  Observable<MoStat>  {
    return this.http
      .get(this.owUrl + "/ow/p/" + query)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json();
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
