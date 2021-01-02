$(function() {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
				if(response.messageId != undefined){
					$(formMessages).removeClass('bg-danger');
					$(formMessages).addClass('bg-success');
					// Set the message text.
					$(formMessages).text('메일이 전송되었습니다.');
					// Clear the form.
					$('#name, #email, #message').val('');
				}else{
					$(formMessages).removeClass('bg-success');
					$(formMessages).addClass('bg-danger');
					$(formMessages).text('메일 전송에 실패하였습니다.');
				}
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('bg-success');
			$(formMessages).addClass('bg-danger');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('메일 전송에 실패하였습니다.');
			}
		});

	});

});