'use strict';

import header from "./components/header";
import posts from "./components/posts";
import users from "./components/users";
import "./styles.css";

// Create a blog listing page and single pages
// Create a user page that lists users and shows their blog posts
// Use event handlers instead of page refreshes for loading content

const UI = {
  render: function(content, where = "beforeend") {
    const container = document.querySelector("#app");
    container.insertAdjacentHTML(where, content);
  }
};

// Pull in the site title and description
// Create a menu of pages (can be hardcoded or use the WP REST API Menus Plugin)
header();
posts();
users();