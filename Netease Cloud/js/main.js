define(["jquery-1.8.3.min","topHover","banner","fadeInOut","centerMagnify","TopCarousel","sidebar"],function($,topHover,banners,fadeInOut,centerMagnify,TopCarousel,sidebar){
	//顶部划过效果
	topHover.Thover();
	//轮播图
	banners.Carousel();
	//小轮播图
	fadeInOut.fadeInOut();
	TopCarousel.TopCarousel();
	//引入中心放大图片
	centerMagnify.Magnify();
	//侧边栏
	sidebar.sidebar();
})