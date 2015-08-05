'use strict';

window.onload = function() { 

var medalDiv = document.getElementById('medalDiv'),
    xhr = new XMLHttpRequest(),
    url = "./olympic.json";

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    var data = xhr.responseText;
	console.dir(data);
    var list = JSON.parse(data);
   	console.dir(list);
    var showRow = tmpl('medalTemplate'),
    	html = '<table>';
    
    for (var i = 0; i < list.length; i++ ) {
      list[i].id = i;
      html += showRow(list[i]);
    }
    html += '</table>';
    console.dir(medalDiv);
    medalDiv.innerHTML = html;

  }
}
xhr.open('GET', url, true);
xhr.send();

};