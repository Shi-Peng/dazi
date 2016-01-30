window.onload=function(){
	var el=document.getElementById('test');
	for (var i = 0; i <50; i++) {
		var jp=document.createElement('div');
		jp.setAttribute('class','jp');
		el.appendChild(jp);

		if(Math.random()>0.5){jp.innerHTML=String.fromCharCode(Math.floor(Math.random()*26)+65);}
		else{jp.innerHTML=String.fromCharCode(Math.floor(Math.random()*26)+97);}
	}
		var kaiguan=false;
		var j=0;
		document.onkeydown=function(e){
		var jp=document.getElementsByClassName('jp');
		if (String.fromCharCode(e.keyCode)==jp[j].innerHTML&&e.shiftKey==true||String.fromCharCode(e.keyCode+32)==jp[j].innerHTML&&e.shiftKey==false) {
			// el.removeChild(jp[0]);
			jp[j].style.color='black';
			// jp[j].style.background='white';
			jp[j].style.background='rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')';
			j++;
			kaiguan=true;
		};
		// if(el.firstElementChild==null){
		// location.reload();
		if(j>=50){
			clearInterval(timeId);
			alert(s);
			location.reload();
		}
	}
		var shijian=document.getElementById('shijian');
		var s=0;
		var timeId=setInterval(function(){
			if(kaiguan){
			s++;
			shijian.innerHTML=s;}
		},1000);

	    el.onmousedown = function(e){
        e.preventDefault();
    }
}