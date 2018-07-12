// todo: make better solution with "type" 

function DBObject(){}
DBObject.prototype.constructor = DBObject;
DBObject.prototype.newid = function(){ return ""};

function Person(name, surname, email, login, passwordhash)
{
	this.id = this.newid(); //"nvcjf1hs7tf8yyk4lmlijqkuo9";
	this.name = name;
	this.surname = surname;
	this.email = email;
	this.login = login;
	this.passwordhash = passwordhash;
}
Agent.prototype = Object.create(DBObject.prototype);
Person.prototype.constructor = Person;
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
Task.prototype.constructor = Task;
Task.prototype.getPermissions = function(user){ }

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
Message.prototype.constructor = Message;