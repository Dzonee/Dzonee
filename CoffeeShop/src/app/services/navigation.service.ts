import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/api';
import { INavigation } from '../interfaces/navigation';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationService extends ApiService<INavigation> {

  constructor(public http: HttpClient) { 
    super(apiPaths.navigation,http);
  }
}
