var sPlayer = (function(){
	
	var gAVplayObj = null;
	var currentChannelIndex = 0;
	var timerId = 0;
	
	function callbackSuccess(avplayObj){
		
		gAVplayObj = avplayObj;
		gAVplayObj.init({
			containerID: 'player-container',
			displayRect:{
				width:1280,
				height:720,
				top:0,
				left:0
			},
			playCallback: wrapCallbacks({onerror:playErrorCallback}),
			autoRatio:false
		});
	}
	
	function wrapCallbacks(callbacks) {
	    ///<summary>Wrap supplied callbacks in a logging statement. </summary>
	    for (var name in callbacks) {
	        (function (name, callback) {
	            callbacks[name] = function (value) {
	                value = value || '';
	                !!callback && callback.apply(this, arguments);
	            };
	        })(name, callbacks[name]);
	    }
	    return callbacks;
	}
	
	function callbackError(){
		console.log("Cannot get avplay object : ");
	}
	
	function playSuccessCallback(){
		console.log("play successfull!!..");
		$('#loading').hide();
	}
	
	function playErrorCallback(error){
		console.log("player play error = ", error);
		//if error.code retry to play, code =0 unknown error, 8 object not found, 19 network error!
		if(error.code === 8 || error.code === 19)
			_gotoChannel(currentChannelIndex);
	}
	
	var _init= function(){
		console.log("trying to init the player...");
		webapis.avplay.getAVPlay(callbackSuccess, callbackError);	
	};
	
	var _play = function(url){
		var fullUrl = url.indexOf('.m3u8') >= 0 ? url + "|COMPONENT=HLS" : url;
		console.log("trying to play = " + fullUrl);
		gAVplayObj.stop();
		
		setTimeout(function(){
			gAVplayObj.open(fullUrl);
			gAVplayObj.play(playSuccessCallback, playErrorCallback);
		}, 1000);
	};
	
	var _showChannelName = function(){
		$('#channel-name').html(currentChannelIndex + ". " + channelList[currentChannelIndex].name);
		$('#channel-name').show();
		$('#loading').show();
		if(timerId)
			clearTimeout(timerId);
		timerId = setTimeout(function(){
			$('#channel-name').hide();
		}, 4000);
		
	};
	
	var _gotoChannel = function(index){
		if(index < 0 || index >= channelList.length)
			return;
		currentChannelIndex = index;
		_showChannelName();
		_play(channelList[index].url);
		
	};
	
	var _channelUp = function(){
		currentChannelIndex = ++currentChannelIndex % channelList.length;
		_gotoChannel(currentChannelIndex);
	};
	
	var _channelDown = function(){
		currentChannelIndex = (--currentChannelIndex + channelList.length)   % channelList.length;
		_gotoChannel(currentChannelIndex);
	};
	
	return {
		init		: _init,
		play		: _play,
		gotoChannel	: _gotoChannel,
		channelUp	: _channelUp,
		channelDown	: _channelDown
	};
})();