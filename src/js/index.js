import database from './database';
import LoginControl from './login';
import MenuControl from './menuControl';
import dbmodels from './model';
import menuActions from './menuActions';
let _ = require('lodash');

let personid = sessionStorage.getItem('personid');
if (!personid)
{
    let loginControl = new LoginControl(database);
    loginControl.render();
}
else{
    let person = database.persons.find((p)=>p.id==personid); 
    person.__proto__ = dbmodels[person.type].prototype;

    let menuItems = getMenuItems(person);



    let menuControl = new MenuControl(menuItems, menuItemClickFunction);
    document.body.appendChild(menuControl.render());

    let contentDiv = document.createElement('div');
    contentDiv.id='content';
    document.body.appendChild(contentDiv);
    menuActions.renderTasksPage(database, person);

    function menuItemClickFunction(menu_item_hash) {
        switch (menu_item_hash) {
            case '#tasks': menuActions.renderTasksPage(database,person); break;
            case '#newtask': menuActions.renderNewTaskPage(database, person); break;
            case '#agents': menuActions.renderAgentsGallery(); break;
            case '#managers': menuActions.renderManagersGallery(); break;
            case '#contacts': menuActions.renderContactsPage(); break;
            case '#mailbox': menuActions.renderMailboxPage(database,person); break;
            case '#profile': break;
            case '#logout': menuActions.Logout(); break;
            default: break;
        }
    }

    function getMenuItems(person) {
        let menu = { 
            items: [{
                        text: "Collaborators",
                        href: "#collaborators",
                        items: [{
                                text: "Managers",
                                href: "#managers"
                            },
                            {
                                text: "Agents",
                                href: "#agents"
                            }
                        ]
                    }, 
                    {
                        text: "Contacts",
                        href: "#contacts"
                    },
                    {
                        text: "Mailbox",
                        href: "#mailbox"
                    },
                    {
                        text: `${person.getFullName()}`,
                        href: "#profile",
                        items: [{
                            text: 'Logout',
                            href: '#logout'
                        }]
                    }

        ]};
        
        
        let tasksMenuItem = {
            text: "Tasks",
            href: "#tasks"
        }
        if (person instanceof dbmodels.Manager) {
            tasksMenuItem.items = [{
                text: "New task",
                href: "#newtask"
            }]
        }

        menu.items.unshift(tasksMenuItem);


        return menu;
    }

}
