let Bread = document.querySelector('.Bread');
a = 0;

Bread.onclick = function () {
    if (a<20) {
        a++;
        document.querySelector('.PochitaText').textContent = "Почита съел вот столько ломтиков хлеба с джемом: "+a+"! :)";
    }
    else {
        document.querySelector('.PochitaText').textContent = "Вы накормили Почиту! Спасибо <3";
    }
}

$(document).ready(function() {

	/* This is basic - uses default settings */
	
	$("a#single_image").fancybox();
	
	/* Using custom settings */
	
	$("a#inline").fancybox({
		'hideOnContentClick': true
	});

	/* Apply fancybox to multiple items */
	
	$("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
	
});