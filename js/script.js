var listeMurs = {
  "laListe": ["Mur1","Mur2"]
};

var listeDesMurs = {
  "Mur1": {
    slide: 7,
    folder: "Mur1"
  },"Mur2": {
    slide: 2,
    folder: "Mur2"
  },
};

var notreMur = listeDesMurs[listeMurs.laListe[0]];

folder = notreMur.folder
slide = 0
slideMax = notreMur.slideMax

$.ready(function () {
  refreshPage()
})

function changeSlide(direction) {
  if (direction == "+1") {
    if (slide != slideMax) {
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
  document.getElementById("mur").src = "imagesEscalades/" + folder + "/slide" + slide + ".png"
}
