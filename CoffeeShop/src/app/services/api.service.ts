import { Inject, Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService<T>{
    constructor(@Inject('url') public url: string, protected http: HttpClient){}

    getAll(): Observable<T[]> {
        return this.http.get<T[]>(this.url).pipe(
          catchError(error => {
            return throwError(error.error);
          })
        );
      }
}