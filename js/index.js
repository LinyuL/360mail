$(function(){
	/*var inner=$(".inner");
	var imgs=$(".inner a");
	console.log(imgs);
	var imgw=imgs.width();
	var first=inner:first-child;
	var index=0;
	var t=setInterval(move,2000);
	function move(){
		inner.animate({marginLeft:-imgw},function(){
			inner:"first-child".appendTo(inner)
		})
	}*/
	/*返回按钮*/
	var back=$(".back");
	console.log(back);
	back.click(function(){
		var docu=document.body.scrollTop?document.body:document.documentElement;
		document.title=docu;
		docu.animate({scrollTop:0});
	})

	var as=$(".foot-menu a");
	as.click(function(){
		var index=$(this).index();
		as.removeClass("hot").eq(index).addClass("hot");
	})

})