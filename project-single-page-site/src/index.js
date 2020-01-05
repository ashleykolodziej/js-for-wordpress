'use strict';

import header from "./components/header";
import posts from "./components/posts";
import users from "./components/users";
import nutrition from "./components/nutrition";

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
//posts();
//users();
nutrition();

// Application ID
// 5e4cca08

// Application key
// 73f342cf2c1b8b19a42e3ba12ce9e420
/*
https://trackapi.nutritionix.com/v2/search/instant?query=apple?x-app-id=5e4cca08&x-app-key=73f342cf2c1b8b19a42e3ba12ce9e420

axios.get('https://trackapi.nutritionix.com/v2/search/instant?query=apple', {
 headers: {
   'x-app-id': 'your id',
   'x-app-key': 'your key',
 },
 ...
});

axios.get('https://trackapi.nutritionix.com/v2/natural/nutrients?query=apple', {
 headers: {
   'x-app-id': 'your id',
   'x-app-key': 'your key',
 },
 ...
});

*/
