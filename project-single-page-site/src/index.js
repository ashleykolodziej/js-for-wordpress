'use strict';

import header from "./components/header";
import posts from "./components/posts";
import "./styles.css";

// Pull in the site title
// Create a menu of pages (can be hardcoded or use the WP REST API Menus Plugin)
// Create a blog listing page and single pages
// Create a user page that lists users and shows their blog posts
// Use event handlers instead of page refreshes for loading content

const UI = {
  render: function(content, where = "beforeend") {
    const container = document.querySelector("#app");
    container.insertAdjacentHTML(where, content);
  }
};

UI.render( header( "JS for WordPress Single Page Site" ) );
