function move(DOM,target,attr){
		clearInterval(DOM.timer)
		DOM.timer=setInterval(function(){
   		var iNow=parseInt(getComputedStyle(DOM,null)[attr])

		var speed=(target-iNow)/10
			speed=speed>0 ? Math.ceil(speed) : Math.floor(speed)
			if(target==iNow){
				clearInterval(DOM.timer)
			}else{
				DOM.style[attr]=iNow+speed+"px"
			}
		},50)
	}


