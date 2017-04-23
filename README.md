# SamsungTV IPTV

This was my personal hobby that i enjoy over the last 5 years, watching many global free TV channels.

Code should be working fine on Samsung TVs,  model  (2011?), 2012, 2013 and hopefully onwards.

## How to Deploy on the TV

### Via USB
With this method you need put the widget folder, in that case 'myiptv' onto a USB stick
then plug it to the TV and wake you TV up (if you TV is already running you need to power off/on).
* launch your smart apps
* go to apps-> more apps
* there you should see your new widget

Unfortunately with this method you don't really install the widget on the TV, it always resides on the USB. 
When you power off/on your TV you always need to launch smart app, go to apps, more apps etc. 

### Via network installation
This method is the best if you really want to get the app installed on your TV. once it is installed/used, your app will appear in recently used apps, so that whenever you open your TV, with a single button click (smart hub) you can just launch it.

Here are the steps 

* make sure you have a web server on your local network, and on the root of it you have 'widgetlist.xml' file
* on your TV login as 'develop', press Menu->Smart Features -> Samsung Account -> Log in
* As Email just type 'develop'  and press Log in  button (don't need to fill anything else), 
* Open smart hub -> apps -> More Apps,  on the top right select 'Options'
* From IP Settings, set your web server IP Address , ie: 192.168.0.16 in my case
* Again from Options Select 'Start App Sync'

Above steps will trigger app installation, basically TV will download your widgetlist.xml ie: http://192.168.0.16/widgetlist.xml
parse the content of it, and download and install each individual widget, in our case it is http://192.168.0.16/myiptv.zip

myiptv.zip is the content of 'myiptv' folder in this project

** Notes: **
There shouldn't any legal problem using free to air, online available live TV streams, here i have give to example channels in the channelList in Main.js, they are 'ABC news' and 'Euro News' for flexibility i would host this channel list on a different web server, so that you don't need to edit code, but just change channel URL if existing ones does not work, or simply add as many channels as possible.

when running the app on the TV, you will not see a fancy UI, but only 0-9 digit entry for tuning, and CH +/-. it simply does the job, you enjoy your full screen TV.

There are many ways you can also hack some key protected streams, or some streams may require only certain user agents etc.. all these topics are out of our scope :) and anything else you do it on your own risk.