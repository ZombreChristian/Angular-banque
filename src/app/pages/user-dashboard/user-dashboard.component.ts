import { FirstService } from './../../services/first.service';
import { Component, OnInit } from '@angular/core';
import { LightInfoInput } from 'src/app/components/light-info/light-info.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  constructor(
    private firstService : FirstService
  ){}
  ngOnInit():void {
     this.initializeAccountInfo();
    //  this.firstService.findAllTransactions().subscribe(observer:{
    //   next:(data)=> {
    //     console.log.(data);
    //   }
    //  })

  }

  accountInfoList: Array<LightInfoInput> = [];

  private initializeAccountInfo(){

    // this.accountInfoList = this.firstService.initializeAccountInfo;
  }

}

