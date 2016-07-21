(function(){
	/*----------------------------轮播图部分商品导航栏的js-----------------------------*/
	// 获取相关的元素
	var navs=document.querySelectorAll('.trade-nav>li>a');

	for(var i=1;i<navs.length;i++){
		navs[i].timer=null;
		navs[i].onmouseover=function(){
			animateCat(this.parentNode.childNodes[1],-14,15);
		};
		navs[i].onmouseout=function(){
			animateCat(this.parentNode.childNodes[1],0,6);
		};
	}

	//使小猫缓慢出现
	function animateCat(elem,aimValue,animateTime){
		clearInterval(elem.timer);//清除已存在的定时器
		var oldTop=parseInt(elem.offsetTop);//获得小猫的top值
		var speed=0;
		if(aimValue>oldTop){
			speed=1;
		}else{
			speed=-1;
		}
		elem.timer=setInterval(function(){
			var curTop=parseInt(elem.offsetTop);
			if(curTop==aimValue){
				clearInterval(elem.timer);
			}else{
				curTop+=speed;
				elem.style.top=curTop+'px';
			}
		},animateTime);
	}

	/*-----------------------------实现图片轮播的js-----------------------------------*/
	var container=document.getElementById('container');
	var list=document.getElementById('list');
	var buttons=document.getElementById('buttons').getElementsByTagName('i');
	var imgWidth=document.getElementById('list').getElementsByTagName('img')[0].clientWidth;//获得图片的宽
	var index=1;//用来保存当前显示的是第几幅图片
	var timer;

	//高亮显示小圆圈
	function heightCircle(){
		//清除原来的高亮状态
		for(var i=0;i<buttons.length;i++){
			if(buttons[i].className=='curShow'){
				buttons[i].className='';
				break;
			}
		}
		buttons[index-1].className='curShow';
	}

	//图片自动轮播
	function autoPlay(){
		timer=setInterval(function(){
			animate(-imgWidth);
		},3000);
	}

	//图片停止轮播
	function stopPlay(){
		clearInterval(timer);
	}

	//图片切换
	function animate(offset){
		var newLeft=list.offsetLeft+offset;
		list.style.left=newLeft+'px';
		if(newLeft<-5*imgWidth){
			//当显示到第一张图的辅助图上时，立刻切回到真正的第一张图上
			list.style.left=0;
		}
		index++;
		if(index>6){
			index=1;
		}
		heightCircle();	
	}

	//给相关元素添加事件
	container.onmouseover=function(){
		 stopPlay();
	};
	container.onmouseout=function(){
		 autoPlay();
	};
	//为6个小圆圈绑定事件
	for(var i=0;i<buttons.length;i++){
		buttons[i].onclick=function(){
			if(this.className=='curShow'){
				return;
			}
			var myIndex=this.getAttribute('index');//获得当前点击的是第几个按钮
			var offset=-(myIndex-index)*imgWidth;
			animate(offset);
			index=myIndex;
			heightCircle();
		};
	}
	autoPlay();
	/*--------------------------给商品分类加js------------------------------------*/
	var tradsSpec=document.querySelectorAll('.trade-specfic');
	var tradeName=document.querySelectorAll('.trade-container>li');
	//清除原来显示的商品详情信息
	function clearTradeSpec(){
		for(var i=0;i<tradsSpec.length;i++){
			if(tradsSpec[i].id=='showSpec'){
				tradsSpec[i].id='';
				break;
			}
		}
	}
	
	for(var i=0;i<tradeName.length;i++){
		tradeName[i].onmouseover=function(){
			clearTradeSpec();
			this.children[1].id="showSpec";
			this.style.backgroundColor='#FFF'
		};
		tradeName[i].onmouseout=function(){
			this.children[1].id="";
			this.style.backgroundColor='#D0C7C7';
		};
	}
})();