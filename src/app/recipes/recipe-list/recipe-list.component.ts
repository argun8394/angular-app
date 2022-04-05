import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
new Recipe("a test recipe", "this a simply test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_hLwYaEI1nGwoVv-05_SsfK9UP6r4JHHxg&usqp=CAU/"),
new Recipe("a test recipe", "this a simply test", "https://hips.hearstapps.com/del.h-cdn.co/assets/17/36/1504715616-delish-fettucine-alfredo-1.jpg/"),
new Recipe("a test recipe", "this a simply test", "https://hips.hearstapps.com/del.h-cdn.co/assets/17/36/1504715616-delish-fettucine-alfredo-1.jpg/")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
