'use strict';

const WPAPI = require( 'wpapi' );
const wp = new WPAPI({ endpoint: 'http://bun.cms-devl.bu.edu/responsi/wp-json' });
const container = document.querySelector( "#app" );

const siteData = wp.root().get( function ( error, data ) {
	if ( error ) {
	  console.log( `Error retrieving site data: ${error}` );
	}

	return data;
} );

function createSiteInfo( data ) {
	// TODO: Only output tags if not blank
	const content = `
		<h1>${data.name}</h1>
		<p>${data.description}</p>
	`;

	container.insertAdjacentHTML('beforeend', content);

	return;
}

function createNavigation() {
	const content = `
		<nav>
			<a href="#">Blog</a>
			<a href="#">Users</a>
		</nav>
	`;

	container.insertAdjacentHTML('beforeend', content);

	return;
}

export default function header() {
	Promise.resolve( siteData )
		.then( createSiteInfo )
		.then( createNavigation );
}
