import menuTemplate from "html-loader!../html/menu.html";
require('../scss/global-menu.scss');
let _ = require('lodash');
import dbmodels from './dbmodels';





export default class MenuControl {
    constructor(menuItems, menuItemClickFunction) {

        
        this.render = function (){

            let menuHtml = _.template(require("html-loader!../html/menu.html"))(menuItems);
            
            let menu = document.createElement('div');
            menu.id = "global-menu";
            menu.classList.add("global-menu");
            menu.innerHTML = menuHtml;

            let links = menu.querySelectorAll('.menu_link');
            for (let link of links)
            {
                link.onclick =  (event) => {
                    menuItemClickFunction(event.target.hash)
                };
            } 
            return menu;

        }
    }
}

