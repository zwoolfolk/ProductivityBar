function addBar(){
	document.body.innerHTML += '<div id="myProgress"></div><div id="myBar"></div>';
}

addBar();



function move() {
  var elem = document.getElementById("myBar");   
  var position = 0;
  elem.style.left = 0;
  var totalTime = 100;				//36000 = 1hr
  var id = setInterval(frame, totalTime);		
  document.getElementById("")
  function frame() {
    if (position >= 99) {
		clearInterval(id);
		setTimeout(move(), totalTime);
    } else {
		position++; 
		elem.style.left = position + '%'; 
    }
  }
}


function setBreaks(num, dur) {
	var bod = document.body;
	var interval = 100 / num;
	breakWidth = 100 / (60 / dur);
	for(i = 0; i < num; i++) {
		var brk = '<div class="break" id="break' + i + '"></div>';
		bod.innerHTML += brk;
		brk = document.getElementById("break"+i);
		if(i === 0) {
			brk.style.right = 0;
		}
		else {
			brk.style.right = (interval*i) + '%';
		}
		brk.style.width = breakWidth + '%';
	}
}



setBreaks(2, 7);
move();