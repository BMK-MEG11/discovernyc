// Slick Slider
$(document).ready(function(){
    $('.teaser-slider').slick({
      infinte: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000
    });
  });

// Typewriter
const textToReplace = document.getElementById('text-replace')
const replacementText = ['BRKLN', 'QNS', 'MNHTTN']
let i = 0
let j = 0


function loop () {
    if(i < replacementText.length) {
        console.log(replacementText[i])

        if(j < replacementText[i].length) {
            console.log(replacementText[i][j])
            j++
        }

        if (j == replacementText[i]) {

        }
    }
    setTimeout(loop, 500)
}

loop()