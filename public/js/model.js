/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports) {

// todo: make better solution with "type" 

function DBObject() {}
DBObject.prototype.constructor = DBObject;
DBObject.prototype.newid = function () {
	return "";
};

function Person(name, surname, email, login, passwordhash) {
	this.id = this.newid(); //"nvcjf1hs7tf8yyk4lmlijqkuo9";
	this.name = name;
	this.surname = surname;
	this.email = email;
	this.login = login;
	this.passwordhash = passwordhash;
}
Agent.prototype = Object.create(DBObject.prototype);
Person.prototype.constructor = Person;
Person.prototype.getFullName = function () {
	return this.name + ' ' + this.surname;
};

function Agent() {
	Person.apply(this, arguments);
	this.type = "Agent";
}
Agent.prototype = Object.create(Person.prototype);
Agent.prototype.constructor = Agent;

function Manager() {
	Person.apply(this, arguments);
	this.type = "Manager";
}
Manager.prototype = Object.create(Person.prototype);
Manager.prototype.constructor = Manager;

function Task(title, details, managerid, agentid) {
	this.type = "Task";
	this.id = this.newid(); //"36dh5sec7zdj90sk2rx7pjswi2";
	this.title = title;
	this.details = details;
	this.status = "new";
	this.managerid = managerid;
	this.agentid = agentid;
}
Task.prototype.constructor = Task;
Task.prototype.getPermissions = function (user) {};

function Message(from, to, task, actionName) {
	this.type = "Message", this.from = from, this.to = to, this.subject = `${actionName}: ${task.title}`, this.body = "Mission details:<br/>${task.details}<br/><a href='#'>Open mission</a>", this.status = "unread"; //"read",
	this.taskid = task.id; // ??
}
Message.prototype.constructor = Message;

/***/ })

/******/ });