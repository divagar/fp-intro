import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    get(url: string): Observable<string> {
        return new Observable(observer => {
            this.http.get(url, {responseType: 'text'}).subscribe(
                (val) => {
                    observer.next(val);
                },
                (err: HttpErrorResponse) => {
                    observer.error("Error occured. " + err);
                },
                () => {
                    observer.complete();
                }
            )
        });
    }

}