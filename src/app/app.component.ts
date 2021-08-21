import { Component } from '@angular/core';
import { BseService } from './bse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bse';
  showdata: any []=[];
   constructor(private bseservice:BseService){}
  
  ngOnInit() 
  {
      this.bseservice.getData().subscribe((res:any)=>{
      this.showdata=res.user
       })
      }
   
}
