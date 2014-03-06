//the require library is configuring paths
require.config({
	paths: {
		"jquery": "pub/js/libs/jquery/dist/jquery.min"
	},
	//how long the it tries to load a script before giving up, the default is 7
	waitSeconds: 10
});

//requiring the scripts in the first argument and then passing the library namespaces into a callback
//you should be able to console log all of the callback arguments
require(['jquery'], function(jquery, App){
	// new App;
	$('body').append('<h1>YAY!</h1>');
	console.log('jasdddsdsdsdsdfdfssdsdfdfdffsdfdfdssddm');
});