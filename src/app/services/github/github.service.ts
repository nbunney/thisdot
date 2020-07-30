import {Injectable} from '@angular/core';
import {Observable, of, throwError } from 'rxjs';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { filterXSS } from 'xss'
import { environment } from '../../../environments/environment';
import {GithubUserReturn} from "../../interfaces"

@Injectable({
  providedIn: 'root'
})
export class GithubService implements HttpInterceptor {
  authData: string;
  getUsersURL: string = "https://api.github.com/search/users";

  constructor(private http: HttpClient) {
    this.authData = window.btoa(environment.githubUser + ':' + environment.githubKey);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Basic ${this.authData}`
      }
    });

    return next.handle(request).pipe(catchError(err => {
      const error = err.error.message || err.statusText;
      return throwError(error);
    }))
  }
  // This returns an observable
  public getUsers(name: string, page: number): Observable<GithubUserReturn> {
    // Verify we are not sending anything bad at the github API
    // @ts-ignore
    return this.http.get(this.getUsersURL, {params: {q: filterXSS(name), page: page}})
  }
}


