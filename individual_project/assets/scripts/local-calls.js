/*global $*/
// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      name: "required",
      email: {
        required: true,
        email: true
      },
      phone: "required",
      character: "required",
      design: "required",
      color: "required",
      add_info: "required",
      cc_num: "required"
    },
    // Specify validation error messages
    messages: {
      name: "Please enter your name",
      email: "Please enter a valid email address",
      phone: "Please enter a valid phone number",
      character: "Please select type of character",
      design: "Please select a design",
      color: "Please select a color",
      add_info: "Please enter additional character information",
      cc_num: "Please enter your credit card number"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});

$(document).ready(function() {
    $('.chibi').cycle({
		fx: 'shuffle' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});
	
});

$(document).ready(function() {
    $('.bw').cycle({
		fx: 'shuffle' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});
	
});

$(document).ready(function() {
    $('.base').cycle({
		fx: 'shuffle' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});
	
});

$(document).ready(function() {
    $('.cell').cycle({
		fx: 'shuffle' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});
	
});

$(document).ready(function() {
    $('.soft').cycle({
		fx: 'shuffle' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});
	
});