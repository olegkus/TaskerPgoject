

function Person(name, surname, email, login, password)
{
	this.id = this.newid(); 
	this.name = name;
	this.surname = surname;
	this.email = email;
	this.login = login;
	this.password = password;
}
Person.prototype.getFullName = function(){ return this.name+' '+this.surname};

function Agent(){
	Person.apply(this, arguments);
	this.type = "Agent"
}
Agent.prototype = Object.create(Person.prototype);
Agent.prototype.constructor = Agent;


function Manager(){
	Person.apply(this, arguments)
	this.type = "Manager"
}
Manager.prototype = Object.create(Person.prototype);
Manager.prototype.constructor = Manager;


function Task(title, details, managerid, agentid){
	this.type = "Task";
	this.id = this.newid(); //"36dh5sec7zdj90sk2rx7pjswi2";
	this.title = title; 
	this.details = details;
	this.status = "new";
	this.managerid = managerid;
	this.agentid = agentid;
}


function Message(from, to, task, actionName)
{
	this.type = "Message",
	this.from = from ,
	this.to = to,
	this.subject = `${actionName}: ${task.title}`,
	this.body = "Mission details:<br/>${task.details}<br/><a href='#'>Open mission</a>",
	this.status = "unread" //"read",
	this.taskid = task.id // ??
}




module.exports = {
	Agent: Agent, 
	Manager: Manager
};