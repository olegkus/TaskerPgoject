
function TableControl(parentContainer, columns, data, rowsOnPage = 10)
{	
	this.columns = columns;
	this.data = data;
	this.rowsOnPage = rowsOnPage;
	this.currentPage = 1;
	
	this.tableContainer = document.createElement('table');
	this.tableContainer.classList.add('data-table')	
	
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

TableControl.prototype.renderHeader = function(){ 

	var tds = this.columns.map((column) => `<td class="row-table">${column.title}</td>`).join('');
	this.tableHeader.innerHTML = `<tr class="row-table">${tds}</tr>`;

}

TableControl.prototype.renderPage = function(page){ 
	var pageData = this.data.slice((page-1)*this.rowsOnPage, page*this.rowsOnPage);
	var rows = [];
	for(var obj of pageData){
		var tds = this.columns.map((column)=>`<td>${column.format(obj[column.name])}</td>`).join('');
		rows.push(`<tr class="row-table">${tds}</tr>`);
	}
	this.tableBody.innerHTML = rows.join('');
}

TableControl.prototype.renderFooter = function(){ 
	var pages = []; 
	for(var p = 1; p<= Math.ceil(this.data.length/this.rowsOnPage); p++){
		pages.push(p);
	}
	let phtml = pages.map((p)=>`<a href="#" class="page_number">${p}</a>`);
	this.tableFooter.innerHTML = `<tr class="row-table"><td colspan='${this.columns.length}'>${phtml.join(' | ')}</td></tr>`;

	let links = this.tableFooter.querySelectorAll('.page_number');
	for (let link of links) {
		link.onclick = (event) => {
			this.renderPage(event.target.innerHTML)
		};
	}
}

export default TableControl;