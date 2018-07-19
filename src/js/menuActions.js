
import TableControl from './tableControl';

function renderAgentsGallery() {
    require('../scss/gallery.scss');
    let gallery = {
        title: "The best agents",
        items: [
            require("../img/agents/agent1.jpg"),
            require("../img/agents/agent2.jpg"),
            require("../img/agents/agent3.jpg"),
            require("../img/agents/agent4.jpg"),
            require("../img/agents/agent5.jpg"),
            require("../img/agents/agent6.jpg"),
            require("../img/agents/agent7.jpg"),
            require("../img/agents/agent8.jpg"),
            require("../img/agents/agent9.jpg")
        ]
    };

    let galleryHtml = _.template(require("html-loader!../html/gallery.html"))(gallery);
    document.getElementById('content').innerHTML = galleryHtml;

}

function renderManagersGallery() {
    require('../scss/gallery.scss');
    let gallery = {
        title: "The best managers",
        items: [
            require("../img/manager/1.jpg"),
            require("../img/manager/2.jpg"),
            require("../img/manager/3.jpg"),
            require("../img/manager/4.jpg"),
            require("../img/manager/5.jpg"),
            require("../img/manager/6.jpg"),
            require("../img/manager/7.jpg"),
            require("../img/manager/8.jpg"),
            require("../img/manager/9.jpg")
        ]
    };

    let galleryHtml = _.template(require("html-loader!../html/gallery.html"))(gallery);
    document.getElementById('content').innerHTML = galleryHtml;

}

function renderMailboxPage(database,person) {

    // "type": "Message",
    // "from": "john.smith@test.tt",
    // "to": "ethan.hunt@test.tt",
    // "subject": "Mission created: Mission 1",
    // "body": "Find mission details:<br/>Get important document from NATA office<br/><a href='#'>Open task</a>",
    // "status": "unread",
    // "taskid": "36dh5sec7zdj90sk2rx7pjswi2"
    let columns = [{
            name: "from",
            title: "From",
            hidden: false,
            format: (x) => `<span>${x}</span>`
        },
        {
            name: "to",
            title: "To",
            hidden: false,
            format: (x) => `<span>${x}</span>`
        },
        {
            name: "subject",
            title: "Subject",
            hidden: false,
            format: (x) => `<span>${x}</span>`
        }, {
            name: "body",
            title: "Body",
            hidden: false,
            format: (x) => `<span>${x}</span>`
        }
    ];

    let contentDiv = document.getElementById('content');
    while (contentDiv.firstChild) contentDiv.removeChild(contentDiv.firstChild)

    require('../scss/table.scss');
    let mails = database.messages.filter((m) => m["to"] == person.email);
    let table = new TableControl(contentDiv, columns, mails);

}

function renderTasksPage(database,person) {
    let tasksTableColumns = [{
            name: "title",
            title: "Title",
            hidden: false,
            format: (x) => `<a href="#" class="table-column-name__link">${x}</a>`
        },
        {
            name: "details",
            title: "Details",
            hidden: false,
            format: (x) => `<span>${x}</span>`
        },
        {
            name: "status",
            title: "Status",
            hidden: false,
            format: (x) => `<span>${x}</span>`
        },
        {
            name: "manager",
            title: "Manager",
            hidden: false,
            format: (x) => `<span>${x}</span>`
        },
        {
            name: "agent",
            title: "Agent",
            hidden: false,
            format: (x) => `<span>${x}</span>`
        },
        //{ name: "actions", title: "", hidden: false, format: (x) => x.getPermissions(currentUser).map((a)=>`<button>${a.icon}</button>`).join("") }
    ];

    let contentDiv = document.getElementById('content');
    while (contentDiv.firstChild) contentDiv.removeChild(contentDiv.firstChild);

    require('../scss/table.scss');
    let tasks = database.tasks.filter((t) => t["agentid"] == person.id || t["managerid"] == person.id);
    let table = new TableControl(contentDiv, tasksTableColumns, tasks);
}

function renderNewTaskPage(database, person){
    let contentDiv = document.getElementById('content');
    contentDiv.innerHTML = require('html-loader!../html/taskedit.html');

    let btnSave = document.getElementById('btnSave')
    for (let link of links) {
        link.onclick = (event) => {
            menuItemClickFunction(event.target.hash)
        };
    }
    
}

function renderContactsPage(){
    require('../scss/contact.scss');
    document.getElementById('content').innerHTML = require('html-loader!../html/contact.html');
}

function Logout() {
    sessionStorage.removeItem('personid');
    return window.location.href = "index.html";
}

export default {
    renderAgentsGallery: renderAgentsGallery,
    renderManagersGallery: renderManagersGallery,
    renderMailboxPage: renderMailboxPage,
    renderTasksPage: renderTasksPage,
    renderNewTaskPage: renderNewTaskPage,
    renderContactsPage: renderContactsPage,
    Logout: Logout
};