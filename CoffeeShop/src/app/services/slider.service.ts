import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/api';
import { ISlider } from '../interfaces/slider';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SliderService extends ApiService<ISlider> {

  constructor(public http: HttpClient) {
    super(apiPaths.slider, http)
   }
}
