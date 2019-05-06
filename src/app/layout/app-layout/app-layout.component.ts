import { Component,ChangeDetectionStrategy,OnInit,AfterViewInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/services/common.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  changeDetection:ChangeDetectionStrategy.Default
 // providers: [CommonService]
})
export class AppLayoutComponent implements OnInit,AfterViewInit{
  constructor(private common:CommonService,private profile: ProfileService) {

   }
  ngOnInit(){
    
  }
  ngAfterViewInit(){

  }

}
