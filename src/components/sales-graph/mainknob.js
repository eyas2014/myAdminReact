define(['../node_modules/jquery-knob/js/jquery.knob.js'], function(){
	console.log($);
	$('.knob').knob({
			angleOffset:30,	
			fgColor: 'red',
			angleArc: 100
			});

//<input type="text" class="knob" data-readonly="true" value="20" data-width="60" data-height="60"
//                         data-fgColor="#39CCCC">


});