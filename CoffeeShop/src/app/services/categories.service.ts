import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/api';
import { ICategories } from '../interfaces/categories';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends ApiService<ICategories> {

  constructor(public http:HttpClient) {
    super(apiPaths.categories,http);
  }
}
