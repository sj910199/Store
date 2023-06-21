import { Component } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl:'./cart.component.html'
})
export class CartComponent {
cart: Cart={items:[{
  product: 'https://e0.pxfuel.com/wallpapers/61/978/desktop-wallpaper-cute-baby-cat-cute-cat-kitten-thumbnail.jpg',
  name:'Ralph Lauren White Polo Shirt',
  price:300,
  quantity: 12,
  id:13638244,
}]};

dataSource:Array<CartItem>=[];
displayedColumns:Array<string>=[
  'product',
  // 'name',
  // 'price',
  // 'quantity',
  // 'total',
  // 'action',

];
element: any;
ngOnInit(): void {
  this.dataSource=this.cart.items;
}

}
