import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() isAdmin = false;
  role = 'user';

  ngOnInit() {
    if(this.isAdmin){
      this.role = 'admin';
    }

  }

}
