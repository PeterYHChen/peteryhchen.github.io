// Jquery with no conflict
jQuery(document).ready(function($) {

	// hide messages 
	$("#error").hide();
	$("#sent-form-msg").hide();
	
	// on submit...
	$("#contact-form #submit").click(function() {
		$("#error").hide();
		
		//required:
		var email = $("input#email").val();
		if(email == ""){
			$("#error").fadeIn().text("Email required");
			$("input#email").focus();
			return false;
		}
		
		var subject = $("input#subject").val();
		if(subject == ""){
			$("#error").fadeIn().text("Subject required");
			$("input#subject").focus();
			return false;
		}
		
		var comments = $("#comments").val();
		
		// send mail php
		var sendMailUrl = $("#sendMailUrl").val();
		
		var to = $("#to").val();
		var from = $("#from").val();
		var dataString = 'name='+ name
						+ '&email=' + email   
						+ '&subject=' + subject  
						+ '&comments=' + comments
						+ '&to=' + to
						+ '&from=' + from;						         

		$.ajax({
			type:"POST",
			url: sendMailUrl,
			data: dataString,
			success: success()
		});
	});  
		
		
	 function success(){
	 	$("#sent-form-msg").fadeIn();
	 	$("#contact-form").fadeOut();
	 }
	
    return false;
});

