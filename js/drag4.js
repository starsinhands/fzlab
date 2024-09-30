window.onload=function(){
	var imgDiv=document.createElement("div");
	imgDiv.id = "imgDiv";
	imgDiv.style.width="400px";
	imgDiv.style.height="220px";
	imgDiv.style.border="1px solid red";
	imgDiv.style.margin="0 auto";
	document.body.appendChild(imgDiv);
	
	for(var i=1;i<4;i++){
		var objImg=document.createElement("img");
		objImg.src="img/"+i+".jpg";
		objImg.draggable=true;
		objImg.id=i;
		objImg.ondragstart=function(e){
			var objID=e.target.id;
			e.dataTransfer.setData("ID",objID);
		}
		imgDiv.appendChild(objImg);
	}
	
	var containDiv=document.createElement("div");
	containDiv.id = "containDiv";
	containDiv.style.width="400px";
	containDiv.style.height="220px";
	containDiv.style.border="1px solid blue";
	containDiv.style.margin="0 auto";
	containDiv.style.marginTop="5px";
	containDiv.ondragenter=function(e){
		e.preventDefault();
	}
	containDiv.ondragover=function(e){
		e.preventDefault();
	}
	containDiv.ondrop=function(e){
		e.preventDefault();
		var objId=e.dataTransfer.getData("ID");
		var obj=document.getElementById(objId);
		// 计算鼠标相对蓝色框的位置，新加
		var offsetX = e.offsetX - obj.width / 2;
		var offsetY = e.offsetY - obj.height / 2;

		// 将图片的位置更新到鼠标松开的位置，新加
		obj.style.left = offsetX + "px";
		obj.style.top = offsetY + "px";

		containDiv.appendChild(obj);
	}
	document.body.appendChild(containDiv);
}