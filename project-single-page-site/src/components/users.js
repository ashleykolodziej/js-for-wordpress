'use strict';

const WPAPI = require( 'wpapi' );
const wp = new WPAPI({ endpoint: 'http://bun.cms-devl.bu.edu/responsi/wp-json' });
const container = document.querySelector( "#app" );

const userData = wp.users().get(function( error, data ) {
	if ( error ) {
		console.log( `Error retrieving posts data: ${error}` );
	}

	return data;
});

function listAuthors( data ) {
	data.map( function ( user ) {
		console.log(user);

		const content = `
			<h2>${user.name}</h2>
		`;

		container.insertAdjacentHTML('beforeend', content);

		return;
	} );
}

export default function users() {
	Promise.resolve( userData )
		.then( listAuthors );
	return;
}
