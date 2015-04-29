//This is the template we're going to be using to insert into the page
var template = function(text) { 
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {
	//1. Adding items to the to do list
  $('form').submit(function() { //when form is submitted, this block is what we want to happen
    var text = $('#todo').val(); //this gets the value of the input field
    // console.log(text); 
    var html = template(text); //calling the template function which will return the templated response--plugging in the text var
    // console.log(html);

    //Append html to div class
    $('.list').append(html); //add html var to the div.list

    //clear input id of #todo
    $('#todo').val(""); //resets it to be an empty string instead of keeping the last thing typed in before

    return false; //saying preventDefault for links; it's telling the form that it's not actually doing anything otherwise it would reload the page when the form is 'submitted'
  });

  //2. Making star yellow
  // $('.glyphicon-star').click(function(){
  // 	$(this).toggleClass("active"); //binding this when the page loads- so the items
  // });

	//See notes: including list context to include li elements appended
  $(".list").on("click", ".glyphicon-star", function(){ //bind actions to the list itself because you know that that list will always be on that page
  	$(this).toggleClass("active"); //
  });

  //same problem about appended items- wouldn't remove later elements
  $(".list").on("click", ".glyphicon-remove", function(){
  		$(this).closest("p").remove(); //move up within our parents; removes closest paragraph element and not just the icon
  });

};






$(document).ready(main);

/*****************************************************************************
		Notes
*****************************************************************************/
/*
http://s3.amazonaws.com/codecademy-content/projects/2/listeasy/README.html

Objectives:
	1. Add item to list
		-Wanting to add this whole <p> section in div class .list
	2. Mark a star
	3. Remove element when clicked

-Variables can be comma separated to define all your variables at the top to make it prettier
-Binding happens when the page loads- so the items added after page loads will not be bound- that's why we get the bug of the start not working to added elements

Navigating up and down the DOM tree
	.closest (looks outward) //see line 34
	.find (looks within)

	--Walter doesn't really use these--
	.parent (only goes up one level- only looks for parent)
	.children (only goes up one level- only looks for parent)

*/




