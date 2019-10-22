'use strict';

import { wp, container } from './settings';
import { userData } from './users';

const postsData = wp.posts().get(function( error, data ) {
	if ( error ) {
		console.log( `Error retrieving posts data: ${error}` );
	}

	return data;
});

function buildPosts( data ) {
	data.map( function ( post ) {
		const content = `
			<h2>${post.title.rendered}</h2>
			<p>${post.excerpt.rendered}</p>
		`;

		container.insertAdjacentHTML('beforeend', content);

		return;
	} );
}

export default function posts() {
	Promise.resolve( postsData )
		.then( buildPosts );
	return;
}

export { postsData };
