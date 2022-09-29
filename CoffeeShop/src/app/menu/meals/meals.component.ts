import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';


import { ICategories } from 'src/app/interfaces/categories';
import { IMenu } from 'src/app/interfaces/menu';
import { CategoriesService } from 'src/app/services/categories.service';
import { MenuService } from 'src/app/services/menu.service';


@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
})
export class MealsComponent implements OnInit {

  constructor(private productService: MenuService,private categoriesService: CategoriesService) { }
  

  public products: IMenu[]=[];
  public categories: ICategories[]=[];
  public notFoundProducts:string="Products for your requirements do not exist!";
  public sortValue:number=0;

  productLength:any;
  page:number=1;
  

  ngOnInit(): void {
     this.getProducts();
    this.getCategories();
    
  }
  getProducts(search="",sort="0",time="0"){

    this.productService.getAll().subscribe(data=>{
      var newSortFilterArray:IMenu[]=[];
      if(search != ""){
        newSortFilterArray = data.filter((val) =>
          val.name.toLowerCase().includes(search)
        );
      }
      else{
        newSortFilterArray=data
      }
      if(sort != "0"){
        switch (sort) {
          case "1":
            newSortFilterArray.sort(function(a, b) {
              return a.price - b.price;
            });
            break;
          case "2":
            newSortFilterArray.sort(function(a, b) {
              return b.price - a.price;
            });
            break;
          case "3":
              newSortFilterArray.sort(function(a, b) {
                return a.hearts - b.hearts;
              });
              break;
          case "4":
              newSortFilterArray.sort(function(a, b) {
                  return b.hearts - a.hearts;
              });
              break;
          default:
              newSortFilterArray
              break
        }
      }
      var timeNum=Number(time);
      if(timeNum != 0){
          newSortFilterArray = newSortFilterArray.filter((val) => val.cat.includes(timeNum));
      }
      this.products=newSortFilterArray;
      this.productLength=this.products.length;
     
    })
  }
  getCategories(){
    this.categoriesService.getAll().subscribe(data=>{
      this.categories=data;
    })
  }
  
  categoryName(cat:number[]):any
  {
   var category="";
   this.categories.forEach(e => {
     cat.forEach(c=> {
         if (e.id == c) {
           category+=e.name+', '
         }
       });
   });
   var cato=category.split(",")
   cato=cato.slice(0,cato.length-1);
    return cato.join(',')
    
    
  } 
  heartNumber(hearts:number):string{
    var text="";
    for (let i = 0; i < hearts; i++) {
      text+="<i class='fas fa-heart'></i>"
    }
    return text;
  }

}
