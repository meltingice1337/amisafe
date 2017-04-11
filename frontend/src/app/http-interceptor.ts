import { Injectable } from '@angular/core';
import { ConnectionBackend, Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';

@Injectable()
export class HttpInterceptor extends Http {

    private API = environment.api;

    constructor(
        backend: ConnectionBackend,
        defaultOptions: RequestOptions,
    ) {
        super(backend, defaultOptions);
    }

    public request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        if (url instanceof Request) {
            url.url = this.API + url.url;
        } else {
            url = this.API + url;
        }
        // this.toasterSerivce.pop('error', 'error', 'Error');
        return super.request(url, options)
            .catch((error: Response | any) => {
                return Observable.throw(error);
            });
    }
}
