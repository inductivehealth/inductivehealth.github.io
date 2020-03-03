$(function(){
	$("#ContactForm").submit(function(){
		
		
		Tawk_API.maximize();

		/* //MVP
		
		alert( 'Thank you for reaching out!' );
		var form = document.querySelector('form');
		form.submit(); */
		
		
		
		
		
		/* $("#submitf").value='Please wait...';
		
		alert( 'Hello everyone!' );
		var form = document.querySelector('form');
		var data = new FormData(form);
		var req = new XMLHttpRequest();
		req.open(form.method, form.action);
		req.send(data); */
		
		
	/* 	req.onload = function() {
		  if (req.status != 200) { // analyze HTTP status of the response
			// if it's not 200, consider it an error
			alert(req.status + ': ' + xhr.statusText); // e.g. 404: Not Found
		  } else {
			// show the result
			$("#message_post").html("<div class='successMessage'>Your message has been sent successfully!</div>"); 
				$("#submitf").value='Send >>';
		  }
		}; */

				
		/* $.post("https://formspree.io/xkvwnkbm", $("#ContactForm").serialize(),
		function(data){
			if(data.frm_check == 'error'){ 
			
					$("#message_post").html("<div class='errorMessage'>ERROR: " + data.msg + "!</div>"); 
					document.ContactForm.submitf.value='Resend >>';
					document.ContactForm.submitf.disabled=false;
			} else {
				$("#message_post").html("<div class='successMessage'>Your message has been sent successfully!</div>"); 
				$("#submitf").value='Send >>';
				}
		}, "json"); */
		
		return false;
		
	});
});