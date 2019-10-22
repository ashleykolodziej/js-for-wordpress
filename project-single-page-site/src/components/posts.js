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
			<a data-id="${post.id}" class="button js-post-detail" href="#">Read more</a>
		`;

		container.insertAdjacentHTML('beforeend', content);

		return;
	} );
}

function createSingleView( e ) {
	e.preventDefault();

	console.log(this);

	const postID = this.getAttribute( `data-id` );
	postsData.find( function ( value, index ) {
		console.log( `Value is ${value}` );
		console.log( `Index is ${value}` );
	} );
}

function attachPostEvents() {
	const postLinks = Array.from( document.querySelectorAll( `.js-post-detail` ) );

	postLinks.map( function ( link ) {
		link.addEventListener( 'click', createSingleView );
	} );
}

export default function posts() {
	Promise.resolve( postsData )
		.then( buildPosts )
		.then( attachPostEvents );
	return;
}

export { postsData };
