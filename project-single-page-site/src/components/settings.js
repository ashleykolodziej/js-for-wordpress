'use strict';

const WPAPI = require( 'wpapi' );
const wp = new WPAPI({ endpoint: 'http://bun.cms-devl.bu.edu/responsi/wp-json' });
const container = document.querySelector( "#app" );

export { wp, container };
