define(["jquery-1.8.3.min"],function($){
	var index=0,
	timer=null,
	length=$("#ba_list li").length,
	h=$("#ba_list li").height(),
	he=$(".top_rhizine_ul li").height();
	function TopCarousel(){
		timer=setInterval(function(){
			index++;

			if(index>length-1){

				$("#ba_list li").slice(0,1).clone().appendTo("#ba_list");
				$("#ba_list").stop().animate({"marginTop":-index*h},1500,function(){
					$("#ba_list li").slice(-1).remove();
					$("#ba_list").css("margin-top",0);

				})
				$(".top_rhizine_ul li").slice(0,1).clone().appendTo(".top_rhizine_ul");
				$(".top_rhizine_ul").stop().animate({"marginTop":-index*he},1500,function(){
					$(".top_rhizine_ul li").slice(-1).remove();
					$(".top_rhizine_ul").css("margin-top",0);

				})
				index=0;
			}else{
				$("#ba_list").stop().animate({"marginTop":-index*h},1500)
				$(".top_rhizine_ul").stop().animate({"marginTop":-index*he},1500)
			}



		},2000)
	}
	$(".top_rhizine").on("mouseover",function(){
		clearInterval(timer);
	}).on("mouseout",function(){
		TopCarousel();
	})
	return {
		TopCarousel:TopCarousel
	}
})