define(["jquery-1.8.3.min"],function($){

	function Thover(){

		$("p").on("hover","a",function(){

			$(this).addClass("col").siblings().removeClass("col");
		})
		$(".nav_menu").on("mouseenter","li",function(){
			$(this).find(".son").slideDown();
		}).on("mouseleave","li",function(){
			$(this).find(".son").slideUp();
		})
		$(".son").on("mouseenter",function(){
			$(this).slideDown();
		}).on("mouseleave",function(){
			$(this).slideUp();
		})
	}
	return {
		Thover:Thover
	}
})