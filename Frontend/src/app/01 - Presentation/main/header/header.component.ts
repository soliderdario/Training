import { Component, OnInit, Injector } from '@angular/core';

import { BaseComponent } from '../../base-component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends BaseComponent implements OnInit {


  constructor(
    injector: Injector,
  ) {
    super(injector);
   }

  ngOnInit() {
    super.ngOnInit();
  }

}
