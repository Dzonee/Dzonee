import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/api';
import { IMenu } from '../interfaces/menu';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService extends ApiService<IMenu> {

  constructor(public http: HttpClient) { 
    super(apiPaths.menu,http);
  }
}
