import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;

  @Output() notify = new EventEmitter();
  /*El Output va a estar emitiendo un evento */
  constructor() {}

  ngOnInit() {}
}

/* este componente es el que recibe data de su padre*/
/* tiene seteado @Input() para recibir informacion*/
