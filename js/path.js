$(function(){
	$('.path_item').each(function(){
		var $circle = $(this).find('.path_circle:first');
		var $container = $(this).find('.path_img_container:first');

		$circle.hover(function(){
			$container.show();
		},function(){
			$container.hide();
		});
	});
	
});
