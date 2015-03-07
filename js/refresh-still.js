$(function(){
	var currTag = "";
	currTag = location.href.substr(location.href.indexOf('#'));

	$("[href=" + currTag + "]").click();
});
