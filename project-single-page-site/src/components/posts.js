'use strict';

const WPAPI = require( 'wpapi' );
const wp = new WPAPI({ endpoint: 'http://bun.cms-devl.bu.edu/responsi/wp-json' });

wp.posts().get(function( err, data ) {
    if ( err ) {
        // handle err
    }
    data.map( post => {
    	document.querySelector("#app").insertAdjacentHTML("beforeend", `<h3>${post.title.rendered}</h3>`);
    } );
});

export default function posts() {
  //console.log(pageData);
  //console.log(pages);
  return;
}
