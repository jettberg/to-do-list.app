
$(document).ready(function() {
     
  function newItem() {

let inputValue = $('input').val();
if (inputValue === '') {
  alert("You have to add something!");
} else {
  let li = $('<li></li>').text(inputValue);
  $('#list').append(li);
  $('input').val('');
}

li.on("dbclick", function() {
  li.toggleClass("strike");
});

let crossOutButton = $('<button class= "crossOutButton">X</button>');
li.append(crossOutButton);

crossOutButton.on("click", function () {
li.addClass("delete");
});

$('#list').append(li);
$('#input').val('');
}

$('#button').on('click', newItem);
    
}); 
    
    
    


























    
    
    // If you get stuck, you can look below for the jQuery code. However, try yourself to convert the vanilla JS code provided to jQuery first.
    
    
    
    
    
    
    
    
      /*
    // jQuery Code
    //1. Adding a new item to the list:
    
      let li = $('<li></li>');
      let inputValue = $('#input').val();
      li.append(inputValue);
    
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        $('#list').append(li);
      }
    //2. Crossing an item out:
      function crossOut() {
            li.toggleClass("strike");
        }
    
        li.on("dblclick", function crossOut() {
            li.toggleClass("strike");
        });
    //3. Adding a delete button
      let crossOutButton = $('<crossOutButton></crossOutButton>');
      crossOutButton.append(document.createTextNode('X'));
      li.append(crossOutButton);
    
    //   crossOutButton.on("click", deleteListItem);
    //   function deleteListItem(){
    // 		li.addClass("delete")
    // 	}
       $('#list').sortable();
    */
    
    
    
    
    