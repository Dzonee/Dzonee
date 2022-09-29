import { Component, OnInit } from '@angular/core';
import { IFooter } from 'src/app/interfaces/footer';
import { FooterService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor( private footerService: FooterService ) { }

  public socialInfo: IFooter[]=[];

  ngOnInit(): void {
    this.getSocialInfo();
  }

  getSocialInfo(){
    this.footerService.getAll().subscribe(data=>{   
    this.socialInfo=data;
    })
  }

}
