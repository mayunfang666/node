define(["jquery-1.8.3.min"],function($){

	function Magnify(){
		$(".m_case_row").on("mouseover","li",function(){
			$(this).find("img").show().stop().animate({"width":106,"height":106,"marginLeft":-53,"marginTop":-53},200);
		}).on("mouseout","li",function(){
			$(this).find("img").hide().stop().animate({"width":96,"height":96},200);;
		})
	}
	return {
		Magnify:Magnify
	}
});