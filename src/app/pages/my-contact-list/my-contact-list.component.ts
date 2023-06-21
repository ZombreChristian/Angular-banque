import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-contact-list',
  templateUrl: './my-contact-list.component.html',
  styleUrls: ['./my-contact-list.component.scss']
})
export class MyContactListComponent implements OnInit {
  constructor(
    private router: Router
  )
  {}


  ngOnInit(): void {

  }
  async newcontact() {
    await this.router.navigate(["new-contact/:idContact"])

  }

}
