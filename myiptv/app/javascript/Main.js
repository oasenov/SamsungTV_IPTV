var widgetAPI = new Common.API.Widget();
var tvKey = new Common.API.TVKeyValue();
var pluginAPI = new Common.API.Plugin();

var Main =
{

};

// put this into channels.js  (and host channel.js on your web server, see index.html)
var channelList = 
		 [
			{name:'ABC News', url:'http://abclive.abcnews.com/i/abc_live4@136330/index_1200_av-b.m3u8'},
			{name:'Euro news', url:'http://ewns-hls-b-cdn.hexaglobe.net/1259b4185677ea20e8736c0f0182e14a/58fc8503/euronews_eng.smil/playlist.m3u8'}
		 ];	

Main.onLoad = function()
{
	// Enable key event processing
	this.enableKeys();
	widgetAPI.sendReadyEvent();
	window.onShow = onShowEvent;
};

var onShowEvent = function() {
	var nnaviPlugin = document.getElementById('pluginObjectNNavi');
	 nnaviPlugin.SetBannerState(1);

	 // For volume OSD
	 pluginAPI.unregistKey(tvKey.KEY_VOL_UP);
	 pluginAPI.unregistKey(tvKey.KEY_VOL_DOWN);
	 pluginAPI.unregistKey(tvKey.KEY_MUTE); 
	  
	 sPlayer.init();
	
	setTimeout(function(){
			sPlayer.gotoChannel(0);
	}, 1000);
};

Main.onUnload = function()
{
	
};

Main.enableKeys = function()
{
	document.getElementById("anchor").focus();
};

Main.keyDown = function()
{
	var keyCode = event.keyCode;
	//console.log("Key pressed: " + keyCode);
	switch(keyCode)
	{
		case tvKey.KEY_RETURN:
		case tvKey.KEY_PANEL_RETURN:
			widgetAPI.sendReturnEvent();
			break;
		case tvKey.KEY_UP:
			break;
		case tvKey.KEY_DOWN:			
			break;
		case tvKey.KEY_ENTER:
		case tvKey.KEY_PANEL_ENTER:			
			break;
		case tvKey.KEY_CH_UP:
			sPlayer.channelUp();
			break;
		case tvKey.KEY_CH_DOWN:
			sPlayer.channelDown();
			break;		
		case tvKey.KEY_0:
			sPlayer.gotoChannel(0);
			break;
		case tvKey.KEY_1:
			sPlayer.gotoChannel(1);
			break;
		case tvKey.KEY_2:
			sPlayer.gotoChannel(2);		
			break;
		case tvKey.KEY_3:
			sPlayer.gotoChannel(3);
			break;
		case tvKey.KEY_4:
			sPlayer.gotoChannel(4);
			break;
		case tvKey.KEY_5:
			sPlayer.gotoChannel(5);
			break;
		case tvKey.KEY_6:
			sPlayer.gotoChannel(6);
			break;
		case tvKey.KEY_7:
			sPlayer.gotoChannel(7);
			break;
		case tvKey.KEY_8:
			sPlayer.gotoChannel(8);
			break;
		case tvKey.KEY_9:
			sPlayer.gotoChannel(9);
			break;
		default:
			alert("Unhandled key");
			break;
	}
};
