import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { CommonModule } from '@angular/common';


interface Category {
  name: string;
  imageUrl: string;
}

interface Product {
  name: string;
  price: number;
  imageUrl: string;
}

interface Promotion {
  title: string;
  description: string;
  imageUrl: string;
}

interface Review {
  user: string;
  date: Date;
  comment: string;
  rating: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,MatFormFieldModule,MatMenuModule,
    MatGridListModule,MatCardModule,MatButtonToggleGroup,MatButtonToggle,CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // Demo data for categories
  categories: Category[] = [
    { name: 'Electronics', imageUrl: 'assets/electronics.jpg' },
    { name: 'Fashion', imageUrl: 'assets/fashion.jpg' },
    { name: 'Home Decor', imageUrl: 'assets/home-decor.jpg' },
    { name: 'Toys', imageUrl: 'assets/toys.jpg' },
  ];

  // Demo data for tabs/categories toggle
  tabs: string[] = ['All', 'New Arrivals', 'Best Sellers', 'Discounts'];

  // Demo data for featured products
  featuredProducts: Product[] = [
    { name: 'Smartphone', price: 299.99, imageUrl: 'assets/smartphone.jpg' },
    { name: 'Headphones', price: 49.99, imageUrl: 'assets/headphones.jpg' },
    { name: 'Coffee Maker', price: 89.99, imageUrl: 'assets/coffee-maker.jpg' },
    { name: 'Camera', price: 399.99, imageUrl: 'assets/camera.jpg' },
  ];

  // Demo data for promotions
  promotions: Promotion[] = [
    {
      title: 'Holiday Sale',
      description: 'Save up to 50% on selected items!',
      imageUrl: 'assets/holiday-sale.jpg',
    },
    {
      title: 'Free Shipping',
      description: 'On all orders above $100',
      imageUrl: 'assets/free-shipping.jpg',
    },
    {
      title: 'Member Discount',
      description: 'Exclusive discounts for members!',
      imageUrl: 'assets/member-discount.jpg',
    },
  ];

  // Demo data for customer reviews
  reviews: Review[] = [
    {
      user: 'Alice',
      date: new Date('2023-10-01'),
      comment: 'Great quality, fast shipping!',
      rating: 5,
    },
    {
      user: 'Bob',
      date: new Date('2023-09-15'),
      comment: 'Product matched the description.',
      rating: 4,
    },
    {
      user: 'Charlie',
      date: new Date('2023-08-10'),
      comment: 'Good value for money.',
      rating: 4,
    },
    {
      user: 'Diana',
      date: new Date('2023-07-05'),
      comment: 'Not as expected, but okay overall.',
      rating: 3,
    },
  ];
}
