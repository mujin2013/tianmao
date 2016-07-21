(function(){
	/*----------------页面顶部的功能函数-------------------------*/
	//显示列表区域
	//elem1:三级结构的父容器
	//elem2:三级结构的触发元素
	//elem3:三级结构的目标元素
	function showListArea(elem1,elem2,elem3){
		elem1.style.cssText='border-left:#eee solid 1px;border-right:#eee solid 1px;';//批量操作样式
		elem2.style.cssText='background:#FFF url("images/up_03.gif") right center no-repeat';
		elem3.style.display='block';
	}
	//隐藏列表区域
	//elem1:三级结构的父容器
	//elem2:三级结构的触发元素
	//elem3:三级结构的目标元素
	function hideListArea(elem1,elem2,elem3){
		elem1.style.cssText='';//批量操作样式
		elem2.style.cssText='background:#f2f2f2 url("images/down_03.gif") right center no-repeat';
		elem3.style.display='none';
	}

	//我的淘宝
	var myBabyBox=document.querySelector('.header-nav>li:first-child');
	var myBabyTxt=document.getElementsByClassName('header-my-baby')[0];
	var relBaby=document.getElementsByClassName('rel-baby')[0];
	myBabyBox.onmouseover=function(){
		showListArea(myBabyBox,myBabyTxt,relBaby);
	};
	myBabyBox.onmouseout=function(){
		hideListArea(myBabyBox,myBabyTxt,relBaby);
	};
	//收藏夹
	var myCollBox=document.querySelector('.header-nav>li:nth-child(4)');
	var myCollTxt=document.getElementsByClassName('header-coll')[0];
	var relColl=document.getElementsByClassName('rel-coll')[0];
	myCollBox.onmouseover=function(){
		showListArea(myCollBox,myCollTxt,relColl);
	};
	myCollBox.onmouseout=function(){
		hideListArea(myCollBox,myCollTxt,relColl);
	};
	//商家支持
	var myShopBox=document.querySelector('.header-nav>li:nth-child(8)');
	var myShopTxt=document.getElementsByClassName('header-shop')[0];
	var relShop=document.getElementsByClassName('rel-shop')[0];
	myShopBox.onmouseover=function(){
		showListArea(myShopBox,myShopTxt,relShop);
	};
	myShopBox.onmouseout=function(){
		hideListArea(myShopBox,myShopTxt,relShop);
	};
	//网站导航
	var myWebNavBox=document.querySelector('.header-nav>li:last-child');
	var myWebNavTxt=document.getElementsByClassName('header-web-nav')[0];
	var relWebNav=document.getElementsByClassName('rel-web-nav')[0];
	var webNavIcon=document.querySelector('.header-web-nav>s');
	myWebNavBox.onmouseover=function(){
		showListArea(myWebNavBox,myWebNavTxt,relWebNav);
		webNavIcon.style.background="url('images/webNav_03.gif') center center no-repeat";
	};
	myWebNavBox.onmouseout=function(){
		hideListArea(myWebNavBox,myWebNavTxt,relWebNav);
		webNavIcon.style.background="url('images/web-nav_10.gif') center center no-repeat";
	};
	//手机版
	var phoneBox=document.querySelector('.header-nav>li:nth-child(5)');
	var triPoint=document.getElementsByClassName('tri-point')[0];
	var erweimaBbox=document.getElementsByClassName('erweima-box')[0];
	phoneBox.onmouseover=function(){
		triPoint.style.display='block';
		erweimaBbox.style.display='block';
	};
	phoneBox.onmouseout=function(){
		triPoint.style.display='none';
		erweimaBbox.style.display='none';
	};
})();