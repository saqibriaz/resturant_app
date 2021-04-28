import { Injectable } from '@angular/core';
import {dish} from '../shared/dish';
import {DISHES}  from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes(): dish[] {
  return DISHES;
  }
}
