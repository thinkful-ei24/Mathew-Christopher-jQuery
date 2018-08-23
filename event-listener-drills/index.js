'use strict';
console.log('hello');
//listen for click on thumbnail
//listen for keyboard on thumbnail
//place clicked image in container
//updating alt attribute of image
//replace enlarged image

function main(){
  $('.thumbnails').on('click', event => {
    const selectedCat = $(event.target).attr('src');
    $('.hero').children().attr('src', selectedCat);
    console.log(selectedCat);
  });


}

function setSrc(event){
  const selectedCat = $(event.target).attr('src');
  $('.hero').children().attr('src', selectedCat);
  console.log(selectedCat);

}

$(main());
