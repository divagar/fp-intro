import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LSService } from './app.ls.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient,
        private lsService: LSService) {
    }

    get(url: string): Observable<string> {
        return new Observable(observer => {
            //try to get from ls
            let lsVal = this.lsService.retrieve(url);
            if (lsVal == null) {
                this.http.get(url, { responseType: 'text' }).subscribe(
                    (val) => {
                        this.lsService.store(url, val);
                        observer.next(val);
                    },
                    (err: HttpErrorResponse) => {
                        observer.error("Error occured. " + err);
                    },
                    () => {
                        observer.complete();
                    }
                )
            }
            else {
                observer.next(lsVal);
                observer.complete();
            }
        });
    }
}