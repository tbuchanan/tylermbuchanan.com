// $(document).ready(function(){

	// scroll on click functionality
	var $root = $('html, body');
	$('a').click(function() {
	    $root.animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 450);
	    return false;
	});
	
	// animation for about me section
	$('#anchor1').click(function(){
		animationClick('#me', 'swing');
	});

	// animation for portfolio section
	$('#anchor2').click(function(){
		animationClick('.header-17-sub.text-center', 'pulse');
	});	

	// animation for contact section
	$('#anchor3').click(function(){
		animationClick('.row.text-center', 'flip');
	});
	
	function animationClick(element, animation){
	  var element = $(element);
	  	element.addClass('animated ' + animation);
	  	//wait for animation to finish before removing classes
	  	window.setTimeout( function(){
	  	    element.removeClass('animated ' + animation);
	  	}, 3000);	
	}

//document.ready end
// });