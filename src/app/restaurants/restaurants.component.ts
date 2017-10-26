import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { RestaurantsService } from 'app/restaurants/restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  providers: [RestaurantsService]
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[];

  constructor(private restaurantServices: RestaurantsService) { }

  ngOnInit() {
   this.restaurantServices.restaurants().subscribe(restaurants => {
     this.restaurants = restaurants;
   })
  }

}
