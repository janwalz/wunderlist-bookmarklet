/**
* Wunderlist bookmarklet
*
* add items to wunderlist from your iOS browser
**/
javascript: function wunderbar() {  	
    var host = 'https://www.wunderlist.com/#/extension/add/';
	
	var h = 600;
	var w = 300;
	var left = (screen.width/2)-(w/2);
	var top = (screen.height/2)-(h/2);
			
	var url = encodeURIComponent(document.location.href + ' – added from my mobile');
	var title = encodeURIComponent(document.title);
	
	var wunderlist = window.open(host+title+'/'+url, 'wunderlist', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
	wunderlist.focus();
	return false;	
    
}
wunderbar();
void 0
