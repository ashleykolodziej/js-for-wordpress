'use strict';

import header from "./components/header";
import createTabs from "./components/tabs";
import { demoTabs, init as initTabs } from "./components/tabs";
import createForm from "./components/form";
import { demoForm, init as initForms } from "./components/form";
import "./styles.css";

const UI = {
  render: function(content, where = "beforeend") {
    const container = document.querySelector("#app");
    container.insertAdjacentHTML(where, content);
  }
};

UI.render( header( "JS for WordPress Bootcamp UI Library" ) );

UI.render( `<h2>Tabs</h2>` );

UI.render( createTabs( demoTabs() ) );

UI.render( `<h2>Forms</h2>` );

UI.render( createForm( demoForm() ) );

initTabs();

initForms();
