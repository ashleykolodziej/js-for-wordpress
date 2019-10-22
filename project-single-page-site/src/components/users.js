'use strict';

import { wp, container } from './settings';

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

export { userData };
