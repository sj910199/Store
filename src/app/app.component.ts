import { Component } from '@angular/core';

@Component({
  selector:'app-root',
  template:`<app-header></app-header>
  <app-products-header></app-products-header>
  <router-outlet></router-outlet>
`,

  styles:[]

})

export class AppComponent {
  title = 'store';
  
   
}


