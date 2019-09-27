import header from "./components/header";
import createTabs from "./components/tabs";
import { demoTabs, init as initTabs } from "./components/tabs";
import createForm from "./components/form";
import { demoForm } from "./components/form";
import "./styles.css";

const UI = {
  render: function(content, where = "beforeend") {
    const container = document.querySelector("#app");
    container.insertAdjacentHTML(where, content);
  }
};

UI.render( header( "JS for WordPress Bootcamp UI Library" ) );

UI.render(
  createTabs( demoTabs() )
);

UI.render(
  createForm( demoForm() )
);

initTabs();
