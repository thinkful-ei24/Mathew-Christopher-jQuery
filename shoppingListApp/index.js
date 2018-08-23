'use strict';

//enter items by entering text and hitting Return or clicking Add Item Button
//  DONE-get text then clear text
//  DONE-Generate html of below
{/* <li>
        <span class="shopping-item">apples</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li> */}
//    DONE-Put html on the website
//DONE Check or uncheck items on the list by clicking the Check button -> toggleClass()
//DONE Permanantly remove items from the list using Delete button -> Event Delegation and remove()

function main() {
  
  $('#js-shopping-list-form').children('button').on('click', function(event) {
    event.preventDefault();

    let shoppingInput = $('.js-shopping-list-entry').val();
    $('.js-shopping-list-entry').val('');

    $('ul').append( generateHtml(shoppingInput));
    
  });

  //add event listener on the button
  //find parent class="shopping-item"
  //toggleClass('shopping-item__checked')
  //console.log($('.shopping-list').find('.shopping-item-toggle') )
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    event.preventDefault();
    console.log('test');

    $(this)
      .closest('li')
      .find('.shopping-item')
      .toggleClass('shopping-item__checked');
  });

  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    event.preventDefault();

    $(this)
      .closest('li')
      .remove();
  });
}

function generateHtml(listEntry) {
  return `<li> 
  <span class="shopping-item">${listEntry}</span>
  <div class="shopping-item-controls">
    <button class="shopping-item-toggle">
      <span class="button-label">check</span>
    </button>
    <button class="shopping-item-delete">
      <span class="button-label">delete</span>
    </button>
  </div>
</li>`
}


$(main());