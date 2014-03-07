jam
===

Basic front end jams : bower, grunt, less, require, etc ...


SETUP :
=====
- required : node, npm, grunt, bower
- setup node modules : <code>npm install</code>
- bower your libs in there : <code>bower install</code>

DEV :
====
- you'll be working in the pre-pub dir to edit your less and javascript
- optional : get grunt to watch your shit : <code>grunt watch</code> 
	- to stop watching: <code>CNTRL+c</code>
- the grunt tasks will combine and minify the css and js so that they'll be referenced like this :
	<code>pub/css/style.min.css</code>
	<code>pub/js/main.min.js</code>