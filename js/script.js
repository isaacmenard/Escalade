// JavaScript Document

	//mur
    listPrises = document.getElementsByTagName("td")
	listPrisesId = ["square",null,null,"image","rond"]
	listPrisesColors = ["red","green","yellow","blue"]
	
	for(var i = 0; i < listPrises.length;i++){
		var newPrise = document.createElement("div")
		newPrise.className = "prises "
		newPrise.className = newPrise.className+listPrisesColors[Math.floor(Math.random() *listPrisesColors.length)]
		newPrise.className = newPrise.className+" "+listPrisesId[Math.floor(Math.random() * listPrisesId.length)]
		listPrises[i].appendChild(newPrise)
	}
	
	//stickMan
	if(document.getElementsByTagName("headStick")){
		var divPrec = null
		for(var i = 0; i < 10;i++){
			var pointStick = document.createElement("div")
			pointStick.className = "pointStick"
			
			switch(i){
				case 0:pointStick.className += " headPoint";break;
				case 1:pointStick.className += " bodyPoint";break;
				case 2:pointStick.className += " leftArmPoint1";break;
				case 3:pointStick.className += " leftArmPoint2";break;
				case 4:pointStick.className += " rightArmPoint1";break;
				case 5:pointStick.className += " rightArmPoint2";break;
				case 6:pointStick.className += " leftLegPoint1";break;
				case 7:pointStick.className += " leftLegPoint2";break;
				case 8:pointStick.className += " rightLegPoint1";break;
				case 9:pointStick.className += " rightLegPoint2";break;
			}
			
			
			pointStick.style.top = randomNumber(500)+"px"
			pointStick.style.left = randomNumber(500)+"px"
			
			pointStick.onmouseover = function(){
				this.className = this.className + " hover"
				this.innerHTML = "<p class='textPoint'>"+this.className.split(" ")[1]+"</p>"
			}
			pointStick.onmouseleave = function(){
				this.innerHTML = ""
				this.className = this.className.split(" ")[0]+" "+this.className.split(" ")[1]
			}
			
			pointStick.onmousedown = function(){
				if(this.className.split(" ")[2] == "hover"){
				this.style.border = "solid red 2px"}
			}
			pointStick.onmouseup = function(){
				if(this.className.split(" ")[2] == "hover"){
				this.style.border = "solid red 0px"}
			}
			
			dragElement(pointStick);
			document.getElementsByClassName("stickMan")[0].appendChild(pointStick)
			
			var myLine = document.createElement("line")
			myLine.setAttribute("x1",getPos(divPrec).x)
			myLine.setAttribute("x2",getPos(pointStick).x)
			myLine.setAttribute("y1",getPos(divPrec).y)
			myLine.setAttribute("y2",getPos(pointStick).y)
			myLine.setAttribute("stroke","black")
			myLine.setAttribute("stroke-width","2")
			
			document.getElementsByTagName("svg")[0].appendChild(myLine)
			
			divPrec = pointStick
		}
	}
	
;


function randomNumber(limit){
  return Math.floor(Math.random()*limit);
}

function getPos(el) {
    // yay readability
    for (var lx=0, ly=0;
         el != null;
         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return {x: lx,y: ly};
}


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
	  elmnt.style.border = "solid red 2px"
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	  
  }

  function closeDragElement() {
	  elmnt.style.border = "solid red 0px"
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
