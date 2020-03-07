var listeMurs = {
  "laListe": ["Mur1","Mur2"]
};

var listeDesMurs = {
  "Mur1": {
    slide: 6,
    folder: "Mur1"
  },"Mur2": {
    slide: 2,
    folder: "Mur2"
  },
};

var notreMur = listeDesMurs[listeMurs.laListe[0]];

folder = notreMur.folder
slide = 0
slideMax = notreMur.slide


function changeSlide(direction) {
  if (direction == "+1") {
    if (slide < slideMax) {
      slide++
    }
  } else {
    if (slide > 0) {
      slide--
    }
  }
  refreshPage()
}

function refreshPage() {
	if(slide == 0){
		document.getElementById("prev").style.visibility = "hidden"
	}else{
		document.getElementById("prev").style.visibility = "visible"
	}
	
	if(slide == slideMax){
		document.getElementById("next").style.visibility = "hidden"
	}else{
		document.getElementById("next").style.visibility = "visible"
	}
  document.getElementById("mur").src = "imagesEscalades/" + folder + "/slide" + slide + ".png"
}

refreshPage()
