define(["jquery-1.8.3.min"],function($){
	var ind=0,
		timer=null;
	function fadeInOut(){

		var len=$('#ba_img').find('li').length;

		timer=setInterval(function(){
			ind++;
			if(ind>len-1){
				ind=0;
			}
			$('#ba_img li').eq(ind).fadeIn(1000).siblings().fadeOut(1000);
			$("#ol_list li").eq(ind).addClass("bgs").siblings().removeClass("bgs");
		},2000);

	}
	$(".bannerbox").on("mouseover",function(){
			clearInterval(timer);
		}).on("mouseout",function(){
			fadeInOut();
		})
	return {
		fadeInOut:fadeInOut
	}
})