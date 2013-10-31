$(document).ready( function () {
	
	window.started = false;  // this variable has been declared to check whether 
	                         // the watch has been started or not
	                         // if this is not used if u keep on pressing the start button
	                         // it will call the setinterval function again and again
	                         // which could lead to faster movement of the seconds 
	var height = $(window).height(); // used to the height of the window
	var width = $(window).width();  
	var myVar= '';          // used to store the variable returned by setinterval 
	
	height = height/2 - parseInt($("#myDiv1").css("height"), 10)/2;    // used to set the div in the center
	$("#mainDiv").css("top", height);
	$("#mainDiv").css("width","100%");
	widht = width/4;       // used to divide the main div to 4 
	
	reset();               // initially reseting the clock
	
	
	$("#myDiv1").css("width", "20%");
	$("#myDiv2").css("width", "20%");
	$("#myDiv3").css("width", "20%");
	$("#myDiv4").css("width", "20%");
	
	$("#Start").click(start);           // calling the start , stop and reset and their respective events
	$("#Stop").click(stop);
	$("#Reset").click(reset);
	                                   // function to reset the clock
	function reset () {
		
		$("#myDiv1").text(0);
		$("#myDiv2").text(0);
		$("#myDiv3").text(0);
		window.started = false;
	}
	                                  //  function to stop the clock 
	function stop () {
		clearInterval(myVar);
		window.started = false;
	}
	                                 // function to start the clock
	                                 // it checks for the started variable if it is false it will enter and start 
	function start () {
		
		if(!window.started) {
			myVar = setInterval( function () {  seconds(); }, 1000 );
			window.started = true;
		}
		
	}
	                                 // this is the seconds counter add the seconds and checks if it reaches 60, then it calls the minutes
	                                 // function and sets the seconds to again to 1
	
	function seconds () {
		
		var seconds = $("#myDiv3").text().trim();
		
		if (seconds.length === 0) {
			$("#myDiv3").text(1);
		} else {
			seconds = parseInt(seconds) + 1;
			
			if ( parseInt(seconds) === 60 ) {
				$("#myDiv3").text(0);
				minutes();
			} else {
				$("#myDiv3").text(seconds);
			}
			
		}
		
	}
	
	function minutes () {
		
		var minutes = $("#myDiv2").text().trim();
		
		if ( minutes.length === 0) {
			$("#myDiv2").text(1);
		} else {
			minutes = parseInt(minutes) + 1;
			
			if ( parseInt(minutes) === 60 ) {
				$("#myDiv2").text(0);
				hour();
			} else {
				$("#myDiv2").text(minutes);
			}
			
		}
		
		
	}
	
	
	
	function hour () {
       		var hour = $("#myDiv1").text().trim();
       		
       		if ( hour.length === 0 ) {
       			$("#myDiv1").text(1);
       		} else {
       			hour = parseInt(hour) + 1;
       			
       			if ( parseInt(hour) === 24 ) {
    				reset();
       			} else  {
       				$("#myDiv1").text(hour);
       			}
       			
       		}
       		
	}
	
	
	
	
	
} );
