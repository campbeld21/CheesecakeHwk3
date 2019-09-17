 //src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">
 
		// function to get values for Toppings
		 function getValue(formID, toppingID){
			var x;
			var options = formID.elements[toppingID];
			for (var i = 0; len = options.length, i < len;i++){
				if(options[i].checked){
					x = options[i].value;
					break;
				}
			}
			return x; 
		}
		
	
	/* 
	   Implemented Javascript to alert if the word vegan is used in the notes. 
	   If vegan is not used, the order info is hidden 
	   and replaced with the quantity, toppings, and notes 
	*/

	orderHandler = function (){
        var notes = document.getElementById("textarea").value;
        	if(notes.includes("vegan")){
                alert("Alert! Our cheesecakes contain dairy.");
            }
            else{
                $("#orderInfo").hide();

                document.getElementById("completeOrder1").innerHTML = "Thank you! Your order has been placed.";
                document.getElementById("completeOrder2").innerHTML = "Order Details:";
                var selectedQuantity = $("#quantity").find(":selected").text();
                document.getElementById("quantityPrint").innerHTML = "Quantity: " + selectedQuantity;
                var selectedToppings = getValue(document.getElementById('toppings'), 'flavor');
                document.getElementById("toppingsPrint").innerHTML = "Toppings: " + selectedToppings;
                document.getElementById("notesPrint").innerHTML = "Notes: " + notes;
                                }
			}
			
	dropdownHandler = function (){
			$("#dropdownButton .selection").text($(this).text());
	}
			

		$(function() {
			$("#myButton").click(orderHandler);
			$("#dropdown a").click(dropdownHandler);
		});
	
	
	
