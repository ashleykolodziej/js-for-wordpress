'use strict';

const WPAPI = require( 'wpapi' );
const wp = new WPAPI({ endpoint: 'http://bun.cms-devl.bu.edu/responsi/wp-json' });
const container = document.querySelector( "#app" );

const postsData = wp.posts().get(function( error, data ) {
	if ( error ) {
		console.log( `Error retrieving posts data: ${error}` );
	}

	return data;
});

function buildPosts( data ) {
	data.map( function ( post ) {
		console.log(post);
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