import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-transactions',
  templateUrl: './my-transactions.component.html',
  styleUrls: ['./my-transactions.component.scss']
})
export class MyTransactionsComponent implements OnInit {
  constructor(
    private router: Router
  )
  {}


  ngOnInit(): void {

  }
  async newtransaction() {
    await this.router.navigate(["user/new-transaction"])

  }
}
