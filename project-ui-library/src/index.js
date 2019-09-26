import header from "./components/header";
import tabs from "./components/tabs";
import { demoTabs, init as initTabs } from "./components/tabs";
import "./styles.css";

const UI = {
  render: function(content, where = "beforeend") {
    const container = document.querySelector("#app");
    container.insertAdjacentHTML(where, content);
  }
};

UI.render( header( "JS for WordPress Bootcamp UI Library" ) );

UI.render(
  tabs( demoTabs() )
);

initTabs();
