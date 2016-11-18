function main(){

	$('.accordion').hide();
	$('.accordion').fadeIn(1000);
	$('.expandable').hide();
	$('.accordion').on('click', function(){
		$(this).next().slideToggle(400);
	});
}

$(document).ready(main);