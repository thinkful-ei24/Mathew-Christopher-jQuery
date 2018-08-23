'use strict';

function doHelloWorld() {
  $('.js-hide-it').addClass('hidden');
  $('.js-hello-world').children().eq(1).text('Test');
  console.log( $('.js-hello-world').text() );

  console.log( $('.js-hello-world').attr('src') );
  $('.js-hello-world').attr('src', 'hello');
  console.log( $('.js-hello-world').attr('src') );
  console.dir($('.js-hello-world'));
}

doHelloWorld();