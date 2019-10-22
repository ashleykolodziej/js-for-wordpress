'use strict';

const WPAPI = require( 'wpapi' );
const wp = new WPAPI({ endpoint: 'http://bun.cms-devl.bu.edu/responsi/wp-json' });

const siteData = wp.root().get( function ( error, data ) {
	if ( error ) {
	  console.log( `Error retrieving site data: ${error}` )
	}

	return data;
} );

export default function header() {
	Promise.resolve( siteData ).then( function ( data ) {

		// TODO: Only output tags if not blank
		const content = `
			<h1>${data.name}</h1>
			<p>${data.description}</p>
		`;

		const container = document.querySelector("#app");
		container.insertAdjacentHTML('beforeend', content);

		return;
	} );
}
