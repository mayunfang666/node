define(["jquery-1.8.3.min"],function($){
	function sidebar(){
		$(".auxiliary_box>li").hover(function(){
                $(this).children("#consultTip").show().end().siblings().children("#consultTip").hide();
        },function(){
            $(this).children("#consultTip").hide();
        });
        $("#consultTip").hover(function(){
                $(this).show().siblings().hide();
        },function(){
            $(this).hide();
        });
        $(window).bind("scroll",function(){
			var scrollTop=$(this).scrollTop(),
			height=$(this).height(),
			d_h=$(document).height();
			if(scrollTop>height){
				$(".li_list").show();
			}else{
				$(".li_list").hide();
			}

		})
		$(".li_list").on("click",function(){
			$("body").stop().animate({"scrollTop":0},1000)
		})

	}
	return {
		sidebar:sidebar
	}
})