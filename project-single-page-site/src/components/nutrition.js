'use strict';

import { wp, container } from './settings';
import { postsData } from './posts';

function listNutrition( data ) {
	console.log(data);

	const foodsArray = Array.from( data.foods );
	let totalCals = 0;

	console.log(foodsArray);

	foodsArray.map( function ( food ) {
		console.log(food);
		const content = `
			<img src="${food.photo.thumb}" />
			<h2>${food.food_name}</h2>
			<p>Calories: ${food.nf_calories} kcals</p>
		`;

		totalCals += food.nf_calories;

		container.insertAdjacentHTML('beforeend', content);

		return;
	} );

	container.insertAdjacentHTML('beforeend', `Total Calories: ${totalCals}`);
}

const query = {
  "query": "1 cup spinach two cups flour five tortillas",
  "num_servings": 4
}

const options = {
    method: 'POST',
    body: JSON.stringify(query),
    headers: {
        'Content-Type': 'application/json',
        'x-app-id': '5e4cca08',
		   'x-app-key': '73f342cf2c1b8b19a42e3ba12ce9e420',
		   "x-remote-user-id": "0",
		   "cache-control": "no-cache",
    }
}

function getNutritionData(url, options) {
	return fetch(url, options)
	.then(response => response.json());
}

export default function nutrition() {
	getNutritionData('https://trackapi.nutritionix.com/v2/natural/nutrients', options)
		.then(result => listNutrition(result))
		.catch( error => console.log( 'error: ', error ));
		//.then( response => listNutrition);

	return;
}
