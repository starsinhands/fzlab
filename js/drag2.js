window.onload=function(){
	var objDiv1=document.createElement("div");
	objDiv1.style.width="200px";
	objDiv1.style.height="250px";
	objDiv1.style.border="1px solid red";
	objDiv1.style.margin="0 auto";
	document.body.appendChild(objDiv1);
	
	var objDiv2=document.createElement("div");
	objDiv2.style.width="200px";
	objDiv2.style.height="250px";
	objDiv2.style.border="1px solid blue";
	objDiv2.style.margin="0 auto";
	objDiv2.style.marginTop="5px";
	document.body.appendChild(objDiv2);
	
	var myimg=document.createElement("img");
	myimg.src="img/1.jpg";
	myimg.draggable=true;
	objDiv2.appendChild(myimg);
	myimg.ondragstart=function(e){
		
	}
	myimg.ondrag=function(e){
		
	}
	myimg.ondragend=function(e){
		
	}
	objDiv1.ondragenter=function(e){
		e.preventDefault();
	}
	objDiv1.ondragover=function(e){
		e.preventDefault();
	}
	objDiv1.ondragleave=function(e){
		e.preventDefault();
	}
	objDiv1.ondrop=function(e){
		objDiv1.appendChild(myimg);
	}
	objDiv2.ondragenter=function(e){
		e.preventDefault();
	}
	objDiv2.ondragover=function(e){
		e.preventDefault();
	}
	objDiv2.ondrop=function(e){
		objDiv2.appendChild(myimg);
	}
}