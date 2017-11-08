define(["jquery-1.8.3.min"],function($){
	var timer=null,
		index=0,
		len=$(".carousel li").length,
		w= $('.carousel li').width();
	function Carousel(){
		$('.men').find('label').eq(0).stop().animate({'width':50},2000,function(){
		      $(this).css({'width':0});
		});
		timer=setInterval(function(){
			if($(".carousel").is(":animated")) return;
				index++;
				if(index>len-1){
				$(".carousel li:first").clone().appendTo(".carousel");
				$(".carousel").stop().animate({"marginLeft":-index*w},800,function(){
					$(".carousel li:last").remove();

					$(".carousel").css("marginLeft",0);
				})
				index = 0;
				$('.men').find('label').eq(0).stop().animate({'width':50},2000,function(){
		      			$(this).css({'width':0});
				});
				}else{
					$(".carousel").stop().animate({"marginLeft":-index*w},800);
					$('.men').find('label').eq(index).stop().animate({'width':50},2000,function(){
		      			$(this).css({'width':0});
					});

				}

		},2000)
	}
	$("#banner").on("mouseover",function(){
		clearInterval(timer);
	}).on("mouseout",function(){
		Carousel();
	})
	return {
		Carousel:Carousel,
	}
})