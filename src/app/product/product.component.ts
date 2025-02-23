import { CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  imports:[MatCardModule, CommonModule]
})
export class ProductComponent implements OnInit {

  title = input.required<string>();
  description = input.required<string>();
  price = input.required<number>()

  ngOnInit() {
  }

}
