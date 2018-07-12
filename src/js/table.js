

function Table(parentContainer, caption, columns, data, rowsOnPage = 10)
{	
	this.columns = columns;
	this.data = data;
	this.rowsOnPage = rowsOnPage;
	this.currentPage = 1;
	
	this.tableContainer = document.createElement('table');
	this.tableContainer.innerHTML = `<caption>${caption}</caption>`;	
	
	this.tableHeader = document.createElement('thead');
	this.tableFooter = document.createElement('tfoot');
	this.tableBody = document.createElement('tbody');
	
	this.tableContainer.appendChild(this.tableHeader);
	this.tableContainer.appendChild(this.tableFooter);
	this.tableContainer.appendChild(this.tableBody);
	
	parentContainer.appendChild(this.tableContainer);
	 
	this.renderHeader();
	this.renderFooter();
	this.renderPage(this.currentPage);	 
}

Table.prototype.renderHeader = function(){ }
Table.prototype.renderPage = function(page){ 
	var pageData = this.data.slice((page-1)*this.rowsOnPage, page*this.rowsOnPage);
	var rows = [];
	for(var obj of pageData){
		var tds = this.columns.map((column)=>`<td>${column.format(obj[column.name])}</td>`).join('');
		rows.push(`<tr>${tds}</tr>`);
	}
	this.tableBody.innerHTML = rows.join('');
}

Table.prototype.renderFooter = function(){ 
	var pages = []; 
	for(var p = 1; p<= Math.ceil(this.data.length/this.rowsOnPage); p++){
		pages.push(p);
	}
	var phtml = pages.map((p)=>`<a href="#" onclick="table.renderPage(${p})">${p}</a>`);
	this.tableFooter.innerHTML = `<tr><td colspan='${this.columns.length}'>${phtml.join(' | ')}</td></tr>`;
}