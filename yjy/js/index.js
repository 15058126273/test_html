$(function(){
		var num = $(".css3").length,//九宫背景图数量
		runSpeed = 1000,//九宫图循环速度
		x = 0,//九宫图下标
		sign = 0,//九宫图速度变化方式 0：减慢   1：加快
		i = 0,//点击次数
		wh = 0;//爱心宽度/高度
		
		//九宫背景图滚动
		setTimeout(timeGoing,runSpeed);
		function timeGoing(){
			var obj = $(".now_border");
			x = parseInt($(obj[0]).attr("index")) + 1;
			x = x==num?0:x;
			$(".css3").removeClass("now_border");
			$(".css3[index="+x+"]").addClass("now_border");
			if(sign == 0){
				if(runSpeed > 40){
					runSpeed = runSpeed - 40;
				}else{
					sign = 1;
				}
			}else if(runSpeed <1000){
				runSpeed = runSpeed + 40;
			}else{
				sign = 0;
			}
			setTimeout(timeGoing,runSpeed);
		}
		
		//点击页面出现爱心
		document.onmousedown=function showLove(ev){
			i++;
			wh = Math.floor(Math.random()*80+20);
			var oEvent=ev||event||window.event;
			var oLeft=oEvent.clientX;
			var oTop=oEvent.clientY;
			if(oEvent.button == "2"){  
				$("#clickLove").append("<div class=\"css9\" id=\"showImg_"+i+"\" style=\"background:url('image/love2.png');background-size:100% 100%; \"></div>");
	        } else if(oEvent.button == "0"){
				$("#clickLove").append("<div class=\"css9\" id=\"showImg_"+i+"\" style=\"background:url('image/love.png');background-size:100% 100%; \"></div>");
	        } 
			$("#showImg_"+i).css({"top":(oTop-wh/2)+"px","left":(oLeft-wh/2)+"px","width":wh+"px","height":wh+"px","line-height":wh+"px","font-size":wh/5+"px"});
			$("#showImg_"+i).fadeIn(500,function(){
				$(this).fadeOut(2000,function(){
					$(this).remove();
				});
			});
		}
		
        //平台、设备和操作系统
        var system = {win: false,mac: false,xll: false,ipad:false};
        //检测平台
        var p = navigator.platform;
        system.win = p.indexOf("Win") == 0;
        system.mac = p.indexOf("Mac") == 0;
        system.xll = (p == "X11") || (p.indexOf("Linux") == 0);
        system.ipad = (navigator.userAgent.match(/iPad/i) != null)?true:false;
        //如果是手机访问就将歌词面板定位到手机上边
        if (!system.win && !system.mac && !system.xll && !system.ipad) {
 			$(".lyrTex").css({"top":"50px","left":"50%","margin-left":"-200px"});
        }
        var winH = window.screen.height;
        var lrcH = $("#lrctextId").height();
        $("#lrctextId").css("top",(winH/2-lrcH)+"px");
	})


 var o="color:purple";
 console.log("%c                     *oooooooooooooooooooo*                                                                ",o),
 console.log("%c                  *oooooooooooooooooooooooooo*                                                                 ",o),
 console.log("%c                *oooooooooooooooooooooooooooooo*                                                                    ",o),
 console.log("%c              *oooooooooooooooooooooooooooooooooo*                                                                                     ",o),
 console.log("%c             *oooooooooooooooooooooooooooooooooooo*                                                                                              ",o),
 console.log("%c            *oooooooooooooooooooooooooooooooooooooo*                                                                                                        ",o),
 console.log("%c           *oooooooooooooooooooooooooooooooooooooooo*                                                                                                                          ",o),
 console.log("%c          *oooooooooooooooooooooooooooooooooooooooooo*                                                                                                                           ",o),
 console.log("%c          *oooooooooooooooooooooooooooooooooooooooooo*                                                                                                                          ",o),
 console.log("%c           *oooooooooooooooooooooooooooooooooooooooo*                                                                                                                             ",o),
 console.log("%c             *oooooooooooooooooooooooooooooooooooo*                                                                                                                                                                                                                                     ",o),
 console.log("%c                *oooooooooooooooooooooooooooooo*                                                                                                                            ",o),
 console.log("%c                   *oooooooooooooooooooooooo*                                                                                                                            ",o),
 console.log("%c                      *oooooooooooooooooo*                                                                                                                            ",o),
 console.log("%c                          *oooooooooo*                                                                                                                               ",o),
 console.log("%c                            *oooooo*                                                                                                                                  ",o),
 console.log("%c                             *oooo*                                                                                                                                  ",o),
 console.log("%c                              *oo*                                                                                                                                        ",o),
 console.log("%c                               **                                                                                                                                   ",o),
 console.log("%c                               **                                                                                                                                        ",o),
 console.log("%c                               **                                                                                                                                        ",o),
 console.log("%c                               **                                                                                                                                        ",o),
 console.log("%c                               **                                                                                                                                        ",o),
 console.log("%c                               **                                                                                                                                        ",o),
 console.log("%c                              *oo*                                                                                                                                       ",o),
 console.log("%c                            *oooooo*                                                                                                                                     ",o),
 console.log("%c                      *oooooooooooooooooo*                                                                                                                               ",o)