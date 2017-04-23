# SamsungTV IPTV

this was my personal hobby that i enjoy overthe last 5 years, watching many global free TV channels.

Code should be working fine on SamsungTVs model 2012, 2013 and hopefully onwards.

## How to Deploy on the TV

### Via USB
with this method you need put the widget folder, in that case 'myiptv' onto a USB stick
then plug it to the TV and wake you TV up (if you TV is already running you need to power off/on).
* launch your smart apps
* go to apps-> more apps
* there your should see your new widget

unfortunately with this method you don't really install the widget on the TV, it always resides on the USB. 
when you power off/on your TV you always need to launch smart app, go to apps, more apps etc. 

### Via network installation
this method is the best if you really want to get the app installed on your TV. once it is installed/used, your app will appear in recently used apps, so that whenever you open your TV, with a single button click (smart hub) you can just launch it.

here are the steps 

* make sure you have a web server on your local network, and on the root of it you have 'widgetlist.xml' file
* on your TV login as 'develop', press Menu->Smart Features -> Samsung Account -> Log in
* as Email just type 'develop'  and press Log in  button (don't need to fill anything else), 
* open smart hub -> apps -> More Apps,  on the top right select 'Options'
* from IP Settings, set your web server IP Address , ie: 192.168.0.16 in my case
* again from Options Select 'Start App Sync'

above steps will trigger app installation, basically TV will download your widgetlist.xml ie: http://192.168.0.16/widgetlist.xml
parse the content of it, and dowload and install each individual widget, in our case it is http://192.168.0.16/myiptv.zip

myiptv.zip is the content of 'myiptv' folder in this project