import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('Awesome. You are clicking the share button!!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

//importa products del array de product.ts y luego lo exporta para usarlo en el componente products = products en donde luego voy a hacer un *nGFor
// tambien exporta la funcion share() que se activa cuando doy clic en el boton

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
