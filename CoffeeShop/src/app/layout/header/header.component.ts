import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { INavigation } from 'src/app/interfaces/navigation';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations :[
    trigger('logoAnimation',[
      transition(':enter',[
        style({
          transform: 'translateX(-600px) rotate(100deg)',
        }),
	      animate('1s')
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  public navigation: INavigation[]=[];

  ngOnInit(): void {
    this.getNavigation();
  }

  getNavigation(){
    this.navigationService.getAll().subscribe(data=>{
      this.navigation=data;
    })
  }
}
