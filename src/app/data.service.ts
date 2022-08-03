import { Injectable } from '@angular/core';

// Category Interface
export interface ICategory {
  id: number,
  name: string,
  image: string,
}

// Product Interface
export interface IProduct {
  id: number,
  name: string,
  price: number,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCategories() {
    let categories = [];

    let cat1: ICategory = {
      id: 1,
      name: 'Fruits',
      image: '../../assets/categories/fr.jpg'
    }
    let cat2: ICategory = {
      id: 2,
      name: 'Vegetables',
      image: '../../assets/categories/vggg.jpg'
    }
    let cat3: ICategory = {
      id: 3,
      name: 'Root Crops',
      image: '../../assets/categories/root.jpg'
    }

    categories.push(cat1, cat2, cat3);

    return categories;
  }

  getFeaturedProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'For Bulalang',
      price: 55,
      image: '../../assets/products/bulanglang.webp'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Assorted Fruits for Fruit Salad',
      price: 34,
      image: '../../assets/products/fruitsalad.webp'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Newly harvested sweet kamote',
      price: 40,
      image: '../../assets/products/kamote.webp.crdownload'
    }

    products.push(prod1, prod2, prod3);

    return products;
  }

  getBestSellProducts() {
    let products = [];

    let prod1: IProduct = {
      id: 1,
      name: 'Squash',
      price: 55,
      image: '../../assets/products/squashhh.png'
    }
    let prod2: IProduct = {
      id: 2,
      name: 'Grapes',
      price: 34,
      image: '../../assets/products/Grapeee.png'
    }
    let prod3: IProduct = {
      id: 1,
      name: 'Baby Carrots',
      price: 40,
      image: '../../assets/products/bbcar.png'
    }

    products.push(prod1, prod2, prod3);

    return products;
  }
}
