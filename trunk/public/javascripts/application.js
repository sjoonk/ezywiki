// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

// Unescape HTML entities
String.prototype.unescapeHtmlEntities = function () {
	try{
		var temp = document.createElement('textarea');
    temp.innerHTML = this;
    return temp.value;
	}catch(e){
		return this;
	}
}

$(document).ready(function() {
	// $.ajaxSetup({ data: { authenticity_token: encodeURIComponent(AUTH_TOKEN) }});
	// $('.rounded').parent().css('background-color', '#fff').end().corner(); // http://www.methvin.com/jquery/jq-corner.html
});
