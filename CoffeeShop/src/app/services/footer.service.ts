import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/api';
import { IFooter } from '../interfaces/footer';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class FooterService extends ApiService<IFooter> {

  constructor(public http: HttpClient) { 
    super(apiPaths.footer, http)
  }
}
