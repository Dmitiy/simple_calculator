var matchAction 	= /[\+\-\*\/]+/g;
var matchDigit 		= /\d+/g;
var arrAction 		= [ '+', '-', '*', '/' ];
var Out 			= $('input[name="out"]');
var In  			= $('input[name="in"]');

var	
	arr = [],
	str = '',
	act = '',
	res = 0; 

Out.val(0);
In.val(0);

$('button[data-reset]').on('click', function(){
	In.val(0);
	Out.val(0);
	str = '';
});

$('button[data-result]').on('click', function(){
	var result = eval(str);
	Out.val(result);
});

$('button[data-num]').on('click', function(){
	var $this 	= $(this);
	var num   	= $this.data('num');
	str += num;
	In.val(str);
});

$('button[data-action]').on('click', function(){

	var $this 		= $( this );
	var lastSymbol	= str.slice( -1 );
	var action  	= $this.text();
	
	if ( $.inArray( action, arrAction ) != -1 ) {
		if ( $.inArray( lastSymbol, arrAction ) != -1 ) {

			str = str.slice( 0, -1 ) + action;
		} else if ( lastSymbol  == '' && action != '-' ) {
			
		}
		else if ( lastSymbol == '' && action == '-' ) { 		
			str = '';
		}
		else {
			str = str + action;
		}
		
		In.val(str);
	}

});