'use strict';
console.log('hello');
//listen for click on thumbnail
//listen for keyboard on thumbnail
//place clicked image in container
//updating alt attribute of image
//replace enlarged image

function main(){
  setSrc('click');

  //Doesn't work
  setSrc('keydown');


}

function setSrc(eventToCheck){
  $('.thumbnails').on(eventToCheck, event => {
    const selectedCat = $(event.target).attr('src');
    $('.hero').children().attr('src', selectedCat);
    
    const selectedCatAlt = $(event.target).attr('alt');
    $('.hero').children().attr('alt', selectedCatAlt);
    //console.log(selectedCat);
  });
  

}

$(main());
