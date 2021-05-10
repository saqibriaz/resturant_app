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
 getDish(id: String): dish {
return DISHES.filter((dish) =>(dish.id===id))[0];
 }

 getFeaturedDish(): dish {
return DISHES.filter((dish) => dish.featured)[0];
 }
}
