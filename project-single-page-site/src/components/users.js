'use strict';

import { wp, container } from './settings';
import { postsData } from './posts';

const userData = wp.users().get(function( error, data ) {
	if ( error ) {
		console.log( `Error retrieving posts data: ${error}` );
	}

	return data;
});

function getPostsByAuthor( author ) {
	const posts = wp.posts().author( author ).get( function ( error, data ) {
		if ( error ) {
			console.log( `Error retrieving posts data: ${error}` );
		}

		return data;
	} )

	return posts;
}

function listAuthors( data ) {
	data.map( function ( user ) {
		const postsByAuthor = getPostsByAuthor( user.id );

		let content = `
			<h2>${user.name}</h2>
			<ul>
		`;

		Promise.resolve( postsByAuthor )
			.then( function (data) {
				data.map( function ( post ) {
					content += `<li><a href="#">${post.title.rendered}</a></li>`;
				} );
			} )
			.then( function () {
				content += `</ul>`;
				container.insertAdjacentHTML('beforeend', content);
			} );
	} );
}

export default function users() {
	Promise.resolve( userData )
		.then( listAuthors );
	return;
}

export { userData };
