import { Component, OnInit } from '@angular/core';
import { ICategories } from 'src/app/interfaces/categories';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }

  public categories: ICategories[]=[];

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoriesService.getAll().subscribe(data=>{
      this.categories=data;
    })
  }

 
}
